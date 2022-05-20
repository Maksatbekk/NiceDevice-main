import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {logOut} from "../../redux/reducers/user/user";
import styles from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../../redux/reducers/goods/goods";
import User from '../../Assets/user.png'
import Helm from '../../Assets/helm.png'
import Cart from '../../Assets/cart.png'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search !== '') {
            getAll(search)
        } else  {
            getAll()
        }
    }, [search]);
    const user = useSelector((s) => s.user.user );
    const cart = useSelector((s) => s.cart.cart );
    return (
        <header className={styles.header}>
            <div className={styles.headerNav}>
                <div className={styles.headerLogo} onClick={() => navigate('/')}>
                    <div className={styles.headerLogoImg}> <img className={styles.headerLogoImg}  src={Helm} alt=""/></div>
                    <h1>Nice <br/> <span style={{color: '#00bbd3'}}>Device</span></h1>
                </div>
                <div className={styles.headerTopRight} style={{columnGap: user.email === 'admin@mail.ru' ? '350px' : ''}}>

                        <ul className={styles.topList}>
                            <li className={styles.categoriesListItem}>
                                <NavLink className={styles.categoriesLink} to='/contact'>Контакты</NavLink>
                            </li>
                            <li className={styles.categoriesListItem} >
                                <NavLink className={styles.categoriesLink} to='/about'>О нас</NavLink>
                            </li>
                            {
                                user.email === 'admin@mail.ru' ? <li>
                                    <NavLink className={styles.categoriesLink} to='/admin'>Админ панель</NavLink>
                                </li> : ''
                            }

                        </ul>

                    <div className={styles.headerRegister}>
                         <span style={{cursor: 'pointer', position: 'relative'}} onClick={() => navigate('/cart')}>
                            <img src={Cart} className={styles.cartImg} alt=""/>
                             <p className={styles.cartCount}>{cart.length}</p>
                        </span>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                          {
                              user.email ?  <Link to='/account'><img className={styles.headerRegisterImg} src={Helm} alt=""/></Link> : ''
                          }

                          {
                              user.email
                                  ?  <Link className={styles.headerLink} to='/' onClick={() => dispatch(logOut())}>Выйти </Link>
                                  : <Link className={styles.headerLink} to='/login' >Войти в аккаунт </Link>
                          }
                      </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;