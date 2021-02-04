import styled from 'styled-components'
import foot from '../Images/Finalized images/woodWork1.JPG'

export const Section = styled.section`
    height:120vw;
    max-height:120vw;
    padding-bottom:30vw;
`

export const Container = styled.div``

export const IntroContainer = styled.div`
    width:100%;
    text-align:center;
    padding:2vh 0;
`

export const IntroText = styled.h1`
    font-size:13vw;
`

export const MainHero = styled.div`
    height:120vw;
`

export const MainContainer = styled.div`
    
    width:100%;
    height:50vw;
    padding:0vh 3vw;
    
`

export const MainText = styled.div`
    text-align:center;
    height:55vw;
    max-height:100vh;
    h1{
        padding:2vh;
        font-size:8vw;
    }

    p{
        margin:0 9vw;
        font-size:3vw;
    }
`

export const FooterHero = styled.div`
    
    width:100%;
    background-color:#9a501e;
`

export const FooterContainer = styled.div`
    background-image:url(${foot});
    height: 30vw;
    max-height:60vh;
    width:80%;
    background-size:cover;
    background-position:center;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`