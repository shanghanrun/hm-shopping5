import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useFavorite } from '../store/useFavorite'
import { useNavigate } from 'react-router-dom';
import { useProducts} from '../store/useProduct';

const Card = ({item}) => {
	const {addItem, removeItem} = useFavorite()
	const navigate = useNavigate()
	const showDetail=()=>{
		navigate(`product/${item.id}`)
	}
	const {setItemStatus, deleteItemStatus} = useProducts();


  return (
	<div className='card' onClick={showDetail} >
		<div className='card-img' >
			<img width="100%"
				src={item.img} alt=""/>
			<FontAwesomeIcon className={item.status==='favorite'? 'favorite2 active' : 'favorite2'}
				icon={faHeart} 
				onClick={(e)=>{
					e.stopPropagation();//이벤트 버블링 차단
					if(item.status ===''){
						setItemStatus(item.id);  //proudctList에 있는 item을 변화시켜야 된다.
						addItem(item); //favoriteList에 item추가
					} else {
						deleteItemStatus(item.id);  //productList의 item변화시키기
						removeItem(item.id); //favoriteList에서 item 제거
					}
				}}
			/>
		</div>
		<div className='card-text'>
			<div>{item.choice?"Conscious Choice":"."}</div> 
			<div>{item.title}</div>
			<div>₩{item.price}</div>
			<div>🟢</div>
			<div>{item.new?"신제품":"."}</div>
		</div>

	</div>
  )
}

export default Card