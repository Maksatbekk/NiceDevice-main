import React  from 'react';
import styles from './about.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import Apple from '../../Assets/Apple.jpg'
import Samsung from '../../Assets/Samsung.png'
import Xiaomi from '../../Assets/Xiaomi.jpg'

const AboutUs = () => {
    return (
        <section>
            <div className={styles.row}>
                       <div className={styles.swiper}>
                           <h3 className={styles.aboutTitle}>Наши партнеры</h3>
                           <Swiper
                               navigation={true} modules={[Navigation]} className='mySwiper'
                               spaceBetween={50}
                               slidesPerView={1}
                           >
                               <SwiperSlide>
                                   <div className={styles.swiperRow}>
                                       <img className={styles.swiperImg} src={Apple} alt=""/>
                                   </div>
                               </SwiperSlide>

                               <SwiperSlide>
                                   <div className={styles.swiperRow}>
                                       <img className={styles.swiperImg} src={Samsung} alt=""/>
                                   </div>
                               </SwiperSlide>

                               <SwiperSlide>
                                   <div className={styles.swiperRow}>
                                       <img className={styles.swiperImg} src={Xiaomi} alt=""/>
                                   </div>
                               </SwiperSlide>
                           </Swiper>
                       </div>
                <div className={styles.about}>
                    <h4 className={styles.title}>О нас</h4>
                    <p className={styles.aboutTitle}>Добро пожаловать на gadget.kg</p>
                    <p className={styles.aboutDescr}><i>Интернет магазин www.NiveDevice.kg начал действовать 20 мая 2022 года. Основными мотивами создания магазина стало отсутствие возможности приобрести широкий ассортимент проверенных надежных товаров в одном месте,  неоправданно высокие розничные цены из за отсутствие оптимизации товара конечному покупателю, а также низкий уровень сервиса на рынке. Таким образом, миссией www.NiceDevice.kg является: предоставить широкий ассортимент товаров по лучшей цене и при этом обслуживание превзошло ожидания наших клиентов. NiceDevice.kg предлагает на сегодняшний день около 1000 наименований продукции и услуг.</i></p>
                </div>
                   </div>

        </section>

    );
};

export default AboutUs;