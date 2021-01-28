import React from 'react'
import {IntroSection, InfoContainer, TextContainer, TitleWrapper, TextWrapper, ImageContainer, IntroImage, TitleBot, TitleTop} from './IntroStyles'

const Intro = () => {
    return (
        <IntroSection>
            <InfoContainer>
                <TextContainer>
                    <TitleWrapper>
                        <TitleTop>
                            Wisma
                        </TitleTop>
                        <TitleBot>
                            Gallery
                        </TitleBot>
                         
                    </TitleWrapper>
                    <TextWrapper>
                        An insight to the amazing artworks in the home of the Consulate-General of Indonesia in Sydney.
                    </TextWrapper>
                </TextContainer>

                <ImageContainer>
                    <IntroImage />
                </ImageContainer>
            </InfoContainer>
        </IntroSection>
    )
}

export default Intro
