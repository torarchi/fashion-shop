import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width:100vw;
height:100vh;
background-color:teal;
display:flex;
align-items:center;
justify-content:center;
`

const Wrapper = styled.div`
width:25%;
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
flex-direction: column;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 10px 0px 0px 0px;
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
border-radius: 5px;
`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor:pointer;
`

export const Log = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Password" />
                <Button>Login</Button>
                <Link>Forgot password</Link>
                <Link>Create new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
