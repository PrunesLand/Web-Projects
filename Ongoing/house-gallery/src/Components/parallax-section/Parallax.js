import React from 'react'
import {HeroContainer, HeroSection, HeroWrapper, HeroImageWrapper,   HeroText, TextContainer, HeroHeader} from './ParallaxStyles'
import Fade from 'react-reveal/Fade';

const Parallax = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroWrapper>
                    <HeroImageWrapper>
                        <HeroHeader>
                            <Fade left fraction={0.4}>
                                Entrance.
                            </Fade>
                        </HeroHeader>
                        
                        
                    </HeroImageWrapper>
                </HeroWrapper>
                <HeroText>
                    <TextContainer>
                        <Fade bottom fraction={0.4}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum mollitia impedit blanditiis voluptate soluta. 
                        </Fade>
                    </TextContainer>
                </HeroText>
            </HeroContainer>
        </HeroSection>
    )
}

export default Parallax
