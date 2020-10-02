import React from 'react'
import './Home.css'
import Product from "./Product";

function Test() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-YWM3YmNlNmYt-w3000._CB404720482_.jpg" alt="Hero Header. Kaufe Jetzt die neuen Echo Geräte!" />
            
            <div className="home_row">
                <Product />
                {/*Product*/}
            </div>

            <div className="home_row">
                {/*Product*/}
                {/*Product*/}
                {/*Product*/}
            </div>

            <div className="home_row">
                {/*Product*/}
            </div>

            </div>
        </div>
    )
}

export default Test
