import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import React from 'react'
import styled from 'styled-components'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
padding:20px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight:300;
text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:center;
${mobile({margin:"20px 0px"})}
`
const TopButton = styled.button`
padding:10px;
font-weight:500;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled"? "black": "transparent"};
color: ${props=>props.type === "filled" && "white"};
`
const TopTexts = styled.div`
${mobile({display:"none"})}
`
const TopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color}
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:25px;
`
const ProductAmount = styled.div`
font-size:26px;
margin:5px;
${mobile({margin:"25px 20px"})}
`
const ProductPrice = styled.div`
font-size:34px;
font-size:200;
${mobile({marginBottom:"25px"})}
`

const HR = styled.hr`
background-color: #eee;
border:none;
height:1px;
`


const Summary = styled.div`
flex:1;
`

export const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>Your bag</Title>
            <Top>

                <TopButton type="filled">Continue shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                </TopTexts>
            </Top>
            <Bottom>

                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnCCUi8ovmk0XALqlzp4WiqD8_tO3tRGp829TVl-i1HKe0jC9Mf46Dj0C-lVy-igbMfc&usqp=CAU"/>
                            <Details>
                                <ProductName><b>Product:</b> Name</ProductName>
                                <ProductId><b>ID:</b>1</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 29.99</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <HR/>

                    <Product>
                        <ProductDetail>
                            <Image src="https://www.pngkit.com/png/detail/710-7104524_clothes-aestheticclothes-brandymelville-freetoedit.png"/>
                            <Details>
                                <ProductName><b>Product:</b> Name</ProductName>
                                <ProductId><b>ID:</b>41</ProductId>
                                <ProductColor color="pink"/>
                                <ProductSize><b>Size:</b>XXL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 9.99</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
               
                <Summary></Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
