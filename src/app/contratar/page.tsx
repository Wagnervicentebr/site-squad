"use client";
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

import ScrollIcon from '../../assets/mouse-home.svg'
import EfeitoVerdeEsquedo from '../../assets/elipse-contratar-left.svg'
import EfeitoVerdeDireito from '../../assets/elipse-contratar-right.svg'
import LogoSquad from '../../assets/logo-squad-contratar.png'

import EfeitoVerdeVetor0 from '../../assets/contratar-elipses-verdes/Vector.png'
import EfeitoVerdeVetor1 from '../../assets/contratar-elipses-verdes/Vector-1.png'
import EfeitoVerdeVetor2 from '../../assets/contratar-elipses-verdes/Vector-2.png'
import EfeitoVerdeVetor3 from '../../assets/contratar-elipses-verdes/Vector-3.png'
import EfeitoVerdeVetor4 from '../../assets/contratar-elipses-verdes/Vector-4.png'
import EfeitoVerdeVetor5 from '../../assets/contratar-elipses-verdes/Vector-5.png'


const Contratar = () => {
  return (
    <>
        <section className={styles.contratarContainer}>
            <div className={styles.contratarImgLeft}>
              <Image src={EfeitoVerdeEsquedo}  alt='Efeito verde'/>
            </div>

            <div className={styles.titleContent}>
                <span><span className={styles.fontGradient}>Acelere </span>seus resultados <span className={styles.fontGradient}>com um impulso PREMIUM.</span></span>
            </div>

            <div className={styles.scrollIcon}>
              <Image src={ScrollIcon} alt='estrela Home'/>
              <span>Role para baixo</span>
            </div>

            <div className={styles.contratarImgRight}>
              <Image src={EfeitoVerdeDireito}  alt='Efeito verde'/>
            </div>
        </section>

        <section className={styles.excelenciaContainer}>
            <div className={styles.contentText}>
                <span>Excelência absoluta com um processo simples e flexível: <span className={styles.fontGreen}>Revolução à vista!</span></span>
            </div>
            <div className={styles.contentImg}>
                <Image src={LogoSquad} alt='' />
            </div>

            <div className={styles.elipse1}>
              <Image src={EfeitoVerdeVetor3}  alt='Efeito verde'/>
            </div>
        </section>

        <section className={styles.stepNumberGroup}>
            <div className={styles.stepNumber}>
                <div className={styles.stepNumberBox}>
                    <span>1.</span>
                </div>
                <div className={styles.stepNumberText}>
                    <span>A partir dos projetos e solicitações de nossos clientes, selecionamos os profissionais mais adequados para cada necessidade.</span>
                </div>
                <div className={styles.stepNumberLine}></div>
            </div>

            <div className={styles.elipse2}>
              <Image src={EfeitoVerdeVetor0}  alt='Efeito verde'/>
            </div>

            <div className={styles.stepNumber}>
                <div className={styles.stepNumberBox}>
                    <span>2.</span>
                </div>
                <div className={styles.stepNumberText}>
                    <span>O contrato de alocação é por vaga, assim há a autonomia para que se garanta os melhores profissionais para cada projeto.</span>
                </div>
                <div className={styles.stepNumberLine}></div>
                <div className={styles.elipse3}>
                    <Image src={EfeitoVerdeVetor3}  alt='Efeito verde'/>
                </div>
            </div>

            
            <div className={styles.stepNumber}>
                <div className={styles.stepNumberBox}>
                    <span>3.</span>
                </div>
                <div className={styles.stepNumberText}>
                    <span>Os profissionais alocados pela Squad Premium podem trabalhar de forma remota, dentro da Squad ou baseados em nossos clientes, com gestão pela Squad ou pelos gestores de nossos clientes.</span>
                </div>
                <div className={styles.stepNumberLine}></div>
                <div className={styles.elipse4}>
                    <Image src={EfeitoVerdeVetor5}  alt='Efeito verde'/>
                </div>
            </div>

            <div className={styles.stepNumber}>
                <div className={styles.elipse5}>
                    <Image src={EfeitoVerdeVetor0}  alt='Efeito verde'/>
                </div>
                <div className={styles.stepNumberBox}>
                    <span>4.</span>
                </div>
                <div className={styles.stepNumberText}>
                    <span>Os profissionais contratados são integrantes da Equipe Squad, que é a responsável por todas as responsabilidades trabalhistas e profissionais.</span>
                </div>
                <div className={styles.elipse6}>
                    <Image src={EfeitoVerdeVetor4}  alt='Efeito verde'/>
                </div>
            </div>

            <div className={styles.buttonGroup}>
                <button className={styles.buttonGreen}>CONTATO</button>
                <button className={styles.buttonTransparent}>SERVIÇOS</button>
            </div>
        </section>
       
    </>
  )
}

export default Contratar
