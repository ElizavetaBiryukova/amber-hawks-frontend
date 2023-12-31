import styles from './Info.module.css'
import Image from 'next/image';
import flag from '../../../../assets/img/flag.png'

function Info() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={flag}
                alt='info'
            />
            <div>
                <h1 className={styles.title}>Женская команда по флаг-футболу</h1>
                <p className={styles.text}>
                    Этот вид спорта может быть бесконтактным, но в большинстве вариантов такого футбола определённые контакты есть, иначе мяч попросту не отобрать. Поэтому спортсменка, владеющая мячом, может нестись по полю, куда ей надо, никто не будет её сбивать и валить на землю.
                </p>
                <p className={styles.text}>
                    Но к форме каждого из игроков прикреплён специальный флажок или лента. Если соперник сможет их сорвать, игровой эпизод прекращается, – потеря флага равносильна падению в американском футболе.
                </p>
                <p className={styles.text}>
                    Флаг-футбол был придуман для тех, кто хочет провести время на поле, тактически обыгрывать соперника, но делать это безболезненно. В этом его главное отличие.16+
                </p>
            </div>
        </div>
    )
}

export default Info