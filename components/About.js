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
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
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