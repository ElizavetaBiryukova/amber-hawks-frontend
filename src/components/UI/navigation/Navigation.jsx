import React from 'react';
import styles from './Navigation.module.css';
export default function Navigation() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
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
    </div>
  );
}
