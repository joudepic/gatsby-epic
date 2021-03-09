import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from 'styled-components'
import SEO from '../components/SEO'
import PageIntro from '../components/pageIntro'

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
`

const PostTitle = styled.h1`
    font-size: 1.875rem;
    line-height: 1.2;
    margin-bottom: .2em;
    font-weight: 400;
`

const PostInfo = styled.p`
      line-height: 1.45;
    color: #25aae1;
`


const PageWrapper = styled.section`
    max-width: 978px;
    margin: 0 auto;
    margin-top: 25px;
`

export default function BlogPost({ data }) {
  const {featuredImage, title, date, content, categories, author, excerpt} = data.allWpPost.edges[0].node

  let SEO_OBJ = {
    title,
    description: excerpt,
  }

  if(featuredImage?.node?.sourceUrl){
    SEO_OBJ['image'] = featuredImage.node.sourceUrl
  }

  return (
    <Layout>
      <SEO
        {...SEO_OBJ}
      />
      <PageIntro 
        title="Blog"
        slug={'/blog'}
      />
      <PageWrapper>
        {featuredImage?.node?.sourceUrl && <FeaturedImage src={featuredImage.node.sourceUrl} />}
        <PostTitle>{title}</PostTitle>
        <PostInfo>{date} / {categories.nodes.map((category, index) =>  { 
          return(
            <span key={category.name}>{category.name} {index+1 < categories.nodes.length && ', '}</span>
          )
        })
        } / {author.node.name}</PostInfo>

        <div dangerouslySetInnerHTML={{ __html: content }} />

        <hr />

        </PageWrapper>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
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
          content
        }
      }
    }
  }
`