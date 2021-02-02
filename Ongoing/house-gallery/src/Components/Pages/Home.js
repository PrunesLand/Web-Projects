import React from 'react'
import Fifth from '../Fifth-section/Fifth'
import Fourth from '../Fourth-section/Fourth'
import Intro from '../IntroSection/Intro'
import Parallax from '../parallax-section/Parallax'
import Sixth from '../Sixth-section/Sixth'
import Third from '../Third-section/Third'
import {GlobalStyle} from './GlobalStyles'
import {data1, data2, data3, data4} from '../Sixth-section/SixthData'
import Seventh from '../Seventh-section/Seventh'
import Tail from '../Tail-section/Tail'
import Footer from '../Footer-Section/Footer'

const Home = () => {
    return (
        <>
        <GlobalStyle />
        <Intro />
        <Parallax />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth {...data1}/>
        <Sixth {...data2}/>
        <Sixth {...data3}/>
        <Sixth {...data4}/>
        <Seventh />
        <Tail />
        <Footer />
        </>
    )
}

export default Home
