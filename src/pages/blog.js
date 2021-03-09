import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import PageIntro from '../components/pageIntro'
import Post from '../components/post'


const blog = ({data}) => {

    const {posts} = data.allWpPost

    return (
        <Layout>
            <PageIntro title="Blog" slug={'/blog'} />
                {posts.map((post, index) => (
                  
                    <Post 
                        post={post.node}
                        key={index}
                    />
                
                ))}
        </Layout>
    )
}

export const query = graphql`
  {
    allWpPost {
      posts: edges {
        node {
            id
          title
          slug
          excerpt
          categories {
            nodes {
              name
            }
          }
          author {
            node {
              name
            }
          }
          date(formatString: "MMM DD, YYYY")
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default blog
