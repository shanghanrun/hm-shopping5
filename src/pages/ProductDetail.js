import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { Container,Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { useCart } from './../store/useCart';

const ProductDetail = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [item, setItem] = useState(null)
  const [sizes, setSizes] =useState([])
  const [selectedSize, setSelectedSize]=useState('')
  const [count, setCount] = useState(0)
  const [selectedCount, setSelectedCount]=useState(0)
  const {addItem} = useCart()

  const getItem =async()=>{
    // let url =`http://localhost:5000/products/${id}`
    let url = `https://my-json-server.typicode.com/shanghanrun/hm-shopping2/products/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log('item : ', data)
    setItem(data)
    setSizes(data.size)
  }
  useEffect(()=>{
    getItem()
  },[id])
  const handleSizeSelect=(size)=>{
    console.log('선택된 사이즈 : ',size )
    setSelectedSize(size)
  }
  const handleCountSelect=(count)=>{
    console.log('선택된 수량 : ',count )
    setCount(count); //이것 반영해야 된다.
    setSelectedCount(count)
  }
  
  return (
  <Container >
    <Row className="detail-item">
      <Col lg={4}>
        <img src={item?.img} width="100%" alt="상품"/>
      </Col>
      <Col className="detail-info" lg={4}>
        <div id="detail-item-title">{item?.title}</div>
        <div id="detail-item-price">₩ {item?.price}</div>
        <div id="detail-item-choice">{item?.choice ==true? "Conscious choice": ""}</div>
        <DropdownButton id="size-dropdown" title="사이즈 선택">
          {sizes.map(size =>
            <Dropdown.Item onClick={() => handleSizeSelect(size)} key={size}>{size}</Dropdown.Item>
          )}
        </DropdownButton> 
        <div id="detail-item-selectedSize">선택한 Size : {selectedSize}</div>
        <DropdownButton id="count-dropdown" title="수량 선택">
          {[...Array(11).keys()].map(count => (
            <Dropdown.Item onClick={() => handleCountSelect(count)} key={count}>{count}</Dropdown.Item>
          ))}
        </DropdownButton>
        <div id="detail-item-selectedCount">선택한 수량 : {selectedCount}</div>
        <div className="space"></div>
        <Button variant="warning" 
          onClick={()=>{  
            addItem({...item, "count":count})
            navigate('/')
          }}
          className="add">장바구니에 추가</Button>
      </Col>
    </Row>
  </Container>
  )
  
}

export default ProductDetail
