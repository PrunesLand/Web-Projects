import React, {useState, useEffect} from 'react'
import {IntroSection, InfoContainer, TextContainer, TitleWrapper, TextWrapper, ImageContainer, IntroImage, TitleBot, TitleTop} from './IntroStyles'
import {useSpring, animated} from 'react-spring'

const Intro = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    

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
