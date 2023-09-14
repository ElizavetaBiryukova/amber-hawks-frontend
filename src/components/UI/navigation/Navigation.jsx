import Link from 'next/link';
import styles from './Navigation.module.css';


export default function Navigation() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}></Link>
        <div>
          <nav>
            <ul className={styles.header__nav}>
              <li>
                <a className={styles.header__text} href='#'>
                  События
                </a>
              </li>
              <li>
                <Link className={styles.header__text} href='/'>
                  Главная
                </Link>
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
                <Link className={styles.header__text} href='/team'>
                  Команда
                </Link>
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