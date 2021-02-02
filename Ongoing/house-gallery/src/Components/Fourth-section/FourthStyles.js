import styled from 'styled-components'
import foot from '../Images/Finalized images/statue1.JPG'

export const Section = styled.section`
    height:80vw;
    max-height:100vh;
    display:flex;
    justify-content:right;
    overflow:hidden;
`

export const Container = styled.div`
    height:50vh;
    width:90%;
    
`

export const TextContainer = styled.div`
    width:100%;
    padding:5vh;
`

export const Text = styled.p`
    font-size:4vw;
`

export const ImageContainer = styled.div`
    
    background-image:url(${foot});
    height: 35vw;
    max-height:60vh;
    background-size:cover;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`

export const ImageWrapper = styled.div``

export const ImageText = styled.h1`
    font-size:10vw;
    color:white;
    padding:3vh;
`