import React from 'react'
import { Parallax } from 'react-parallax'
import {Section, Container, ImageContainer, HeroText, TextWrapper, Content, FooterContainer, FooterImage} from './TailStyles'
import park from '../Images/Finalized images/park.JPG'
import sign from '../Images/Finalized images/sign.JPG'


const Tail = () => {
    return (
        <Section>
            <Container>
                <ImageContainer>
                    <Parallax bgImage={park}>
                        
                        <HeroText>
                            Park
                        </HeroText>
                        <div style={{height: '60vw', backgroundColor: 'black', opacity: '30%'}}></div>
                    </Parallax>
                </ImageContainer>
                <TextWrapper>
                    <Content>
                        <h1>Header</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus natus cumque aliquam nobis non, saepe, id placeat debitis iusto alias consequatur voluptatem odit laboriosam ipsa dicta labore nulla recusandae a est accusantium unde vero sequi minima. Ex, omnis nesciunt.</p>
                    </Content>
                </TextWrapper>
                <FooterContainer>
                    <FooterImage src={sign}/>
                </FooterContainer>
            </Container>
        </Section>
    )
}

export default Tail
