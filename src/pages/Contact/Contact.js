import React from 'react';
import styles from './contact.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper";
import User from '../../Assets/user.png'

const Contacts = () => {
    const {contactsNav,  contacts, contactsContact, contactsForm, formName, formEmail, formMessage, formBtn} = styles;
    return (
        <div className={contactsNav}>
           <div className={styles.row}>
               <div className={styles.swiper}>
                   <Swiper
                       navigation={true} modules={[Navigation]} className='mySwiper'
                       spaceBetween={50}
                       slidesPerView={1}
                   >
                       <SwiperSlide>
                           <div className={styles.swiperRow}>
                               <div className={styles.swiperImage}>
                                   <img src={User} alt=""/>
                               </div>

                               <div className={styles.swiperBlock}>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Имя</h3>
                                       <p className={styles.swiperSubtitle}>Арс</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Должность</h3>
                                       <p className={styles.swiperSubtitle}>Менеджер</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Контакты</h3>
                                       <a href='tel: +996 501 141 100' className={styles.swiperSubtitle}>+996 501 141 100</a>
                                   </div>
                               </div>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className={styles.swiperRow}>
                               <div className={styles.swiperImage}>
                                   <img src={User} alt=""/>
                               </div>

                               <div className={styles.swiperBlock}>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Имя</h3>
                                       <p className={styles.swiperSubtitle}>Колян</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Должность</h3>
                                       <p className={styles.swiperSubtitle}>Администратор</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Контакты</h3>
                                       <a href='tel: +996 550 154 154' className={styles.swiperSubtitle}>+996 500 00 00 00</a>
                                   </div>
                               </div>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className={styles.swiperRow}>
                               <div className={styles.swiperImage}>
                                   <img src={User} alt=""/>
                               </div>

                               <div className={styles.swiperBlock}>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Имя</h3>
                                       <p className={styles.swiperSubtitle}>Кылыч</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Должность</h3>
                                       <p className={styles.swiperSubtitle}>Продовец</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Контакты</h3>
                                       <a href='tel: +996 550 154 154' className={styles.swiperSubtitle}>+996 550 00 00 00</a>
                                   </div>
                               </div>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className={styles.swiperRow}>
                               <div className={styles.swiperImage}>
                                   <img src={User} alt=""/>
                               </div>

                               <div className={styles.swiperBlock}>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Имя</h3>
                                       <p className={styles.swiperSubtitle}>Макс</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Должность</h3>
                                       <p className={styles.swiperSubtitle}>Директор</p>
                                   </div>
                                   <div className={styles.swiperBox}>
                                       <h3 className={styles.swiperTitle}>Контакты</h3>
                                       <a href='tel: +996 550 154 154' className={styles.swiperSubtitle}>+996 501 141 100</a>
                                   </div>
                               </div>
                           </div>
                       </SwiperSlide>
                   </Swiper>
               </div>

               <div className={contacts}>
                   <div className={contactsContact}>
                       <p className={styles.contactsTitle}>Контакты:</p>
                       <p className={styles.contactsSubTitle}>Тел: <a className={styles.contactsLink} href="tel: +996 501 141 100">+996 501 141 100</a></p>
                       <p className={styles.contactsSubTitle}>Email: <a className={styles.contactsLink} target='_blank' href="https://mail.google.com">maks00@gmail.com</a></p>
                       <p className={styles.contactsSubTitle}>Instagram: <a className={styles.contactsLink} target='_blank' href="https://www.instagram.com/nurbaev1007/">maxkanybekov</a></p>
                   </div>

                   <form className={contactsForm} action="https://formsubmit.co/9cab0f0d4b4b3eac39a71761002950ab" method="POST">
                       <h4 className={styles.contactsTitle}>Написать нам</h4>
                       <div className={styles.formBlock}>
                           <input type="text" placeholder='Ваше имя' className={formName} />
                           <input type="email" placeholder='Ваш email' className={formName} />
                       </div>
                       <input type="text" placeholder='Ваш вопрос или сообщение' className={formMessage}/>
                       <div>
                           <button type='submit' className={formBtn}>Отправить</button>
                       </div>
                   </form>
               </div>
           </div>

        </div>
    );
};

export default Contacts;