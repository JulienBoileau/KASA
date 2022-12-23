import React from "react";
import './_Banner.css';

export default function BannerHome(props) {
    return (
        <section className="banner">
            {/*<p>{props.origin}</p>*/}
            <div className="banner-container">
                <div className="banner_home_img">
                    <img src="/assets/BANNER_HOME.png" alt='banniere_kasa'/>
                </div>
                <div className="banner-container-text">
                    Chez vous, partout et ailleurs
                </div>
            </div>
        </section>
    )
};