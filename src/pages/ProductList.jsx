import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
import { mobile } from '../responsive'

const Container = styled.div`

`

const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`

const Filter = styled.div`
margin:20px;
${mobile({margin:"0px 20px", display:"flex", flexDirection:"column"})}
` 

const FilterText = styled.span`
font-size:20px;
font-weight: 500;
margin-right: 20px;
${mobile({marginRight:"0px"})}
`

const Select = styled.select`
padding:10px;
margin-right: 10px;
${mobile({margin:"5px 0px"})}
`
const Option = styled.option``

export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Title>Clothes</Title>

        <FilterContainer>
            <Filter>
                <FilterText>Filter </FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>
                            Red
                        </Option>
                        <Option>
                            White
                        </Option>
                        <Option>
                            Black
                        </Option>
                        <Option>
                            Pink
                        </Option>
                    </Select>

                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>
                            X
                        </Option>
                        <Option>
                            XL
                        </Option>
                        <Option>
                            M
                        </Option>
                        <Option>
                            L
                        </Option>
                    </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}
