import styles from "./Uslugi.module.css";
import {Link} from "react-scroll"
import { motion, useViewportScroll, useTransform } from "framer-motion";
function Uslugi() {
    return (
        <>
            <div className={styles.pricing__section} id="thirdsection">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                variants={{
                    visible: { opacity: 1,  x: 0, y:0 },
                    hidden: { opacity: 0, x: 0, y: 100 }
                }}
                className={styles.pricing__wrapper}>
                    <h1 className={styles.pricing__heading}>Услуги</h1>
                    <div className={styles.pricing__container}>
                        
                        <div className={styles.pricing__container__card}>
                            <div className={styles.pricing__container__cardInfo}>
                                <h3>обычный</h3>
                                <h4>1000 рублей</h4>
                                <ul className={styles.pricing__container__features}>
                                    <li>Будут дети здоровы</li>
                                    <li>Будет счастье тебе</li>
                                </ul>
                                <Link to='fourthsection'
                                    spy={true}
                                    smooth={true}
                                    duration={500} >
                                    <button
                                        className={`btn btn--outline btn--large`}
                                    >
                                        Купить
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.pricing__container__card}>
                            <div className={styles.pricing__container__cardInfo}>
                                <h3>обычный</h3>
                                <h4>5000 рублей</h4>
                                <ul className={styles.pricing__container__features}>
                                    <li>Будут дети здоровы</li>
                                    <li>Будет счастье тебе</li>
                                </ul>
                                <Link to='fourthsection'
                                    spy={true}
                                    smooth={true}
                                    duration={500} >
                                    <button
                                        className={`btn btn--outline btn--large`}
                                    >
                                        Купить
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.pricing__container__card}>
                            <div className={styles.pricing__container__cardInfo}>
                                <h3>обычный</h3>
                                <h4>10000 рублей</h4>
                                <ul className={styles.pricing__container__features}>
                                    <li>Будут дети здоровы</li>
                                    <li>Будет счастье тебе</li>
                                </ul>
                                <Link to='fourthsection'
                                    spy={true}
                                    smooth={true}
                                    duration={500} >
                                    <button
                                        className={`btn btn--outline btn--large`}
                                    >
                                        Купить
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>



        </>
    )
}

export default Uslugi