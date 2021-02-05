import React from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import styled from 'styled-components'

const Container = styled.div`
    bottom:0.2vh;
    cursor: pointer;
    left:43vw;
    
    text-align:center;
    z-index:999;
    transition: bottom .3s ease-in-out;
#navbar{
}
    
`

const ArrowUp = styled(IoIosArrowUp)`
    font-size:3rem;
    color:black;
`




const Arrow = () => {
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.bottom = "0.5vh";
    //   } else {
    //     document.getElementById("navbar").style.bottom = "-20vh";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }

    

    return (
        <Container id='navbar'>
            <ArrowUp onClick={e => window.scrollTo(0,0) & setTimeout(function() { window.location.reload();}, 450)}/>
        </Container>
    )
}

export default Arrow
