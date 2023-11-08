import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #dadeff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 25px;
    text-align: center;
    @media only screen and (max-width: 500px) {
        font-size: 50px;
    }
`
const Description = styled.div`
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    margin: 1.6rem 5%;
    text-align: center;
    @media only screen and (max-width: 500px) {
        font-size: 17px ;
    }
    ${mobile({
        fontSize: "1rem",
    })}

`
const InputContainer = styled.div`
    height: 7%;
    width: 50%;
    background-color: white;
    display: flex;
    ${mobile({
        width: "80%",
    })}


`
const Input = styled.input`
    padding-left: 2%;
    flex: 8;
    size: 100%;
    outline: none;
    border: none;

`
const Button = styled.button`
    border: none    ;
    flex: 1;
    background-color: #006bc8;
    color: white;
    cursor: pointer;
    &:hover {
        transform: scale(1);
        background-color: #4d9296;
    }
`


function NewsLetter() {
  return (
    <Container>
        <Title>Assine a nossa newsletter</Title>
        <Description>E receba até 20% de desconto no primeiro pedido</Description>
        <InputContainer>
            <Input placeholder='Digite seu email'/>
            <Button><Send/></Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter