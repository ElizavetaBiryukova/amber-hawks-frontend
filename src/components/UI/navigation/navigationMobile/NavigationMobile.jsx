'use client'

import Link from 'next/link';
import styles from './NavigationMobile.module.css';

export default function NavigationMobile({ navLink, pathname }) {
    return (
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                {navLink.map(({ link, name }) => (
                    <li className={styles.menuItem} key={name}>
                        <Link className={`${styles.text} ${pathname == link ? styles.active : ''}`} href={link}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}