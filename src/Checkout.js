import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal"

function Checkout() {
    return (
                <div className="checkout">
                    <div className="checkout_left">
                        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._VB423492668_.jpg" alt="Werbebanner!"
                        />
                        <div>
                            <h2 className="checkout_title">
                                Your Shopping Basket
                            </h2>
                            {/* BasketItem*/}
                            {/* BasketItem*/}
                            {/* BasketItem*/}
                            {/* BasketItem*/}
                            {/* BasketItem*/}

                        </div>

                    </div>

                    <div className="checkout_right">
                        <Subtotal>

                        </Subtotal>

                    <h2> The subtotal will go here</h2>
                    
                    </div>





                 </div>
             );

}

export default Checkout
