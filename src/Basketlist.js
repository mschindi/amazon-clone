import React from 'react';
import Product from './Product';
import { useStateValue } from "./StateProvider";

function Basketlist() {
    const [{ basket }] = useStateValue();
    
    function renderBasketElements() {
        var x = "";
        basket.forEach(item => {
            x += `<div><p>${item.title}</p></div>`;
        });
        return x;
    }

    return (
        <div>
            {renderBasketElements()}
        </div>
    )
}

export default Basketlist
