import React from 'react';
import Styled from 'styled-components'
import {Link} from 'gatsby'

const PostHolder = Styled.article`
    width: calc(33.333333333333% - 30px - 5px);
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    margin-top: 50px;
    display: inline-block;
    min-height: 400px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 11px 0px #ddd;

    img{
        max-height: 200px;
        width: 100%;
    }
    h2,h5{
        text-decoration: none;
        color: #333;
        padding-left: 15px;
        padding-right: 15px;
    }
`

const Post = ({post}) => {

    const {title, date, excerpt,featuredImage, slug} = post

    return(
        <PostHolder>
            <Link to={`/post/${slug}`}>
                {featuredImage?.node?.sourceUrl && <img src={featuredImage.node.sourceUrl} />}
                <h2>{title}</h2>
                <h5>{date}</h5>
            </Link>
        </PostHolder>
    )
}

export default Post