import React from 'react';
import styles from './Home.module.css';
import Button from './../../UI/button/Button.jsx';
export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <a href='#' className={styles.logo}></a>
        <div>
          <nav>
            <ul className={styles.header__nav}>
              <li>
                <a className={styles.header__text} href='#'>
                  События
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Главная
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  О компании
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Услуги
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Турниры
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Тренера
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Команда
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Вакансии
                </a>
              </li>
              <li>
                <a className={styles.header__text} href='#'>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__icons}>
          <div className={styles.vk}></div>
          <div className={styles.youtube}></div>
        </div>
      </div>
      <div className={styles.main}>
        <span className={styles.main__city}>Калининград</span>
        <span className={styles.main__title}>Amber Hawks</span>
        <span className={styles.main__subtext}>Клуб американского футбола</span>
      </div>
      <div className={styles.main__btn}>
        <Button name='Записаться на тренироку' />
      </div>
    </>
  );
}
