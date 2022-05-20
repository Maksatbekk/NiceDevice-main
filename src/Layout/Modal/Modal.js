import React from 'react';
import styles from './modal.module.css'
import {useDispatch, useSelector} from "react-redux";
import {close} from "../../redux/reducers/modal/modal";
import {addCart} from "../../redux/reducers/cart/cart";
import Cart from '../../Assets/cart.png'

const Modal = () => {

    const obj = useSelector((store) => store.modal.product);
    const open = useSelector((store) => store.modal.open);

    const dispatch = useDispatch();

    const closeModal = (e) => {
        if (e.target.className === styles.overlay) {
            dispatch(close())
        }
    };

    return (
        <div className={styles.overlay} style={{display: open ? 'block' : 'none'}} onClick={closeModal}>
            <div className={styles.popup}>

                <div className={styles.left}>
                    <img src={obj.image} alt="" className={styles.img}/>
                </div>

                <div className={styles.right}>
                    <div>
                        <h2 className={styles.title}>{obj.title}</h2>
                        <p className={styles.subtitle}>Модель: {obj.model}</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.price}> Цена: {obj.price} сом</p>
                        <button type='button' className={styles.btn} onClick={() => {
                            dispatch(addCart(obj));
                            dispatch(close())
                        }}><img src={Cart} alt=""/>
                        </button>
                    </div>

                    <div className={styles.close} onClick={() => dispatch(close())}>X</div>
                </div>
                <div className={styles.bottom}>
                    <p>{obj.composition}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;