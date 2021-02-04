import React from 'react'
import {Section, Container, ImageWrapper, TextContainer, Content, ImageContainer, Header} from './SixthStyles'
import Fade from 'react-reveal/Fade';

const Sixth = ({image, alt, reverse}) => {
    return (
        <Section>
            <Container>
                <ImageContainer>
                    <ImageWrapper reverse={reverse}>
                        <Fade top fraction={0.4}>

                        <img src={image} alt={alt} />
                        </Fade>
                    </ImageWrapper>
                </ImageContainer>
                <TextContainer reverse={reverse}>
                    <Header>
                        <Fade up fraction={0.5}>

                        Header
                        </Fade>
                    </Header>
                    <Content>
                        
                        <Fade up fraction={0.5}>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo rerum suscipit pariatur soluta voluptatum dolorum rem accusantium, porro deleniti, nulla quia dolore necessitatibus temporibus consequuntur possimus, fugiat autem expedita.
                        </Fade>
                        
                    </Content>
                </TextContainer>
                
            </Container>
        </Section>
    )
}

export default Sixth
