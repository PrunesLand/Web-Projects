import styled from 'styled-components'
import foot from '../Images/Finalized images/woodWork1.JPG'
import {AiOutlineInfoCircle} from 'react-icons/ai'

export const Section = styled.section`
    height:195vw;
    max-height:320vh;
    overflow:hidden;
    
    
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
    height:148vw;
`

export const MainContainer = styled.div`
    
    width:100%;
    height:50vw;
    padding:0vh 3vw;
    
`

export const MainText = styled.div`
    text-align:center;
    padding:2vh 0;
    
    
    h1{
        font-size:8vw;
    }

    p{
        margin:0 9vw;
        font-size:4vw;
        
    }
`

export const ImageContainer = styled.div`
    
    display:flex;
    justify-content:space-around;
    align-items:center;
   background-color:#792d21;
   width:100%;
`

export const ImageWrapper = styled.div`
    background-image:url(${foot});
    background-position:center;
    width:80%;
    height: 20vw;
    max-height:60vh;
    background-size:cover;
    display:flex;
    
    align-items:center;
`

export const ImageText = styled.h1`
    font-size:8vw;
    color:white;
    padding:1vh;
    text-align:right;
    width:100%;
`

export const InfoLogo = styled(AiOutlineInfoCircle)`
    font-size:20vw;
    color:white;
    padding:0 2vh;
    cursor:pointer; 

    &:hover{
        color:#ffb4a2;
    }
`