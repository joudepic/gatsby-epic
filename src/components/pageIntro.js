import React from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby'

const PageIntroHolder = styled.section`
    background-color: #25aae1;
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    text-align: center;

    h1{
        line-height: 1.2;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 3rem;
        color: #fff;
    }

    ul{
        list-style: none;
        padding-left: 0;
    }

    li{
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
    }

    .separator,
    li a{
        color: #fff;
        text-decoration: none;
    }
`

const PageIntro = ({title,slug}) => {

    return(
        <PageIntroHolder>
            <h1>{title}</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li className="separator">»</li>
                <li><Link to={`${slug}/`}>{title}</Link></li>
            </ul>
        </PageIntroHolder>
    )

}

export default PageIntro