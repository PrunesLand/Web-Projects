import styled from 'styled-components'
import statue3 from '../Images/Finalized images/statue3.JPG'

export const HeroSection = styled.section`
    height:95vw;
    max-height:80vh;
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
    align-items:center;
    background-size:cover;
    background-position:top;
    display:flex;
    justify-content:center;
    align-items:center;
    
`


export const HeroHeader = styled.div`
    position:absolute;
    width:100%;
    max-height:80vh;
    font-size:13vw;
    color:white;
    padding:15px;
    

`



export const HeroText = styled.div`
    width:100%;
    padding:0 10vw;
    height:30vh;
    text-align:center;
`

export const TextContainer = styled.div`
    font-size:4.5vw;
    padding:3vh;

    @media screen and (min-width:720px){
        font-size:1.7rem;
    }
`