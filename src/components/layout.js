import React from 'react'
import styled from 'styled-components'
import './layout.css'
import Navbar from './navbar'

const SiteWrapper = styled.section`
    max-width: 100%;
    margin: 0 auto;
`

const layout = ({children}) => {
    return (
        <SiteWrapper>
            <Navbar />
            {children}
        </SiteWrapper>
    )
}

export default layout