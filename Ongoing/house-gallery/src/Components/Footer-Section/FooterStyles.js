import styled from 'styled-components'

export const FooterSection = styled.footer`
    height:35vh;
    background-color:grey;
    text-align:center;
    
    h2{
        text-align:center;
        padding:2vh;
        
    }
`

export const FooterContainer = styled.div`
    display:flex;
    justify-content:space-around;
    
`

export const RightColumn = styled.div``

export const LeftColumn = styled.div`
    
    p{
        text-align:center;
        padding:2vh;
    }

    ul{
        display: flex;
        flex-direction:row;
        justify-content:space-around;
    }
`

export const ProfileImage = styled.img`
    height:20vh;
    border-radius:50%;
    
`