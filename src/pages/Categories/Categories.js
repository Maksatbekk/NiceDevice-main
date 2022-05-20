import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import styles from './categories.module.css'
import {useDispatch, useSelector} from "react-redux";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "./Slider/Slider";

const Categories = () => {

    const {sectionTop, topLeft, categories, topList, topTitle, topRight, topRightTitle, sectionBottom, categoriesList, categoriesItem} = styles;

    const user = useSelector((s) => s.user.user );
    const navigate = useNavigate();
    return (
        <section>
            <div className={sectionTop}>
                <div className={topLeft}>
                    <div className={categories}>
                        <p className={topTitle}>Категории</p>
                    </div>
                </div>

            </div>

            <div className={sectionBottom}>
                <ul className={categoriesList}>
                    <li className={categoriesItem} onClick={() => navigate('/accessories')}>Аксессуары</li>
                    <li className={categoriesItem} onClick={() => navigate('/apple')}>Apple</li>
                    <li className={categoriesItem} onClick={() => navigate('/xiaomi')}>Xiaomi</li>
                    <li className={categoriesItem} onClick={() => navigate('/samsung')}>Samsung</li>
                </ul>

                <div className={styles.burger}>
                    <span className={styles.burgerLine}/>
                </div>

                <div className={styles.slider}>
                   <Slider/>
                </div>
            </div>
        </section>
    );
};

export default Categories;