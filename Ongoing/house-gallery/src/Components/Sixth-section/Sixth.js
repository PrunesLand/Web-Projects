import React from 'react'
import {Section, Container, ImageWrapper, TextContainer, Content, ImageContainer, Header} from './SixthStyles'


const Sixth = ({image, alt, reverse}) => {
    return (
        <Section>
            <Container>
                <ImageContainer>
                    <ImageWrapper reverse={reverse}>
                        <img src={image} alt={alt} />
                    </ImageWrapper>
                </ImageContainer>
                <TextContainer reverse={reverse}>
                    <Header>
                        Header
                    </Header>
                    <Content>
                        

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo rerum suscipit pariatur soluta voluptatum dolorum rem accusantium, porro deleniti, nulla quia dolore necessitatibus temporibus consequuntur possimus, fugiat autem expedita.
                    </Content>
                </TextContainer>
                
            </Container>
        </Section>
    )
}

export default Sixth
