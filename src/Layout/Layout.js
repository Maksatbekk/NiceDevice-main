import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Account from "../pages/Account/Account";
import NotFound from "../pages/NotFound/NotFound";
import {useDispatch} from "react-redux";
import {getLocalStorage} from "../redux/reducers/user/user";
import Accessories from "../pages/Categories/Accessories/Accessories";
import Apple from "../pages/Categories/Apple/Apple"
import Samsung from "../pages/Categories/Samsung/Samsung"
import Xiaomi from "../pages/Categories/Xiaomi/Xiaomi"
import Cart from "./Cart/Cart";
import {getCartLocalStorage} from "../redux/reducers/cart/cart";
import {useSelector} from "react-redux";
import Modal from "./Modal/Modal";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import Buys from "../pages/Account/Buys/Buys";
import Favourites from "../pages/Account/Favourites/Favourites";
import favourites, {getFavouritesLocalStorage} from "../redux/reducers/favourites/favourites";

const Layout = () => {

    const location = useLocation();

    const dispatch = useDispatch();
    const cart = useSelector((store) => store.cart.cart);
    const user = useSelector((store) => store.user.user);
    const favourites = useSelector((store) => store.favourites.favourites);

    useEffect(() => {
        if (localStorage.getItem('user') !== null){
            dispatch(getLocalStorage())
        }
    },[]);
    useEffect(() => {
        if (localStorage.getItem('cart') !== null){
            dispatch(getCartLocalStorage())
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    // useEffect(() => {
    //     if (localStorage.getItem('favourites') !== null){
    //         dispatch(getFavouritesLocalStorage())
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('favourites', JSON.stringify(favourites))
    // }, [favourites]);





    return (
        <>
            {location.pathname.includes('login') || location.pathname.includes('register') ? '' : <Header/>}
            <Routes>
                {user.email === 'admin@mail.ru' ? <Route path='/' element={<Home/>}/> : ''}
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/account' element={<Account/>}/>
                {/*<Route path='/modal' element={<Modal/>}/>*/}
                <Route path='/accessories' element={<Accessories/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/apple' element={<Apple/>}/>
                <Route path='/samsung' element={<Samsung/>}/>
                <Route path='/xiaomi' element={<Xiaomi/>}/>
                {user.email === 'admin@mail.ru' ? <Route path='/*' element={<AdminPanel/>}/> : ''}
                <Route path='/buys' element={<Buys/>}/>
                <Route path='/favourites' element={<Favourites/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Modal/>
            {location.pathname.includes('login') || location.pathname.includes('register') ? '' : <Footer/>}
        </>
    );
};

export default Layout;