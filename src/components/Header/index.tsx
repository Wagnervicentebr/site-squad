'use client'
import React, { useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import LogoSquad from '../../assets/logo-squad.svg'
import LogoSquadMobile from '../../assets/logo-mobile-menu.svg'
import Link from 'next/link'

const Header = () => {

    const [inputValue, setInputValue] = useState(false)

  return (
    <>
    
    <header className={style.headerContainerDesktop}>
            <div className={style.gridContainer}>
                <div className={style.container}></div>
                <div className={style.containerLogoDesktop}>
                    <Image 
                    className={style.logo} 
                    src={LogoSquad} 
                    alt="SquadPremium" />
                </div>
                <div className={style.containerMobile}>
                    <Image 
                    className={style.logo} 
                    src={LogoSquadMobile} 
                    alt="SquadPremium" />
                </div>
                <div className={style.container}></div>
                <div className={style.container}>
                    <nav className={style.navbar}>
                        <ul>
                            <li><Link href='/'>Início</Link></li>
                            <li><Link href='/sobre'>Sobre</Link></li>
                            <li><Link href='/servico'>Serviços</Link></li>
                            <li><Link href='/contratar'>Contratar</Link></li>
                            <li><Link href='/carreira'>Carreira</Link></li>
                            <li><Link href='/blog'>Blog</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={style.container}></div>
                <div className={style.container}>
                    <button className={style.button}><Link href='/contato'>Entrar em Contato</Link></button>
                </div>
                <div className={style.container}></div>
            </div>
        </header >

        <header className={style.headerContainerMobile}>
            <nav className={style.menu}>
                <div className={style.logoMobileContainer}>
                    <Image src={LogoSquadMobile} alt='' />
                </div>
                <input type="checkbox" onClick={() => setInputValue(!inputValue)} checked={inputValue} className={style.menuFakerTrigger}/>
                <div className={style.menuLines} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <Image src={LogoSquad} alt='' />
                    <div className={style.menuLineDivision} >
                        <div></div>
                    </div>
                    <li>
                        <Link onClick={() => setInputValue(!inputValue)} href='/'>Início</Link>
                    </li>
                    <li>
                        <Link onClick={() => setInputValue(!inputValue)} href='/sobre'>Sobre</Link>
                    </li>
                    <li>
                        <Link onClick={() => setInputValue(!inputValue)} href='/servico'>Serviços</Link>
                    </li>
                    <li>
                        <Link onClick={() => setInputValue(!inputValue)} href='/contratar'>Contratar</Link>
                    </li>
                    <li>
                        <Link onClick={() => setInputValue(!inputValue)} href='/carreira'>Carreira</Link>
                    </li>
                    <li>
                        <Link onClick={() => setInputValue(!inputValue)} href='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
      </>
  )
}

export default Header