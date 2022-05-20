import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import login from "../Login/Login";
import {useDispatch} from "react-redux";
import {loginAccount} from "../../redux/reducers/user/user";
import styles from './register.module.css'
import {AiOutlineArrowLeft} from "react-icons/ai";

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const registerUser = (data) => {
        dispatch(loginAccount({
            ...data,
            order: [],
            birthday: '',
            image: ''
        }, navigate));
            reset()
    };

    return (
        <div className={styles.register}>
            <Link to='/' style={{color: '#C8C8C8'}}>
                <div className={styles.arrow}><AiOutlineArrowLeft/></div>
            </Link>
            <form className={styles.form}  onSubmit={handleSubmit(registerUser)}>
                <h2 className={styles.title}>Регистрация</h2>
                <label className={styles.label}>
                    Имя
                    <input {...register('name')} type="text" className={styles.input}/>
                </label>

                <label className={styles.label}>
                    Email
                    <input {...register('email', {
                        required: "Поле обязательно заполнению"
                    })} type="email" className={styles.input}/>
                </label>
                <div className={styles.error}>{errors ?.email && <p>{errors?.email.message || "Error!"}</p> }</div>

                <label className={styles.label}>
                    Номер телефона
                    <input {...register('phone', {
                        required: "Поле обязательно заполнению"
                    })} type="tel" className={styles.input}/>
                </label>
                <div className={styles.error}>{errors ?.phone && <p>{errors?.phone.message || "Error!"}</p> }</div>

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


                <label className={styles.label}>
                    Подтвердите пароль
                    <input {...register('password')} type="password" className={styles.input}/>
                </label>


                <button type='submit' className={styles.btn}>Регистрация</button>

                <p className={styles.link}>
                    Уже есть аккаунт ?   <Link to='/login'>
                    Войти
                </Link>
                </p>

            </form>
        </div>
    );
};
export default Register;