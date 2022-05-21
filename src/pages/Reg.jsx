import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width:100vw;
height:100vh;
background-color:pink;
display:flex;
align-items:center;
justify-content:center;
`

const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:whitesmoke;
${mobile({width:"75%"})}

`
const Title = styled.h1`
font-size:26px;
font-weight:200;
`
const Form = styled.div`
display:flex;
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
margin:10px 0px;
background-color: white;
color:teal;
cursor:pointer;
`

export const Reg = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Register</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm password" />
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
