import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import LogoSquad from '../../assets/logo-squad.svg'

const Header = () => {
  return (
    <>
    
    <header className={style.headerContainer}>
            <div className={style.gridContainer}>
                <div className={style.container}></div>
                <div className={style.container}>
                    <Image 
                    className={style.logo} 
                    src={LogoSquad} 
                    alt="SquadPremium" />
                </div>
                <div className={style.container}></div>
                <div className={style.container}>
                    <nav className={style.navbar}>
                        <ul>
                            <li><a href='../../home'>Início</a></li>
                            <li><a href='../../about'>Sobre</a></li>
                            <li><a href='../../services'>Serviços</a></li>
                            <li><a href='../../contract'>Contratar</a></li>
                            <li><a href='../../career'>Carreira</a></li>
                            <li><a href='../../blog'>Blog</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={style.container}></div>
                <div className={style.container}>
                    <button className={style.button}><a href=''>Entrar em Contato</a></button>
                </div>
                <div className={style.container}></div>
            </div>
        </header >
      </>
  )
}

export default Header