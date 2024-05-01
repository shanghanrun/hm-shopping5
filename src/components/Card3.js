
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useCart } from '../store/useCart'
import { useProducts} from '../store/useProduct';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Card3 = ({item}) => {
	const {addItem, removeItem} = useCart()


  return (
	<div className='card2' >
		<div className='card-img' >
			<img width="100%"
				src={item.img} alt=""/>
			<h4>선택수량: {item.count}개</h4>
			<FontAwesomeIcon className="trash"
				icon={faTrash} 
				onClick={(e)=>{
					e.stopPropagation();//이벤트 버블링 차단
						removeItem(item.id); //Cart에서  item 제거
					
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

export default Card3