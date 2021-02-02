import React from 'react'
import { Parallax } from 'react-parallax'
import {HeroSection, HeroWrapper, HeroText} from './FifthStyles'
import hero from '../Images/Finalized images/table1.JPG'

const Fifth = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <Parallax bgImage={hero} strength={400}>
                    <HeroText>
                        <h1>Reception.</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos, asperiores mollitia in debitis id!
                        </p>
                    </HeroText>
                    <div style={{height:'90vw', backgroundColor: 'black', opacity: '50%'}}></div>
                </Parallax>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Fifth
