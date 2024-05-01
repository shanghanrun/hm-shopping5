
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useFavorite } from '../store/useFavorite'
import { useProducts} from '../store/useProduct';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card2 = ({item}) => {
	const {addItem, removeItem} = useFavorite()
	const {setItemStatus, deleteItemStatus} = useProducts();


  return (
	<div className='card2' >
		<div className='card-img' >
			<img width="100%"
				src={item.img} alt=""/>
			<FontAwesomeIcon className="trash"
				icon={faTrash} 
				onClick={(e)=>{
					e.stopPropagation();//이벤트 버블링 차단
					
						deleteItemStatus(item.id);  //productList의 item변화시키기
						removeItem(item.id); //favoriteList에서 item 제거
					
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

export default Card2