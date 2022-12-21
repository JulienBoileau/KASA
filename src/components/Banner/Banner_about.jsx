import React from "react";
import './_Banner.css';
import Banner_pic_about from '../../assets/BANNER_ABOUT.png';

export default function BannerAbout() {
    return (
        <section className="banner">
            <div className="banner-container">
                <div className="banner_about_img">
                    <img src={Banner_pic_about} alt='banniere_kasa'/>
                </div>
            </div>
        </section>
    )
};