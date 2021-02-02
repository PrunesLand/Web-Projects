import styled from 'styled-components'

export const HeroSection = styled.section`
    height:100vh;
    
    overflow:hidden;
    overflow:-moz-hidden-unscrollable;
    
`

export const HeroWrapper = styled.div``

export const HeroText = styled.div`
    position:absolute;
    color:white;
    z-index:2;
    font-size:10vw;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    p{
        padding:15vw 10vw;
        font-size:4vw;
        text-align:center;
    }
`