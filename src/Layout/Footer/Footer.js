import React from 'react';

import {FaInstagram} from "react-icons/fa";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

import styles from './footer.module.css'
import Map from "./Map/Map";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.map}>
                    <Map/>
                </div>
                <div className={styles.block}>
                    <h2 className={styles.title}>Контакты</h2>
                    <div className={styles.box}>
                        <div className={styles.boxContent}>
                            <h3 className={styles.subtitle}>Телефон</h3>
                            <a href='tel: +996 550 154 154' className={styles.descr}>+996 501 141 100</a>
                        </div>

                        <div className={styles.boxContent}>
                            <h3 className={styles.subtitle}>E-mail</h3>
                            <p className={styles.descr}>maks00@gmail.com</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.boxContent}>
                            <h3 className={styles.subtitle}>Адрес</h3>
                            <p className={styles.descr}>г. Бишкек, ул. Рыскулова, дом 79Б </p>
                        </div>

                        <div className={styles.boxContent}>
                            <h3 className={styles.subtitle}>Режим работы</h3>
                            <p className={styles.descr}>24/6</p>
                        </div>
                    </div>
                    <nav className={styles.icons}>
                        <a className={styles.iconLink} href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
                        <a className={styles.iconLink} href="https://www.Youtube.com/" target="_blank"><AiFillYoutube/></a>
                        <a className={styles.iconLink} href="https://www.linkedin.com/" target="_blank"><AiFillLinkedin/></a>
                    </nav>
                </div>
            </div>
            <div className={styles.footerText}>
                <p className={styles.footerTextDescr}>APP-gadget, © 2022</p>
                <p className={styles.footerTextDescr}>Политика конфиденциальности</p>
            </div>
        </footer>
    );
};

export default Footer;