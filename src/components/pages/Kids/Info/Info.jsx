import styles from './Info.module.css'
import Image from 'next/image';
import kids from '../../../../assets/img/kids.png'

function Info() {
    return (
        <div className={styles.wrapper}>
            <Image
                src={kids}
                alt='info'
            />
            <div>
                <h1 className={styles.title}>Детская команда<br />
                    по американскому футболу</h1>
                <p className={styles.text}>
                    Обучение детей американскому футболу - это уникальная возможность для них развить свои физические навыки, стратегическое мышление и командный дух.
                </p>
                <p className={styles.text}>
                    Во время тренировок дети изучают правила игры, основные приемы и тактику. Они учатся работать в команде, доверять и сотрудничать с товарищами. Обучение американскому футболу также способствует развитию физической выносливости, координации, гибкости и силы.
                </p>
                <p className={styles.text}>

                    Кроме того, участие в играх и соревнованиях помогает детям развить навыки управления стрессом, принимать решения в сложных ситуациях и развивать настойчивость. Обучение детей американскому футболу не только развивает их спортивные навыки, но и помогает в формировании характера и ценностей, которые будут полезны для них в жизни.
                </p>
            </div>
        </div>
    )
}

export default Info