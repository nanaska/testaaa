import Services from "./Services"
import Link from "next/link"
import Image from "next/image"
import sample from "./video-1.mp4"
import photo from "../public/images/img3.jpg"
function Cards() {
    return (
        <>  <div className="cardsback">
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className="cards">
                <h1>Наши работы</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <Services src={photo} text="1-ая услуга она заключается в том то" />
                        </ul>
                        <ul className="cards__items">
                            <Services src={photo} text="2-ая услуга она заключается в том то" />
                        </ul>
                        <ul className="cards__items">
                            <Services src={photo} text="3-ая услуга она заключается в том то" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards