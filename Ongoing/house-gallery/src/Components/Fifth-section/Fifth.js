import React from 'react'
import { Parallax } from 'react-parallax'
import {HeroSection, HeroWrapper, HeroText} from './FifthStyles'
import hero from '../Images/Finalized images/table1.JPG'
import Fade from 'react-reveal/Fade';

const Fifth = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <Parallax bgImage={hero} strength={400}>
                    <HeroText>
                        <h1>
                            <Fade up fraction={0.4}>

                            Reception.
                            </Fade>
                        </h1>
                        <p>
                            <Fade up fraction={0.4}>

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos, asperiores mollitia in debitis id!
                            </Fade>
                        </p>
                    </HeroText>
                    <div style={{height:'90vw', backgroundColor: 'black', opacity: '50%'}}></div>
                </Parallax>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Fifth
