import React from 'react';
import styles from './cart.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {addCart, closeCart, delCart, removeCard} from "../../redux/reducers/cart/cart";
import {useDispatch, useSelector} from "react-redux";
import Image from "../../Assets/image8.png"
import {AiOutlineArrowLeft} from "react-icons/ai";

const Cart = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const cart = useSelector((store) => store.cart.cart);
    const user = useSelector((store) => store.user.user);

    return (
        <section className={styles.section}>
            <div className={styles.row}>
                <div className={styles.cart}>

                    {
                        cart.length ?
                            <>
                                <div className={styles.back}>
                                    <div>
                                        <Link to='/' style={{color: '#C8C8C8'}}>
                                            <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                                        </Link>
                                    </div>
                                    <div>
                                        <h2 className={styles.cartTitle}>Корзина</h2>
                                    </div>
                                </div>
                                <div className={styles.cartContent}>
                                    <div className={styles.cartBlock}>
                                        <div>
                                            <p className={styles.cartBlockImg}>Изображение</p>
                                        </div>

                                        <div>
                                            <p className={styles.cartBlockTitle}>Название</p>
                                        </div>

                                        <div>
                                            <p className={styles.cartBlockCount}>Количество</p>
                                        </div>

                                        <div>
                                            <p className={styles.cartBlockPrice}>Цена</p>
                                        </div>
                                    </div>
                                    <ul className={styles.list}>
                                        { cart && cart.map((el) => (
                                            <li key={el.id} className={styles.item}>
                                                <img className={styles.itemImg} src={el.image} alt={el.title}/>
                                                <div className={styles.itemTitleBlock}>
                                                    <h4 className={styles.itemTitle}>{el.title}</h4>
                                                    <p>Модель: {el.model}</p>
                                                </div>
                                                <div>
                                                    <p> <span className={styles.itemAddDell} onClick={() => dispatch(removeCard(el.id, el.title))}>-</span> {el.count} <span className={styles.itemAddDell} onClick={() => dispatch(addCart(el))}>+</span></p>
                                                </div>
                                                <div className={styles.itemCenter}>
                                                    <p className={styles.itemPrice}>{el.price * el.count} сом</p>
                                                </div>
                                                <button type='button' className={styles.itemBtn} onClick={() => dispatch(delCart(el.id, el.title))}>x</button>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                                <div className={styles.cartFooter}>
                                    <div className={styles.cartFooterItem}>
                                        <p className={styles.cartFooterTitle}>Итого</p>

                                        <p className={styles.itemPrice}>{cart.reduce((acc, rec) => acc + (rec.price * rec.count), 0)} сом</p>
                                    </div>
                                    <div className={styles.cartFooterItem}>
                                        <p className={styles.cartFooterTitle}>Налог 5%</p>

                                        <p className={styles.itemPrice}>{Math.ceil(cart.reduce((acc, rec) => acc + (rec.price * rec.count), 0) / 100 * 5)} сом</p>
                                    </div>
                                    <button type='button' className={styles.cartFooterBtn}
                                    onClick={() => {
                                        if (user.email.length) {
                                            dispatch(closeCart());
                                            navigate('/order')
                                        } else {
                                            alert('Войдите в акканут');
                                            dispatch(closeCart());
                                            navigate('/register');

                                        }
                                    }}
                                    >Оформить заказ</button>
                                </div>
                            </>
                            :
                            <div className={styles.empty}>
                                <h3 className={styles.cartTitle}>Корзина</h3>

                                <div className={styles.emptyRow}>
                                    <div className={styles.emptySmiley}>
                                        <img src={Image} alt="image"/>
                                    </div>
                                    <p className={styles.emptyTitle}>Корзина пустая</p>
                                    <p className={styles.emptySubtitle}>Добавьте хотя бы один продукт <br/> чтобы сделать заказ.</p>

                                    <button className={styles.emptyBtn} type='button' onClick={() => navigate('/')}>← Вернуться назад</button>

                                </div>

                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;