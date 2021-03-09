import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from 'styled-components'
import SEO from '../components/SEO'
import PageIntro from '../components/pageIntro'


const PageWrapper = styled.section`
    max-width: 978px;
    margin: 0 auto;
    margin-top: 25px;
`

export default function Page({ data }) {

  const {title, content, slug} = data.allWpPage.edges[0].node

  let SEO_OBJ = {
    title,
  }

  return (
    <Layout>
      <SEO
        {...SEO_OBJ}
      />
      <PageIntro 
        title={title}
      />
      <PageWrapper>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        </PageWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          slug
          content
        }
      }
    }
  }
`