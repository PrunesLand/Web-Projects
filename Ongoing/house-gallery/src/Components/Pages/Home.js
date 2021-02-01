import React from 'react'
import Intro from '../IntroSection/Intro'
import Parallax from '../parallax-section/Parallax'
import {GlobalStyle} from './GlobalStyles'

const Home = () => {
    return (
        <>
        <GlobalStyle />
        <Intro />
        <Parallax />
        </>
    )
}

export default Home
