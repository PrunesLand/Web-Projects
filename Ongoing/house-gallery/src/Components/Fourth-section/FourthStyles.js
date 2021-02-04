import styled from 'styled-components'
import foot from '../Images/Finalized images/statue1.JPG'

export const Section = styled.section`
    height:80vw;
    max-height:110vh;
    overflow:hidden;
`

export const Container = styled.div`
    height:50vh;
    width:100%;
    
`

export const TextContainer = styled.div`
    width:100%;
    padding:5vh;
`

export const Text = styled.p`
    font-size:4vw;
`

export const ImageContainer = styled.div`
    display:flex;
    justify-content:right;
   background-color:#792d21;
   width:100%;
`

export const ImageWrapper = styled.div`
    background-image:url(${foot});
    width:80%;
    height: 35vw;
    max-height:60vh;
    background-size:cover;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`

export const ImageText = styled.h1`
    font-size:10vw;
    color:white;
    padding:3vh;
`