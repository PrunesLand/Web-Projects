import styled from 'styled-components'
import side from '../Images/Finalized images/statue2.JPG'

export const Section = styled.section`
    height:90vw;
    max-height:80vh;
    overflow:hidden;
    
`

export const Container = styled.article`
    display:flex;
    justify-content:space-around;
`

export const ImageWrapper = styled.div`
    width:100%;
    background-image: url(${side});
    height:100%;
    background-size:cover;
    background-repeat:no-repeat;
`
export const ImageContainer = styled.div`
    height:90vw;
    max-height:80vh;
    max-width:60vh;
    width:50vw;
    padding:1.5vh;
    
    
   
`


export const ImageText = styled.p``

export const TextContainer = styled.div`
    width:60vw;
    max-width:50vw;
    height:60vh;
    display:flex;
    flex-direction:column;;
    
    align-items:flex-start;
    padding:1.5vh;
    

    @media screen and (min-width:720px){

        align-items:center;
    }


`

export const Content = styled.p`
    font-size:4vw;
    padding:2vh 0;

    @media screen and (min-width:720px){
        font-size:5vh;
    }
`

export const Header = styled.h1`
    
    font-size:10vw;

    @media screen and (min-width:720px){
        font-size:5rem;
    }
`

export const ImageParallax = styled.div``



