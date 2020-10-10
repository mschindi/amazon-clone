import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import Product from './Product';
import BasketItem from './BasketItem';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
                <div className="checkout">
                    <div className="checkout_left">
                        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._VB423492668_.jpg" alt="Werbebanner!"
                        />
                        <div>
                            <h2 className="checkout_title">
                                Your Shopping Basket
                            </h2>
                            {basket.map(item =>{
                                return <BasketItem  
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                                
                                />
                            })}
                            
                            {/* BasketItem*/}
                            {/* BasketItem*/}
                            {/* BasketItem*/}
                            {/* BasketItem*/}

                        </div>

                    </div>

                    <div className="checkout_right">
                        <Subtotal>

                        </Subtotal>

                    
                    </div>
                 </div>
             );

}

export default Checkout
