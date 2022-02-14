import sample from "./video-1.mp4"
import {Link} from "react-scroll"
function HeroSection() {
  return (<div className="background">
    <div className="hero-container" id="firstsection" >
      <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
      </video>
      <h1>NFT AMAZING TRAVEL</h1>
      <p>Чего ты ждешь?</p>
      <div className='hero-btns'>
      <Link
                to='thirdsection'
                spy={true}
                smooth={true}
                duration={500} 
              >
        <button
          className='btns btn btn--outline btn--large'
        >
          Услуги
        </button></Link>
      </div>
    </div>
  </div>)
}

export default HeroSection;
