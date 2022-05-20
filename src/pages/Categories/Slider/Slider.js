import React, { Component } from "react";
import Slider from "react-slick";
import Reklama1 from '../../../Assets/reklama/reklama1.png'
import Reklama2 from '../../../Assets/reklama/reklama2.png'
import Reklama3 from '../../../Assets/reklama/reklama3.jpg'
import styles from './slider.module.css'
import Reklama4 from '../../../Assets/reklama/reklama4.jpg'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img className={styles.img} src={Reklama1} alt=""/>
                    </div>
                    <div>
                        <img className={styles.img} src={Reklama2} alt=""/>
                    </div>
                    <div>
                        <img className={styles.img} src={Reklama3} alt=""/>
                    </div>
                    <div>
                        <img className={styles.img} src={Reklama4} alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}