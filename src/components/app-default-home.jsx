import React, {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DefaultHomepage = () => {

return (
    <div id='default-homepage-main'>
        <div id='default-homepage-left'>
            <div id='homepage-left-container'>
                <h1 id='motivional-quote'>You don't have to be great to start, but you have to start to be great.</h1>
                <button className="button" id='default-homepage-routine-button'>View public fitness routines</button>
            </div>
        </div>
        <div id='default-homepage-right'>
            <img id = 'homepage-main-image'src='https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/shutterstock_strong-man-lifting-dumbbells.jpeg?quality=82&strip=1&w=1250' alt='elderly woman lifting weights' />
        </div>
    </div>
)

}
export default DefaultHomepage