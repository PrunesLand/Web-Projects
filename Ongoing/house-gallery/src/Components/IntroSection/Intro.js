
import {IntroSection, InfoContainer, TextContainer, TitleWrapper, TextWrapper, ImageContainer, IntroImage, TitleBot, TitleTop} from './IntroStyles'
import Fade from 'react-reveal/Fade';
import image from '../Images/Finalized images/eagle.JPG'

const Intro = () => {
    

    

    

    return (
        <IntroSection>
           
            <InfoContainer>
                
                <TextContainer>
                    <TitleWrapper>
                        <TitleTop>
                            <Fade left delay={200}>
                                Wisma
                            </Fade>
                        </TitleTop>
                        <TitleBot>
                            <Fade left delay={400}>
                                Gallery
                            </Fade>
                        </TitleBot>
                         
                    </TitleWrapper>
                    <TextWrapper>
                        <Fade left delay={700}>
                        An insight to the amazing artworks in the home of the Consulate General of Indonesia in Sydney.
                        </Fade>
                    </TextWrapper>
                </TextContainer>

                <ImageContainer>
                <Fade delay={1200}>
                    <IntroImage src={image} />
                </Fade>
                </ImageContainer>
            </InfoContainer>
            
        </IntroSection>
    )
}

export default Intro
