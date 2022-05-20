import React from 'react';
import styles from "./buys.module.css";
import {useSelector} from "react-redux";

const Buys = () => {

    const user = useSelector(s => s.user.user);
    return (
        <section>

            <div className={styles.row}>
                {user.order.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <h3 className={styles.id}>Номер заказа: {item.id}</h3>
                        <p className={styles.date}>Дата заказа: {item.date}</p>
                        <ul className={styles.list}>
                            {item.products.map((el) => (
                                <li className={styles.listItem} key={el.title}>
                                    <img src={el.image} alt="" className={styles.listItemImg}/>
                                    <div className={styles.listItemInfo}>
                                        <p className={styles.listItemTitle}>{el.title}</p>
                                        <p className={styles.listItemPrice}>{el.price} сом.</p>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                        <p className={styles.price}>Сумма : {item.price} сом.</p>
                    </div>
                ))
                }
            </div>
        </section>
    );
};

export default Buys;