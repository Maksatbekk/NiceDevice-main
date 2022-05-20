import React from 'react';
import styles from "./apple.module.css";
import Categories from "../Categories";
import {useDispatch, useSelector} from "react-redux";
import {open} from "../../../redux/reducers/modal/modal";
import {addCart, delCart} from "../../../redux/reducers/cart/cart";
import {AiOutlineShoppingCart, AiFillHeart} from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {addFavourites, delFavourites} from "../../../redux/reducers/favourites/favourites";

const Apple = () => {

    const dispatch = useDispatch();
    const arr = useSelector((store) => store.goods.goods);
    const cart = useSelector((store) => store.cart.cart);
    const favourites = useSelector((store) => store.favourites.favourites);
    return (
        <section>
            <Categories />
            <div>
                <h3 className={styles.title}>Apple</h3>
                <div className={styles.row}>
                    {
                        arr.map((item) => (
                            item.category === 'Apple' ?
                                <div key={item.id} className={styles.card}>
                                    <div className={styles.cardHover}>
                                        <LazyLoadImage alt='img' effect="blur" src={item.image} className={styles.cardImg}/>
                                        <h3 className={styles.cardTitle} onClick={() => dispatch(open(item))}>{item.title.slice(0,20)}...</h3>
                                        <div className={styles.cardPrice}>
                                            <div>

                                                <h4 className={styles.cardPriceTitle}>Цена: </h4>
                                                <p className={styles.cardPriceNum}>{item.price} сом</p>
                                            </div>

                                            {
                                                cart.filter((el) => el.id === item.id).length ?
                                                    <button type='button' className={styles.cardBtnCheck} onClick={() => dispatch(delCart(item.id))} >
                                                        <AiOutlineShoppingCart/>
                                                    </button>
                                                    : <button type='button' className={styles.cardBtn} onClick={() => dispatch(addCart(item))} >
                                                        <AiOutlineShoppingCart/>
                                                    </button>

                                            }
                                            {
                                                favourites.filter((el) => el.id === item.id).length ?
                                                    <button type='button' className={styles.cardLike} onClick={() => dispatch(delFavourites(item.id))} >
                                                        <AiFillHeart/>
                                                    </button>
                                                    : <button type='button' className={styles.cardBtn} onClick={() => dispatch(addFavourites(item))} >
                                                        <AiFillHeart/>
                                                    </button>

                                            }

                                        </div>
                                    </div>

                                </div>
                                : ''
                        ))
                    }
                </div>
            </div>
        </section>


    );
};

export default Apple;