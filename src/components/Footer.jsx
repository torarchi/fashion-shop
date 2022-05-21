import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
${mobile({flexDirection:"column", backgroundColor:"whitesmoke"})}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialMediaContainer = styled.div`
display:flex;

`
const SocialIcon = styled.h1`
width:40px;
height:40px;
border-radius:50%;
color:whitesmoke;
background-color: ${props=> props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:15px;
`

const Center = styled.div`
flex:1;
padding:25px;
${mobile({display:"none"})} 
`
const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
cursor: pointer;
`

const ListItem = styled.li`
width: 40%;
margin-bottom: 10px;
`

const Right = styled.div`
flex:1;
padding:25px;
`

const ContactI = styled.div`
margin-bottom:15px;
display:flex;
align-items:center;
`

const Payment = styled.img`
width:35%;
`

export const Footer = () => {
  return (
    <Container>
        <Left style={{marginLeft:"50px"}}>
            <Logo>Arch.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab autem beatae voluptatem animi dolor in saepe voluptatum, harum nobis cupiditate, quia doloribus porro sequi, nostrum libero ea culpa sed.
            </Desc>
            <SocialMediaContainer>
                <SocialIcon color="blue"> <FacebookIcon/> </SocialIcon>
                <SocialIcon color="red"> <InstagramIcon/> </SocialIcon>
                <SocialIcon color="pink"> <TwitterIcon/> </SocialIcon>
            </SocialMediaContainer>
        </Left>

        <Center style={{marginLeft:"50px"}}>
          <Title>Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right style={{marginLeft:"50px"}}>
          <Title>Contact</Title>
          <ContactI> <ZoomInMapIcon style={{marginRight:"15px"}}/> Kazakhstan, Almaty  </ContactI>
          <ContactI> <PhoneIcon style={{marginRight:"15px"}}/> +7 747 777 77 77 </ContactI>
          <ContactI> <AlternateEmailIcon style={{marginRight:"15px"}}/> arch@arch.fashion </ContactI>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}
