import React from 'react'
import {FooterSection, FooterContainer} from './FooterStyles'

import { AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <h2>"Thanks for sticking this far!"</h2>
                <h2>- PrunesLand</h2>
                <h3>This site was made with ReactJS.</h3>
                <ul>
                    <AiOutlineGithub/>
                    <AiOutlineLinkedin />
                </ul>
                
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
