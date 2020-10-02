import React from "react"
import "./Product.css"
import StarRateIcon from "@material-ui/icons/StarRate";
import { yellow } from "@material-ui/core/colors";

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Echo 4. Generation</p>
                <p ClassName="product_price">
                    <strong>19.99</strong>
                    <small> <sup>€</sup></small>
                </p>
                <div className="product_rating">
                    <div className="product_StarRate">
                    <StarRateIcon style={{ color: yellow[500]}}/>
                    <StarRateIcon style={{ color: yellow[500]}}/>
                    <StarRateIcon style={{ color: yellow[500]}}/>
                    <StarRateIcon style={{ color: yellow[500]}}/>
                    <StarRateIcon style={{ color: yellow[500]}}/>
                    </div>
                </div>

            </div>
            <img src="https://m.media-amazon.com/images/I/71Gb8-pk2VL._AC_UY436_FMwebp_QL65_.jpg" alt="Echo 4.Generation jetzt Kaufen!"/>

            <div className="product_button--container"><button className="product_button">In den Einkaufswagen</button>
            </div>

        </div>
    )
}

export default Product
