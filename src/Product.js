import React from "react"
import "./Product.css"
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

function Product({title, image, price, rating}) {
    return (
        <div className="product">

            <img src={image} alt={title}/>
            
            <div className="product_info">
                <p>{title}</p>

                <p className="product_price">
                    <strong>{price}</strong>
                    <small> <sup>€</sup></small>
                </p> 

                <div className="product_rating">
                    <div className="product_StarRate">
                        {Array(rating).fill().map((_,i)=>(
                            <StarTwoToneIcon className="star--filled"/>
                        ))}
                    </div>

                </div>
            </div>

            <div className="product_button--container"><button className="product_button">In den Einkaufswagen</button>
            </div>

        </div>
    )
}

export default Product
