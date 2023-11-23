"use client";

import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import SetaDiagonal from '../../assets/seta-diagonal-servico.svg'
import { ArrowLeft, ArrowRight, ArrowUp } from 'phosphor-react'

const Servico = () => {
  return (
    <>
      <section className={styles.servicoContainer}>

        <div className={styles.textContainer}>
          <div className={styles.iconArrow}>
            <Image src={SetaDiagonal} alt='estrela Home'/>
          </div>
          <div className={styles.conentText}>
            <span>A <span className={styles.conentTextGreen}>real excelência</span> só é atingida com uma <span className={styles.conentTextGreen}>cultura que transcende os padrões.</span></span>
          </div>

        </div>
      </section>

      <section className={styles.alocacaoContainer}>
        <div className={styles.textHeader}>
          <span>Serviços</span>
          <div className={styles.textLineHeader}></div>
        </div>

        <div className={styles.contentServico}>
          <div className={styles.contentDescription}>
            <div>
              <span>Alocação na sua empresa</span>
            </div>
            <div className={styles.btnArrowGroup}>
              <button className={styles.btnArrowGreenTransparent}>
                <ArrowLeft size={24}/>
              </button>
              <button className={styles.btnArrowGreen}>
                <ArrowRight size={24}/>
              </button>
            </div>
          </div>
          <div className={styles.contentSubDescription}>
            <span>Alocação de profissionais de T.I. da Squad Premium, seja por período, projeto ou prazo indeterminado, na estrutura do cliente sob responsabilidade de seus próprios gestores ou nossos gestores.</span>
          </div>
        </div>

        
        
        <div className={styles.btnService}>
          <button className={styles.btnServiceGreenGrandient}>ENTRAR EM CONTATO</button>
        </div>
      </section>
    </>
  )
}

export default Servico
