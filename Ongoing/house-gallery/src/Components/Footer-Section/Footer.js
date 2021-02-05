import React from 'react'
import {FooterSection, FooterContainer,GithubLogo, LinkedInLogo} from './FooterStyles'

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <h2>"Thanks for sticking this far!"</h2>
                <h2>- PrunesLand</h2>
                <h3>This site was made with ReactJS.</h3>
                <ul>
                    <GithubLogo />
                    <LinkedInLogo />
                </ul>
                
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
