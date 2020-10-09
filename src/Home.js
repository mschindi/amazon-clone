import React from 'react'
import './Home.css'
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-YWM3YmNlNmYt-w3000._CB404720482_.jpg" alt="Hero Header. Kaufe Jetzt die neuen Echo Geräte!" />
            
            <div className="home_row">

            {/* Echo Dot Blaugrau mit Uhr */}
                <Product
                id="123456789"
                title="Echo Dot 4. Generation + Uhranzeige | Blaugrau"
                price={29.99}
                image="https://m.media-amazon.com/images/I/71Gb8-pk2VL._AC_UY436_FMwebp_QL65_.jpg"
                rating={5}
                typeStyling="Startseite"
                />

            {/* Echo Dot 4. Generation | Antrazit */}
                <Product
                id="987654321"
                title="Echo Dot 4. Generation | Antrazit"
                price={24.99}
                image="https://m.media-amazon.com/images/I/71UGFF-EzFL._AC_UY436_FMwebp_QL65_.jpg"
                rating={5}
                typeStyling="Startseite"
                />
            </div>

            <div className="home_row">

            {/* Echo Show 10 3.Generation */}
                 <Product
                id="987654321"
                title="Der neue Echo Show 10 (3. Generation)"
                price={243.69}
                image="https://images-na.ssl-images-amazon.com/images/I/51fxIcvi3cL._AC_SL1000_.jpg"
                typeStyling="Startseite"
                rating={4}
                />
            {/* Fire Tv Stick mit Alexa 2020*/}
                <Product
                id="987654321"
                title="Der neue Fire TV Stick 2020 mit Alexa-Sprachfernbedienung"
                price={38.98}
                image="https://images-na.ssl-images-amazon.com/images/I/51GF9vRAnFL._AC_SL1000_.jpg"
                rating={5}
                typeStyling="Startseite"
                />
            {/* Echo Studio */}
                <Product
                id="987654321"
                title="Echo Studio – Smarter High Fidelity Lautsprecher"
                price={24.99}
                image="https://images-na.ssl-images-amazon.com/images/I/91Z0cGhaeCL._AC_SL1500_.jpg"
                rating={5}
                typeStyling="Startseite"
                />
            </div>

            <div className="home_row">

            {/* Fire TV Cube */}
            <Product
                id="987654321"
                title="Fire TV Cube | 4k Ultra HD-Streaming"
                price={116.96}
                image="https://images-na.ssl-images-amazon.com/images/I/71TnVZ-xTYL._AC_SL1500_.jpg"
                rating={5}
                typeStyling="Startseite"
                />

            </div>

            </div>
        </div>
    )
}

export default Home
