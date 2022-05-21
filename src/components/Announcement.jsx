import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin: 0;
padding: 0;
height: 35px;
background-color: whitesmoke;
color:black;
display:flex;
align-items: center;
justify-content: center;
font-size:14px;
font-weight:500;

`

export const Announcement = () => {
  return (
    <Container>
        Deal! Free jacket on Orders Over $10
    </Container>
  )
}
