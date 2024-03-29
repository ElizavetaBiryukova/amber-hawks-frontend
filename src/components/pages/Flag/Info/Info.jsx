import styles from './Info.module.css'
// import Image from 'next/image';
// import flag from '../../../../assets/img/flag.png'

function Info() {
    return (
        <div className={styles.wrapper}>
            {/* <Image
                src={flag}
                alt='info'
            /> */}
            <div>
                <h1 className={styles.title}>Команда по флаг-футболу</h1>
                {/* <p className={styles.text}>
                    Этот вид спорта может быть бесконтактным, но в большинстве вариантов такого футбола определённые контакты есть, иначе мяч попросту не отобрать. Поэтому спортсменка, владеющая мячом, может нестись по полю, куда ей надо, никто не будет её сбивать и валить на землю.
                </p>
                <p className={styles.text}>
                    Но к форме каждого из игроков прикреплён специальный флажок или лента. Если соперник сможет их сорвать, игровой эпизод прекращается, – потеря флага равносильна падению в американском футболе.
                </p>
                <p className={styles.text}>
                    Флаг-футбол был придуман для тех, кто хочет провести время на поле, тактически обыгрывать соперника, но делать это безболезненно. В этом его главное отличие.16+
                </p> */}
                <p className={styles.text}>
                    13 октября на 141-й сессии в Мумбаи Международный олимпийский комитет утвердил обновлённую программу Олимпийских игр. Теперь спортсмены будут состязаться во флаг-футболе.
                </p>
                <p className={styles.text}>
                    Флаг-футбол - это командный, бесконтактный вид спорта.
                </p>
                <p className={styles.text}>
                    Команда состоит из 12 игроков из которых 5 находятся на поле.
                </p>
                <p className={styles.text}>
                    Цель команды – заработать очков, больше чем соперник.
                </p>
                <p className={styles.text}>
                    Очки зарабатываются нападением, путем заноса мяча в зачетную зону соперника, сделать это можно как принимая за инструмент "физиологию", просто передав мяч самому быстрому игроку, так и "Умственные способности" , сыграв сложный обманный розыгрыш.
                </p>
                <p className={styles.text}>
                    Игроки защиты могут перехватывать мяч во время паса или останавливать игрока с мячом, сорвав флаг.
                </p>
                <p className={styles.text}>
                    Более подробно о тонкостях этой замечательной игры, вы узнаете на своей первой тренировке.
                </p>
            </div>
        </div>
    )
}

export default Info