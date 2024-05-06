import React from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import star from '../Images/ss.png'

export const Products = (props) => {
    return (
        <div className='Products'>
            <div className='card'>
                <img className='img-fluid' src={props.url} alt="" />
                <div className='card-body'>
                    <h6 className='name'>
                        <b>{props.name}</b>
                    </h6>
                    <h6 className='price green-clr'>{props.price}</h6>
                    <p className='description h-100 '>{props.description}</p>

                    <img className='img-fluid w-50 py-2' src={star} alt="" />

                </div>
                <div className='cart'>
                    <ShoppingCartTwoToneIcon /> Add to cart
                </div>
            </div>
        </div>
    )
}
