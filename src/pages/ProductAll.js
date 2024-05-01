import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useProducts } from '../store/useProduct';

const ProductAll = () => {
  const {productList} = useProducts()
  // const [products, setProducts] = useState([])
  // const [query, setQuery] = useSearchParams()
  
  // const getProducts=async()=>{
  //   let keyword = query.get('q')
  //   console.log('keyword : ', keyword)
  //   let url;
  //   if(keyword){
  //     // let url = `http://localhost:5000/products?q=${keyword}`
  //     url = `https://my-json-server.typicode.com/shanghanrun/hm-shopping2/products?q=${keyword}`
  //   } else{
  //     url ='https://my-json-server.typicode.com/shanghanrun/hm-shopping2/products'
  //   }
  //   let response = await fetch(url);
  //   let data = await response.json()
  //   console.log('products : ', data)
  //   setProducts(data)
  // }
  // useEffect(()=>{
  //   getProducts()
  // },[query])

  return (
	<div>
    <Container>
      <Row>
        {productList.map((product,i) =>(
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