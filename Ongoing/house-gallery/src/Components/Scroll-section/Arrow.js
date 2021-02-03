import React from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import styled from 'styled-components'

const Container = styled.div`
    top:93%;
    cursor: pointer;
    position:fixed;
    
    z-index:999;
`
const ArrowUp = styled(IoIosArrowUp)`
    font-size:3rem;
    color:grey;
`



const Arrow = () => {
    return (
        <Container>
            <ArrowUp onClick={e => window.scrollTo(0,0)}/>
        </Container>
    )
}

export default Arrow
