import React from 'react'
import { useFavorite } from '../store/useFavorite'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Card2 from '../components/Card2'
import {Container, Row, Col} from 'react-bootstrap';
import { useCart } from '../store/useCart'
import { useProducts } from '../store/useProduct'

const Favorite = () => {
	const {favoriteList, emptyFavoriteList} = useFavorite()
	const{addList} = useCart()
	const{deleteItemStatus, setItemCount} = useProducts()
	const navigate = useNavigate()
	console.log('favoriteList : ', favoriteList)
	function sendToCart(){
		favoriteList.forEach((item)=>{  //Product에도 반영
			setItemCount(item.id, 1)  
		})
		let newList = favoriteList.map((item)=> ({...item, count: 1}))

		addList([...newList]) //새로운 배열로

		//Favorite비우고, Favorite속성도 제거하기
		//그런데,favoriteList를 삭제하기 전에, 속성제거해야 된다.
		// favoriteList자체가 없으면 속성제거 못함.
		favoriteList.forEach((item)=>{
			deleteItemStatus(item.id)
		})
		emptyFavoriteList()
		navigate('/cart')
	}
  return (
	<div className='favorite-info'>
		<div className="favorite-card">
			<h1>Favorite : {favoriteList.length}</h1>
			<Container>
				<Row>
					{favoriteList.map((item,i)=><Col lg={3} key={i}><Card2 item={item} /></Col>)}
				</Row>
			</Container>
			<div className="favorite-info-button">
					<Button variant="primary" onClick={sendToCart}>장바구니로</Button>
			</div>
		</div>
	</div>



  )
}

export default Favorite