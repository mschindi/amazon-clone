import React from "react"
import "./Product.css"
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {
    const [ { basket, lastAddedItem } , dispatch] = useStateValue();

    console.log('this is the basket >>>', basket );
    console.log('last added item:', lastAddedItem);

    const addToBasket = () => {
        //dispatch the item into data Layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
            title: title,
        });
    };

    return (
        <div id={id} className="product">

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

            <div className="product_button--container">
                <button onClick={addToBasket}className="product_button">In den Einkaufswagen</button>
            </div>

        </div>
    )
}

export default Product
