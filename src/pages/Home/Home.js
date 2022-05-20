import React, {useEffect, useState} from 'react';
import styles from './home.module.css'
import Categories from "../Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../redux/reducers/goods/goods";
import Card from "./Card/Card";


const Home = () => {

    const dispatch = useDispatch();
    const arr = useSelector((store) => store.goods.goods);
    const cart = useSelector((store) => store.cart.cart);

    const [search, setSearch] = useState('');

      useEffect(() => {
        if (search !== '') {
            dispatch(getAll(search))
        } else  {
            dispatch(getAll())
        }
    }, [search]);



    useEffect(() => {
        dispatch(getAll())
    }, []);
    return (
        <>
            <section className={styles.section}>
                <Categories/>
                <div >
                    <div className={styles.sectionTop}>
                        <h3 className={styles.title}>Наши товары</h3>
                        <input onChange={(e) => setSearch(e.target.value)} type="search" className={styles.search} placeholder='Поиск...'/>
                    </div>
                    <Card/>
                </div>
            </section>
        </>
    );
};

export default Home;