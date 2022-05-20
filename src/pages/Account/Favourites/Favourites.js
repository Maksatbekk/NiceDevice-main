import React from 'react';
import styles from "./favourites.module.css";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Image from "../../../Assets/image8.png";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addFavourites, delFavourites} from "../../../redux/reducers/favourites/favourites";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {open} from "../../../redux/reducers/modal/modal";
import {addCart, delCart} from "../../../redux/reducers/cart/cart";
import {AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import Cart from "../../../Assets/cart.png";

const Favourites = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favourites = useSelector(s => s.favourites.favourites);
    const cart = useSelector(s => s.cart.cart);

    return (
        <section className={styles.section}>

            {
                favourites.length ?
                    <>
                        <div className={styles.back}>
                            <div>
                                <Link to='/' style={{color: '#C8C8C8'}}>
                                    <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                                </Link>
                            </div>
                            <div>
                                <h2 className={styles.title}>Мои избранные</h2>
                            </div>
                        </div>

                        <div className={styles.row}>
                            {
                                favourites.map((item) => (
                                    <div key={item.id} className={styles.card}>
                                        <div className={styles.cardHover}>
                                            <LazyLoadImage alt='img' effect="blur" src={item.image}
                                                           className={styles.cardImg}/>
                                            <h3 className={styles.cardTitle}
                                                onClick={() => dispatch(open(item))}>{item.title.slice(0, 20)}...</h3>
                                            <div className={styles.cardPrice}>
                                                <div>

                                                    <h4 className={styles.cardPriceTitle}>Цена: </h4>
                                                    <p className={styles.cardPriceNum}>{item.price} сом</p>
                                                </div>

                                                {
                                                    cart.filter((el) => el.id === item.id).length ?
                                                        <button type='button' className={styles.cardBtnCheck}
                                                                onClick={() => dispatch(delCart(item.id))}>
                                                            <img className={styles.cardBtnImg} src={Cart} alt=""/>
                                                        </button>
                                                        : <button type='button' className={styles.cardBtn}
                                                                  onClick={() => dispatch(addCart(item))}>
                                                            <img className={styles.cardBtnImg} src={Cart} alt=""/>
                                                        </button>

                                                }

                                                {
                                                    favourites.filter((el) => el.id === item.id).length ?
                                                        <button type='button' className={styles.cardLike}
                                                                onClick={() => dispatch(delFavourites(item.id))}>
                                                            <AiFillHeart/>
                                                        </button>
                                                        : <button type='button' className={styles.cardBtnLike}
                                                                  onClick={() => dispatch(addFavourites(item))}>
                                                            <AiFillHeart/>
                                                        </button>

                                                }


                                            </div>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </>
                    :
                    <div className={styles.emptyRow}>
                        <div className={styles.emptySmiley}>
                            <img src={Image} alt="image"/>
                        </div>
                        <p className={styles.emptyTitle}>Избранных нет :(</p>
                        <p className={styles.emptySubtitle}>Вы ничего не добавляли в избранные</p>

                        <button type='button' onClick={() => navigate('/')} className={styles.emptyBtn}>← Вернуться
                            назад
                        </button>
                    </div>
            }


        </section>
    );
};

export default Favourites;