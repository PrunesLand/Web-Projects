import React from 'react'
import { Parallax } from 'react-parallax'
import {HeroSection, HeroWrapper, HeroText} from './FifthStyles'
import hero from '../Images/Finalized images/table1.JPG'

const Fifth = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <Parallax bgImage={hero} strength={100}>
                    <HeroText>
                        <h1>Reception.</h1>
                    </HeroText>
                    <div style={{height:'70vh', backgroundColor: 'black', opacity: '40%'}}></div>
                </Parallax>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Fifth
