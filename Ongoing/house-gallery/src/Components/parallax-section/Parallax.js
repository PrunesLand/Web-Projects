import React from 'react'
import {HeroContainer, HeroSection, HeroWrapper, HeroImageWrapper, HeroImage,  HeroText, TextContainer, HeroHeader} from './ParallaxStyles'


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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum mollitia impedit blanditiis voluptate soluta. Sint natus non quo praesentium, cupiditate quibusdam nam itaque tempore sequi quas nihil, voluptatibus asperiores blanditiis.
                    </TextContainer>
                </HeroText>
            </HeroContainer>
        </HeroSection>
    )
}

export default Parallax
