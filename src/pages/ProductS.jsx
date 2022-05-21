import React from 'react'
import styled from 'styled-components'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from '../responsive';

const Container = styled.div``
const Wrapper = styled.div`
padding: 40px;
display: flex;
${mobile({padding:"10px", flexDirection:"column"})}
`
const ImageContainer = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height: 70vh;
object-fit:cover;
${mobile({height:"40vh"})}
`
const InfoContainer = styled.div`
flex:1;
padding: 0px 40px;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight: 350;
`
const Desc = styled.p`
margin:20px 0px;
`
const Price = styled.span`
font-weight: 200;
font-size: 30px;
`

const FilterContainer = styled.div`
width:40%;
margin:25px 0px;
display:flex;
justify-content:space-between;
${mobile({width:'100%'})}

`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:40%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor:pointer;
`
const FilterSize = styled.select`
margin-left: 15px;
padding: 5px;
`
const FilterSizeOp = styled.option``

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:5px;
border:1px solid coral;
display:flex;
align-items:center;
justify-content:center;
margin: 0px 5px;
`
const Button = styled.button`
padding: 20px;
border:3px solid teal;
background-color: white;
cursor:pointer;
font-weight:500;

&:hover{
  background-color:whitesmoke;
}
`


export const ProductS = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <InfoContainer>
            <ImageContainer>
              <Image src="https://www.nicepng.com/png/detail/985-9855553_clipart-clothes-jumper-outfits-transparent-background-niche.png"/>
            </ImageContainer>
              <Title>Suit</Title>
              <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, culpa! Reprehenderit quo magnam ut accusamus! Vero quo voluptas, doloribus iure praesentium impedit assumenda eveniet quas consequuntur? In veritatis alias quisquam.</Desc>
              <Price>$ 34.99</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="red"/>
                  <FilterColor color="pink"/>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOp>X</FilterSizeOp>
                    <FilterSizeOp>S</FilterSizeOp>
                    <FilterSizeOp>M</FilterSizeOp>
                    <FilterSizeOp>L</FilterSizeOp>
                    <FilterSizeOp>XL</FilterSizeOp>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <RemoveIcon/>
                  <Amount>1</Amount>
                  <AddIcon/>
                </AmountContainer>
                <Button>Add to cart</Button>
              </AddContainer>
            </InfoContainer>
            

        </Wrapper>
        <Footer/>
    </Container>
  )
}
