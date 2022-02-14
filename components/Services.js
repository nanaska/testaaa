import style from "./Services.module.css"
import Image from 'next/image'
import Link from 'next/link';


function Services(props) {
    
    return (<>

        
        <li className={style.cards__items}>
            <Link href="/">
                <div className={style.cards__item__link}>
                    <figure className={style.cards__item__pic__wrap}>
                     <Image width={400} height={400} src={props.src} alt="альтернативный текст"/>
                     
                    </figure>
                    <div className={style.cards__item__info}>
                        <h5 className={style.cards__item__text}>{props.text}</h5>
                    </div>
                </div>
            </Link>
        </li>


    </>)
}
export default Services;