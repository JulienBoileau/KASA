import React from "react";
import './_Banner.css';

export default function Banner({ img, text }) { 
    return (
        <div>
        <section className="banner">
            <div className="banner-container">
                <div className="banner_home_img">
                    <img src={img} alt='banniere_kasa'/>
                </div>
                { text && <div className="banner-container-text">{ text }</div>}
            </div>
        </section>
        </div>
    )
};