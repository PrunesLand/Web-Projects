import React from 'react'
import {HeroContainer, HeroSection, HeroWrapper, HeroImageWrapper,   HeroText, TextContainer, HeroHeader} from './ParallaxStyles'


const Parallax = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroWrapper>
                    <HeroImageWrapper>
                        <HeroHeader>
                            Yard
                        </HeroHeader>
                        
                        
                    </HeroImageWrapper>
                </HeroWrapper>
                <HeroText>
                    <TextContainer>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum mollitia impedit blanditiis voluptate soluta. 
                    </TextContainer>
                </HeroText>
            </HeroContainer>
        </HeroSection>
    )
}

export default Parallax
