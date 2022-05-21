import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive"
import { Reg } from '../pages/Reg';


const Container = styled.div `
height: 50px;
${mobile({height:"50px"})}
`;
const Wrapper = styled.div `
padding: 10px 20px;
display:flex;
align-items: center;
justify-content: space-between;
${mobile({padding:"10px 0px"})}
`;

const Left = styled.div `
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span `
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: 0.45px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 35px;
`;

const Input = styled.input`
border: none;
${mobile({width:"45px"})}
`

const Center = styled.div `
flex: 1;
`;

const Logo = styled.div `
font-weight: bold;
text-align: center;
${mobile({fontSize: "24px", marginLeft:"20px"})}
`

const Right = styled.div `
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent:"center"})}
`;

const Menu = styled.div`
font-size: 13px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize:"11px", marginLeft:"8px"})}
`


export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        
        <Left>
          <Language>
            EN
          </Language>

        <SearchContainer>
            <Input placeholder='Search'/>
          <Search style={{color:"gray", fontSize:16}}/>
        </SearchContainer>

        </Left>

        <Center>
          <Logo>ARCH.</Logo>
        </Center>

        <Right>
          
          <Menu href="../Reg">Register</Menu>
          <Menu>Sign in</Menu>
          <Menu>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Menu>

        </Right>

      </Wrapper>

    </Container>
  )
}
