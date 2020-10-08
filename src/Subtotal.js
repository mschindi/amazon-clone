import { ShoppingBasket } from '@material-ui/icons';
import React from 'react'
import "./Subtotal.css";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal (0 items):({basket.length} items):
                            <strong> {`${value}`}</strong>
                        </p>
                        <small className="subtoal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        </>
                )} 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"Text"}
                thousandSeperator={true}
                prefix={"€"}
            />
        </div>
    )
}

export default Subtotal
