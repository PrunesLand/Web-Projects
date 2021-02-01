import React from 'react'
import Fourth from '../Fourth-section/Fourth'
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
        <Fourth />
        </>
    )
}

export default Home
