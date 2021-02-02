import React from 'react'
import Fifth from '../Fifth-section/Fifth'
import Fourth from '../Fourth-section/Fourth'
import Intro from '../IntroSection/Intro'
import Parallax from '../parallax-section/Parallax'
import Sixth from '../Sixth-section/Sixth'
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
        <Fifth />
        <Sixth />
        </>
    )
}

export default Home
