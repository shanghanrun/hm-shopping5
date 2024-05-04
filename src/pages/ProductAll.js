import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import productStore from '../store/productStore';

const ProductAll = () => {
  const {productList, getProductList} = productStore()

  useEffect(()=>{
    getProductList()
  },[])
 
  // useEffect(()=>{
  //   getProducts()
  // },[query])

  return (
	<div>
    <Container>
      <Row>
        {productList?.map((product,i) =>(
          <Col lg={3} key={i}>
            <Card item={product}/>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default ProductAll