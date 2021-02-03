import React from 'react'
import {FooterSection, FooterContainer, RightColumn, LeftColumn, ProfileImage} from './FooterStyles'
import image from '../Images/testPhoto.jpg'
import { AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <FooterSection>
                <h2>Made with ReactJS</h2>
            <FooterContainer>
                <RightColumn>
                    <ProfileImage src ={image}/>
                </RightColumn>
                <LeftColumn>
                    <p>
                        This site was made by PrunesLand<br/><br/>
                        Reach out to me at:
                    </p>
                    <ul>
                        <AiOutlineGithub />
                        <AiOutlineLinkedin />
                        
                    </ul>
                </LeftColumn>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
