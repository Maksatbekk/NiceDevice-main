import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './account.module.css'
import {useForm} from "react-hook-form";
import login from "../Login/Login";
import {changeAccount} from "../../redux/reducers/user/user";
import {NavLink, useNavigate} from "react-router-dom";
import User from '../../Assets/User2.png'

const Account = () => {
    const user = useSelector(store => store.user.user);
    const [change, setChange] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit
    } = useForm();
    const changeUser = (data) => {
        dispatch(changeAccount(data, user));
        setChange(false)
    };


    return (
        <section>
            <div className="container">
            {/*    <div className={styles.header}>*/}
            {/*        <h3>Мой аккаунт</h3>*/}
            {/*        <div className={styles.headerBlock}>*/}
            {/*            <button type='button' onClick={() => setTabs('history')} className={styles.btn}>История*/}
            {/*                заказов*/}
            {/*            </button>*/}
            {/*            <button type='button' onClick={() => setTabs('settings')} className={styles.btn}>Настройки</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    {tabs === 'settings' ? <div>*/}
            {/*        <form className={styles.block} onSubmit={handleSubmit(changeUser)}>*/}
            {/*            <div className={styles.blockHeader}>*/}
            {/*                <h4>Личные данные</h4>*/}
            {/*                <p onClick={() => setChange(!change)}>{change ? 'Отменить' : 'Изменить'}</p>*/}

            {/*            </div>*/}

            {/*            <div className={styles.blockContent}>*/}
            {/*                <div>*/}
            {/*                    {user.image ? <img src={user.image} alt=""/> :*/}
            {/*                        <div className={styles.circle}>{user.login.slice(0, 1)}</div>}*/}
            {/*                </div>*/}
            {/*                <label className={styles.blockCol}>*/}
            {/*                    Имя*/}
            {/*                    {change ? <input {...register('login')} type="text" defaultValue={user.login}/> :*/}
            {/*                        <p>{user.login}</p>}*/}
            {/*                </label>*/}
            {/*                <label className={styles.blockCol}>*/}
            {/*                    Номер телефона*/}
            {/*                    {change ? <input {...register('phone')} type='tel' defaultValue={user.phone}/> :*/}
            {/*                        <p>{user.phone}</p>}*/}
            {/*                </label>*/}
            {/*                <label className={styles.blockCol}>*/}
            {/*                    Почта*/}
            {/*                    {change ? <input {...register('email')} type='email' defaultValue={user.email}/> :*/}
            {/*                        <p>{user.email}</p>}*/}
            {/*                </label>*/}

            {/*                <label className={styles.blockCol}>*/}
            {/*                    Дата рождения*/}
            {/*                    {change ? <input {...register('date')} type='date' defaultValue={user.birthday}/> :*/}
            {/*                        <p>{user.birthday}</p>}*/}
            {/*                </label>*/}

            {/*            </div>*/}
            {/*            {change ? <button type='submit'>Сохранить</button> : ''}*/}
            {/*        </form>*/}


            {/*    </div> : <div>*/}
                    {/*<ul className={styles.list}>*/}
                    {/*    {user.order.map(item => (*/}
                    {/*        <li className={styles.listItem} key={item.id}>*/}
                    {/*            <div className={styles.top}>*/}
                    {/*                <div className={styles.itemBlock}>*/}
                    {/*                    <p>Заказ</p>*/}
                    {/*                    <p>#{item.id.slice(0, 5)}...</p>*/}
                    {/*                </div>*/}
                    {/*                <div className={styles.itemBlock}>*/}
                    {/*                    <p>Сумма заказа</p>*/}
                    {/*                    <p>{item.money} ₽</p>*/}
                    {/*                </div>*/}
                    {/*                <div className={styles.itemBlock}>*/}
                    {/*                    <p>Оплачено</p>*/}
                    {/*                    <p>{item.pay}</p>*/}
                    {/*                </div>*/}
                    {/*                {more ? <span onClick={() => setMore(false)}><svg width="16" height="10"*/}
                    {/*                                                                  viewBox="0 0 16 10" fill="none"*/}
                    {/*                                                                  xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z"*/}
                    {/*                        fill="#FF7010"/>*/}
                    {/*                </svg></span> : <span onClick={() => setMore(true)}><svg width="16" height="10"*/}
                    {/*                                                                         viewBox="0 0 16 10"*/}
                    {/*                                                                         fill="none"*/}
                    {/*                                                                         xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                    <path*/}
                    {/*                        d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.52702 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z"*/}
                    {/*                        fill="#FF7010"/>*/}
                    {/*                </svg></span>}*/}
                    {/*                {more ?*/}
                    {/*                    <ul>*/}
                    {/*                        {item.products.map(elem => (*/}
                    {/*                            <li>*/}
                    {/*                                <img src={elem.image} alt=""/>*/}
                    {/*                                <p>{elem.title}</p>*/}
                    {/*                                <p>{elem.count} {elem.count === 1 ? 'товар' : elem.count > 1 < 5 ? 'товара' : 'товаров'}</p>*/}
                    {/*                                <p>{elem.price} ₽</p>*/}

                    {/*                            </li>*/}
                    {/*                        ))*/}
                    {/*                        }*/}

                    {/*                    </ul> : ''*/}
                    {/*                }*/}


                    {/*                <span></span>*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.bottom}>*/}
                    {/*                <p>{item.street}</p>*/}
                    {/*                <div>*/}
                    {/*                    {item.products.map(el => (*/}
                    {/*                        <img className={styles.itemImg} src={el.image} alt=""/>*/}
                    {/*                    ))}*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*        </li>*/}
                    {/*    ))}*/}

                    {/*</ul>*/}

                {/*    <div className={styles.row}>*/}
                {/*        {user.order.map((item) => (*/}
                {/*            <div className={styles.card} key={item.id}>*/}
                {/*                <h3 className={styles.id}>Номер заказа: {item.id}</h3>*/}
                {/*                <p className={styles.date}>Дата заказа: {item.date}</p>*/}
                {/*                <ul className={styles.list}>*/}
                {/*                    {item.products.map((el) => (*/}
                {/*                        <li className={styles.listItem} key={el.title}>*/}
                {/*                            <img src={el.image} alt="" className={styles.listItemImg}/>*/}
                {/*                            <div className={styles.listItemInfo}>*/}
                {/*                                <p className={styles.listItemTitle}>{el.title}</p>*/}
                {/*                                <p className={styles.listItemPrice}>{el.price} сом.</p>*/}
                {/*                            </div>*/}
                {/*                        </li>*/}
                {/*                    ))*/}
                {/*                    }*/}
                {/*                </ul>*/}
                {/*                <p className={styles.price}>Сумма : {item.price} сом.</p>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>}*/}

                <h2 className={styles.title}>Личный кабинет</h2>

            <div className={styles.row}>
                <ul className={styles.list}>
                    <li className={styles.listItem} onClick={() => navigate('/')}>Главная</li>
                    <li className={styles.listItem} onClick={() => navigate('/favourites')}>Мои избранные</li>
                    <li className={styles.listItem} onClick={() => navigate('/buys')}>Мои покупки</li>
                </ul>

                <div className={styles.image}>
                    {user.image ? <img src={user.image} alt=""/> :
                        <div className={styles.circle}><img style={{width: '70%'}} src={User} alt=""/></div>}
                </div>

                <div>
                            <form className={styles.block} onSubmit={handleSubmit(changeUser)}>
                                <div className={styles.blockHeader}>
                                    <h4 className={styles.blockTitle}>Личные данные</h4>
                                    <p onClick={() => setChange(!change)} className={styles.changeBtn}>{change ? 'Отменить' : 'Изменить'}</p>

                                </div>

                                <div className={styles.blockContent}>

                                    <label className={styles.blockCol}>
                                        Имя
                                        {change ? <input className={styles.blockInput} {...register('login')} type="text" defaultValue={user.login}/> :
                                            <p className={styles.blockDescr}>{user.login}</p>}
                                    </label>
                                    <label className={styles.blockCol}>
                                        Номер телефона
                                        {change ? <input className={styles.blockInput} {...register('phone')} type='tel' defaultValue={user.phone}/> :
                                            <p className={styles.blockDescr}>{user.phone}</p>}
                                    </label>
                                    <label className={styles.blockCol}>
                                        Почта
                                        {change ? <input className={styles.blockInput} {...register('email')} type='email' defaultValue={user.email}/> :
                                            <p className={styles.blockDescr}>{user.email}</p>}
                                    </label>

                                    <label className={styles.blockCol}>
                                        Дата рождения
                                        {change ? <input className={styles.blockInput} {...register('date')} type='date' defaultValue={user.birthday}/> :
                                            <p className={styles.blockDescr}>{user.birthday}</p>}
                                    </label>

                                </div>
                                {change ? <button type='submit' className={styles.blockBtn}>Сохранить</button> : ''}
                            </form>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Account;