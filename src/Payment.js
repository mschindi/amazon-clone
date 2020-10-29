import { Link } from 'react-router-dom';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';


function Payment() {
    const [{ basket, user}, dispatch ] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items
                        </Link>
                    )
                </h1>

                {/* Payment section -delivery Adress */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 Rect Straße</p>
                        <p>59368 Werne</p>

                    </div>


                </div>

                {/* Payment section -Review Items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />))}
                    </div>
                </div>

                {/* Payment section -PAyment method */}
                <div className='payment_section'>
                <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/*  Stripe magic will go */}
                    </div>

                    
                </div>


            </div>
            
        </div>
    )
}

export default Payment
