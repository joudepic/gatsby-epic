import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery, Link} from 'gatsby'

const query = graphql`
    {
        allWpMenu(filter: {name: {eq: "mainNav"}}) {
            nodes {
                menuItems {
                    nodes {
                        label
                        id
                        url
                    }
                }
            }
        }
    }
`

const NavBarComponent = styled.nav`
    max-width: 1280px;
    margin: 0 auto;
    display:block;
    position:relative;
    min-height: 50px;
    background-color:#fff;

    ul{
        list-style: none;
        padding-left: 0;
    
        li{
            margin-right: 25px;
            float: right;
            
            a{
                color: #333!important;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.2s ease-in-out;
            }
        }

    }
`

const LogoWrapper = styled(Link)`
    float: left;
    font-size: 28px;
    color: #26a8e0;
    letter-spacing: 1px;
    text-decoration: none;

    span{
        font-weight: bolder;
    }
`

const NavBar = () => {

    const {
        allWpMenu: {
            nodes
        }
    } = useStaticQuery(query)

    return (
        <NavBarComponent>
            <LogoWrapper to={`/`}><strong>Epic</strong> Design Labs</LogoWrapper>
            <ul>
                {nodes[0].menuItems.nodes.map((value,index) => {
                    return(
                        <li key={index}>
                            <Link to={`${value.url}`}>{value.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </NavBarComponent>
    )
}

export default NavBar
