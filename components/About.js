import styles from "./About.module.css"
import rocket from "./rocket.png"
import Image from "next/image"
import { motion, useViewportScroll, useTransform } from "framer-motion";
function About() {
    return (
        <><div className={styles.pricing__section} id="secondsection">
            <div className={styles.pricing__wrapper}>


                <div className={styles.pricing__container}>

                    <div className={styles.pricing__container__card2}>
                        <motion.div 
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         transition={{ duration: 2 }}
                         variants={{
                             visible: { opacity: 1,  x: 0, y:0 },
                             hidden: { opacity: 0, x: 0, y: 100 }
                         }}
                        className={styles.pricing__container__cardInfo}>
                            <h3>О нас</h3>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat. Amet est placerat in egestas erat imperdiet sed euismod. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada nunc vel risus.</h4>
                        </motion.div>
                    </div>
                    <div className={styles.space}></div>
                    <div

                        className={styles.pricing__container__card}>
                        <motion.div

                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, rotate: 0, x: 0, y:0 },
                                hidden: { opacity: 0, scale: 0, rotate: 45, x: 100, y: 100 }
                            }}
                        >
                        <Image src={rocket} width={300} height={300} />
                        </motion.div>
                        {/* <div className={styles.pricing__container__cardInfo}>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About