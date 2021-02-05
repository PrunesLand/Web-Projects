import React from 'react'
import {Section, Container, TextContainer, Text, ImageContainer, ImageText, ImageWrapper,InfoLogo} from './FourthStyles'
import Fade from 'react-reveal/Fade';


const Fourth = () => {
    return (
        <Section>
            <Container>
                <TextContainer >
                    <Text>
                        <Fade fraction={0.4}>

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt distinctio fuga molestiae eum eius quod voluptatibus exercitationem aliquid cum vero.
                        </Fade>
                    </Text>
                </TextContainer>
                <ImageContainer>
                    <InfoLogo />
                    <ImageWrapper>
                        <ImageText>
                            <Fade right fraction={0.4}>
                            More Information.

                            </Fade>
                        </ImageText>

                    </ImageWrapper>
                </ImageContainer>
            </Container>
        </Section>
    )
}

export default Fourth
