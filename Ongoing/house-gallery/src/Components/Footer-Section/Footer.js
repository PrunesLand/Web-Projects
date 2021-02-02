import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    height:30vw;
    background-color:grey;
`

const FooterContainer = styled.div``

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <h2>Made by PrunesLand</h2>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
