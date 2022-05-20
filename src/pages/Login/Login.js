import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {enterAccount} from "../../redux/reducers/user/user";
import styles from './login.module.css'
import {AiOutlineArrowLeft} from "react-icons/ai";

const Login = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = (data) => {
        dispatch(enterAccount(data,navigate ))
    };

    return (
        <section className={styles.login} >

                <Link to='/' style={{color: '#C8C8C8'}}>
                    <div className={styles.arrow}><AiOutlineArrowLeft/></div>
                </Link>


            <form className={styles.form} action="" onSubmit={handleSubmit(loginUser)}>
                <h2 className={styles.title}>Вход в аккаунт</h2>

                <label className={styles.label}>
                    Email
                    <input {...register('email', {
                        required: "Поле обязательно заполнению"
                    })} type="email" className={styles.input}/>
                </label>
                <div className={styles.error}>{errors ?.email && <p>{errors?.email.message || "Error!"}</p> }</div>

                <label className={styles.label}>
                    Пароль
                    <input {...register('password', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 4,
                            message: "Минимум 4 символа"
                        }
                    })} type="password" className={styles.input}/>
                </label>



                <button className={styles.btn} type='submit'>Войти</button>

                <p className={styles.link}>
                    Еще нет аккаунта ?   <Link to='/register'>
                    Регистрация
                </Link>
                </p>

            </form>
        </section>
    );
};

export default Login;