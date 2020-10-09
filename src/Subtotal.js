import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket }] = useStateValue();
    console.log("BASKET", basket);

    function getTotalOfBasket() {
        let total = 0;
        basket.forEach(item => {
            total += item.price;
        });
        return total;
    };

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        </>
                )} 
                decimalScale={2}
                value={getTotalOfBasket()}
                displayType={"text"}
                thousandSeperator={true}
                // prefix={"€"}
                suffix={" €"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
