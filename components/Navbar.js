import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
        showButton()
    })
 }, [])
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='firstsection'
          spy={true}
          smooth={true}
          duration={500} >
            <span className='navbar-logo' onClick={closeMobileMenu}>NFT</span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='firstsection'
              spy={true}
              smooth={true}
              duration={500} >
                <span className='nav-links' onClick={closeMobileMenu}>Главная</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='thirdsection'
                spy={true}
  smooth={true}
  duration={500}
              >
                <span className='nav-links' onClick={closeMobileMenu}>Услуги</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='secondsection'
                spy={true}
  smooth={true}
  duration={500} 
              >
               <span className='nav-links' onClick={closeMobileMenu}>О нас</span> 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='fourthsection'
                spy={true}
                smooth={true}
                duration={500} 
              >
               <span className='nav-links' onClick={closeMobileMenu}>Контакты</span> 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
////////////
// import styles from './Navbar.module.css'
// import { useState } from 'react';
// import Image from 'next/image'
// import close from "../public/images/close.png";
// import menu from "../public/images/more.png"
// import Link from 'next/link';
// import Button from '../components/Button'
// function navbar() {
//     const [click, setClick] = useState(false)
//     const [button, setButton] = useState(true)
//     const handleClick = () => {
//         setClick(!click)}
//     const closeMobileMenu = () => {
//         setClick(false)}
//     const showButton = () => {
//         if(innerWidth <= 960){
//             setButton(false)
//         }else(setButton(true))
//     }
//     if (typeof window !== "undefined") {
//         window.addEventListener('resize', showButton)
//       }
    
//   return (<>
//   <nav className={styles.navbar}>
//       <div className={styles.container}>
//           <Link href="/"><span className={styles.logo}>NFT</span></Link>
//           <div className={styles.menu_icon} onClick={handleClick}>
//             <Image src={click ? close : menu} width={40} height={40}/>
//           </div>
//           <ul className={click ? styles.nav_menu_active : styles.nav_menu}>
//               <li className={styles.nav_item}>
//                   <Link href="/" >
//                       <span className={styles.nav_links} onClick={closeMobileMenu}>Главная</span>
//                   </Link>
//               </li>
//               <li className={styles.nav_item}>
//                   <Link href="/" >
//                       <span className={styles.nav_links} onClick={closeMobileMenu}>Наши услуги</span>
//                   </Link>
//               </li>
//               <li className={styles.nav_item}>
//                   <Link href="/" >
//                       <span className={styles.nav_links} onClick={closeMobileMenu}>Примеры работ</span>
//                   </Link>
//               </li>
//           </ul>
//           {button && <Button buttonStyle="btn_outline">123</Button>}
//       </div>
//   </nav>
  
//   </>)
// }

// export default navbar;