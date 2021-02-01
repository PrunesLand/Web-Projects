import styled from 'styled-components'
import statue3 from '../Images/Finalized images/statue3.JPG'

export const HeroSection = styled.section`
    height:100vw;
    max-height:100vh;
    overflow:hidden;
`

export const HeroContainer = styled.div``

export const HeroWrapper = styled.div`
    
    height:100%;
    padding:2vh 0;
`


export const HeroImageWrapper = styled.div`
    background-image: url(${statue3});
    width:100%;
    height:50vw;
    max-height:60vh;
    background-size:cover;
    background-position:center;
    
`
export const HeroHeader = styled.div`
    position:absolute;
    width:100%;
    max-height:80vh;
    font-size:10vw;
    color:white;
   

`

export const HeroImage = styled.img`
    
    width:100%;
    max-height:80vh;
    object-fit:contain;
    
`

export const HeroText = styled.div`
    width:100%;
    padding:0 10vw;
    height:30vh;
`

export const TextContainer = styled.div`
    
`