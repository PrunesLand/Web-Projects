import React from 'react'
import { Parallax } from 'react-parallax'
import {Section, Container, ImageContainer, HeroText, TextWrapper, Content, FooterContainer, FooterImage} from './TailStyles'
import park from '../Images/Finalized images/park.JPG'
import sign from '../Images/Finalized images/sign.JPG'
import Fade from 'react-reveal/Fade';

const Tail = () => {
    return (
        <Section>
            <Container>
                <ImageContainer>
                    <Parallax bgImage={park} strength={150}>
                        
                        <HeroText>
                            Courtyard.
                        </HeroText>
                        <div style={{height: '60vw', backgroundColor: 'black', opacity: '30%'}}></div>
                    </Parallax>
                </ImageContainer>
                <TextWrapper>
                    <Content>
                        <h1>
                            <Fade top fraction={0.4}>

                            Header
                            </Fade>
                        </h1>
                        <p>
                            <Fade bottom fraction={0.4}>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus natus cumque aliquam nobis non, saepe, id placeat debitis iusto alias consequatur voluptatem odit laboriosam ipsa dicta labore nulla recusandae a est accusantium unde vero sequi minima. Ex, omnis nesciunt.
                            </Fade>
                        </p>
                    </Content>
                </TextWrapper>
                <FooterContainer>
                    <Fade bottom fraction={0.4}>

                    <FooterImage src={sign}/>
                    </Fade>
                </FooterContainer>
            </Container>
        </Section>
    )
}

export default Tail
