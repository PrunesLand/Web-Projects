import styled from 'styled-components'

export const Section = styled.section`
    padding:2vh 0;
    height:90vw;
    max-height:80vh;
    overflow:hidden;
`

export const Container = styled.article`
    display:flex;
    justify-content:center;
`

export const ImageWrapper = styled.div`
    
    width:45vw;
    
    @media screen and (min-width:720px){
        width:70vh
    }
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`
export const ImageContainer = styled.div`
    display:flex;
    height:70vw;
    max-height:90vh;
    max-width:80vh;
    width:75vw;
    padding:1vh;
    order:${({ reverse }) => (reverse ? '1':'2')};
    
   
`



export const TextContainer = styled.div`
    width:60vw;
    max-width:50vw;
    height:60vh;
    display:flex;
    flex-direction:column;;
    order: ${({ reverse }) => (reverse ? '2':'1')};
    align-items:flex-start;
    padding:1.5vh;
    

    @media screen and (min-width:720px){

        align-items:center;
    }


`

export const Content = styled.p`
    font-size:3.5vw;
    padding:2vh 0;

    @media screen and (min-width:720px){
        font-size:2rem;
    }
`

export const Header = styled.h1`
    
    font-size:10vw;

    @media screen and (min-width:720px){
        font-size:5rem;
    }
`