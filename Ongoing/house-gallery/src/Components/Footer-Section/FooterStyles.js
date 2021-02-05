import styled from 'styled-components'
import {AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'

export const FooterSection = styled.footer`
    height:40vh;
    
    text-align:center;

    
`

export const FooterContainer = styled.div`
    

    h2{
        text-align:center;
        font-size:4vh;
        
    }
    h3{
        padding:2vh;
        font-size:2.5vh;
    }
    ul{
        padding:2vh;
        display: flex;
        flex-direction:row;
        justify-content:space-evenly;
        font-size:8vh;
    }
    

    
`
export const GithubLogo = styled(AiOutlineGithub)`
    &:hover{
        color:white;
        cursor: pointer;
    }
`

export const LinkedInLogo = styled(AiOutlineLinkedin)`
    &:hover{
        color:#023e8a;
        cursor: pointer;
    }
`
  


