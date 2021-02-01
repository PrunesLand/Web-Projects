import styled from 'styled-components'

export const IntroSection = styled.section`
    width:100%;
    height: 100vh;
    overflow:hidden;
    
`
export const InfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:100vh;
`
// title/text section //////

export const TextContainer = styled.div`
    width:40%;
    height:inherit;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    
    
`
export const TextWrapper = styled.div`
    display:flex;
    justify-content:center;
    padding:5vw 2vh;
    text-align:left;
    width:100%;
    height:100%;
    max-width:55vh;
    align-items:flex-start;
    font-size:4vw;

    @media screen and (min-width:720px){
        font-size: 4vh;
    }
`

export const TitleWrapper = styled.div`
    width:38vw;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
   
   
`

export const TitleTop = styled.div`
    text-align:left;
    width:100%;
    font-size:8vw;
   
`

export const TitleBot = styled.div`
    text-align:right;
    width:100%;
    font-size:8vw;
`

////////////////////////////

export const ImageContainer = styled.div`
    width:60%;
    height:inherit;
    
`

export const IntroImage = styled.img`
    width:70vw;
    height:100vh;
    object-fit:cover;
`

