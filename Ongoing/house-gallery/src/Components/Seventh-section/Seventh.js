import React from 'react'
import { Parallax } from 'react-parallax'
import {Section, Container, IntroContainer, IntroText, MainHero, MainContainer, MainText, FooterHero, FooterContainer} from './SeventhStyles'
import main from '../Images/Finalized images/woodWork2.JPG'

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
                        <h1>Header</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat error voluptatibus autem nemo perspiciatis praesentium, a rem cupiditate reiciendis enim! Quae neque adipisci mollitia amet voluptatum impedit iste ab iusto!<br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum ipsa aspernatur numquam obcaecati id ab, inventore dolores itaque deserunt quisquam? Quasi, ipsum ab nesciunt debitis, expedita aspernatur cupiditate qui iure repellendus laudantium eos iste. Non minima omnis fugiat a.
                        </p>
                    </MainText>

                </MainHero>
                <FooterHero>
                    <FooterContainer>

                    </FooterContainer>

                </FooterHero>
            </Container>
        </Section>
    )
}

export default Seventh
