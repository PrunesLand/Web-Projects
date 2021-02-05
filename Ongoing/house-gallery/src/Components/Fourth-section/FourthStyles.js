import styled from 'styled-components'
import foot from '../Images/Finalized images/statue1.JPG'
import {AiOutlineInfoCircle} from 'react-icons/ai'



export const Section = styled.section`
    height:70vw;
    max-height:80vh;
    overflow:hidden;
`

export const Container = styled.div`
    height:50vh;
    width:100%;
    
`

export const TextContainer = styled.div`
    width:100%;
    
`

export const Text = styled.p`
    font-size:4vw;
    padding:5vh 8vw;
    @media screen and (min-width:720px){
        font-size:4vh;
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
    background-position:top;
    width:100%;
    height: 25vw;
    max-height:60vh;
    background-size:cover;
    display:flex;
    
    align-items:center;
`

export const ImageText = styled.h1`
    font-size:8vw;
    color:white;
    padding:1vh;
    text-align:left;
`

export const InfoLogo = styled(AiOutlineInfoCircle)`
    font-size:20vw;
    color:white;
    padding:0 2vh;

    &:hover{
        color:#ffb4a2;
    }
`

