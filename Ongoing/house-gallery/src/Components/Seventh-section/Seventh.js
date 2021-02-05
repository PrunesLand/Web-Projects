import React from 'react'
import { Parallax } from 'react-parallax'
import {Section, Container, IntroContainer, IntroText, MainHero, MainContainer, MainText, InfoLogo, ImageText, ImageWrapper,ImageContainer} from './SeventhStyles'
import main from '../Images/Finalized images/woodWork2.JPG'
import Fade from 'react-reveal/Fade';

const Seventh = () => {
    return (
        <Section>
            <Container> 
                <IntroContainer>
                    <IntroText>
                        Woodwork
                    </IntroText>
                </IntroContainer>
                <MainHero>
                    <MainContainer>
                        <Parallax bgImage={main} strength={150}> 
                            <div style={{height: '50vw'}}></div>
                        </Parallax>
                    </MainContainer>
                    <MainText>
                        <h1>
                            <Fade top fraction={0.4}>  

                            Header
                            </Fade>
                        </h1>
                        <Fade bottom fraction={0.4}>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error voluptatibus autem nemo perspiciatis praesentium, a rem cupiditate reiciendis enim! Quae neque adipisci mollitia amet voluptatum impedit iste ab iusto!<br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum ipsa aspernatur numquam obcaecati id ab, inventore dolores itaque deserunt quisquam? Quasi, ipsum ab nesciunt debitis, expedita aspernatur cupiditate qui iure repellendus laudantium eos iste. Non minima omnis fugiat a.
                        </p>
                        </Fade>
                    </MainText>

                </MainHero>
                <ImageContainer>
                    <ImageWrapper>
                        <ImageText>
                            <Fade left fraction={0.4}>
                            More Information.

                            </Fade>
                        </ImageText>

                    </ImageWrapper>
                    <InfoLogo />
                </ImageContainer>
            </Container>
        </Section>
    )
}

export default Seventh
