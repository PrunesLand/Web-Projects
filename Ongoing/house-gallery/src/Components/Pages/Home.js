import React from 'react'
import Intro from '../IntroSection/Intro'
import Parallax from '../parallax-section/Parallax'
import Third from '../Third-section/Third'
import {GlobalStyle} from './GlobalStyles'

const Home = () => {
    return (
        <>
        <GlobalStyle />
        <Intro />
        <Parallax />
        <Third />
        </>
    )
}

export default Home
