import React from 'react'
import "./BasketItem.css";
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

function BasketItem({id, title, image, price, rating}) {
    


    return (
        <div className="BasketItem">

             {/* LINKE SEITE */}
                <img className="BasketItem_img" src={image} />
            {/* Rechte Seite */}
            <div className="BasketItem--right">
                <p className="BasketItem_title" >{title}</p>
                 <div className="BasketItem_rating" >{Array(rating).fill().map((_,i)=>(
                            <StarTwoToneIcon className="star--filled"/>
                        ))}</div>
                <p className="BasketItem_price" > <strong>{price} <small> <sup>€</sup></small></strong></p>
            </div>
            
        </div>
    )
}

export default BasketItem
