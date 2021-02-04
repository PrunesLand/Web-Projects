import React from 'react'
import {Section, Container, ImageWrapper, ImageText, TextContainer, Content, ImageParallax, ImageContainer, Header} from './ThirdStyles'
import Fade from 'react-reveal/Fade';

const Third = () => {
    return (
        <Section>
            <Container>
                <Fade left>
                <ImageContainer>

                    <ImageWrapper>
                        <ImageText>

                        </ImageText>
                    </ImageWrapper>
                </ImageContainer>
                </Fade>
                <TextContainer>
                    <Header>
                        <Fade right>
                        Header

                        </Fade>
                    </Header>
                    <Content>
                        
                        <Fade up>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo rerum suscipit pariatur soluta voluptatum dolorum rem accusantium, porro deleniti, nulla quia dolore necessitatibus temporibus consequuntur possimus, fugiat autem expedita.
                        </Fade>
                    </Content>
                </TextContainer>
                <ImageParallax>
                    
                </ImageParallax>
            </Container>
        </Section>
    )
}

export default Third
