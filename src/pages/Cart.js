import React, { useState } from 'react'
import { useCart } from '../store/useCart'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Card3 from '../components/Card3'
import {Container, Row, Col} from 'react-bootstrap';


const Cart = () => {
  const {itemList} = useCart()
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)
  console.log('itemList :', itemList)

	const calculateTotalPrice = () => {
		let total =0;
		itemList.forEach(item => {
		total += item.price * item.count;
		});
		setTotalPrice(total);
	};

  const payment=()=>{
	calculateTotalPrice(); // 총 금액 계산
    setIsDialogOpen(true); // 다이얼로그 열기
  }
  // 다이얼로그 닫기
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate('/');
  };

  return (
    <div className='cart-info'>
		{isDialogOpen && <dialog open>
			<p>지불할 총 금액: {totalPrice}원 입니다.</p>
			<form method="dialog">
				<Button variant="danger" onClick={handleCloseDialog}>확인</Button>
			</form>
		</dialog>}
		<div className="cart-card">
			<h1>Cart Items : {itemList.length}</h1>
			<Container>
				<Row>
					{itemList.map((item,i)=><Col lg={3} key={i}><Card3 item={item} /></Col>)}
				</Row>
			</Container>
			
			<div className="cart-info-button" > 
					<Button variant="primary" 
					// onMouseEnter={calculateTotalPrice}
					// onMouseLeave={clearTotalPrice}
					
					onClick={payment}>계산하기</Button>
			</div>
		</div>
	</div>
  )
}

export default Cart