"use client";
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Envelope, Phone } from 'phosphor-react'

import ImagemLocalizacao from '../../assets/localizacao-verde.png'
import ImagemEndereco from '../../assets/endereco-squad.png'
import IconWhatsGreen from '../../assets/icon-whats-verde.png'
import ImgSquadRedendo from '../../assets/icon-squad-redondo.svg'

const Contato = () => {
  return (
    <>
        <section className={styles.headerContainer}>
            <div className={styles.headerRow}>
                <div className={styles.headerContent}>
                    <div className={styles.headerTitle}>
                        <span>Grandes negócios só dependem de um contato para acontecer.</span>
                    </div>
                    <div className={styles.retanguloVerde1}></div>
                    <div className={styles.imgSquadRedondo}>
                        <Image src={ImgSquadRedendo} alt='' />
                    </div>
                </div>
            </div>

            <div className={styles.headerRow}>
                <div className={styles.informacoesContainer}>
                    <div className={styles.cardInformacoesTelefone}>
                        <div className={styles.cicleIcon}>
                            <Phone size={32} />
                        </div>
                        <div className={styles.cardDescription}>
                            <span>TELEFONE</span>
                            <p>+55 (11) 2368-5635</p>
                        </div>
                    </div>


                    <div className={styles.cardInformacoesEmail}>
                        <div className={styles.cicleIcon}>
                            <Envelope size={32} />
                        </div>
                        <div className={styles.cardDescription}>
                            <span>E-MAIL</span>
                            <p>contato@squadpremium.com.br</p>
                        </div>
                    </div>

                    <div className={styles.cardInformacoesWhats}>
                        <div className={styles.cicleIcon}>
                            <Image src={IconWhatsGreen} alt='' />
                        </div>
                        <div className={styles.cardDescription}>
                            <span>Whatsapp</span>
                            <p>Clique</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className={styles.formContainer}>
            <div className={styles.titleForm}>
                <span>Ou preencha abaixo e aguarde nosso retorno.</span>
            </div>
            <div className={styles.formGroup}>
                <form action="" className={styles.form}>
                    <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Nome</label>
                            <input type="text" placeholder='Nome e Sobrenome'/>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='Seu e-mail profissional'/>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Cargo</label>
                            <input type="text" placeholder='Seu cargo ou função atual'/>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Empresa</label>
                            <input type="text" placeholder='Nome da empresa para qual fala'/>
                        </div>
                    </div>
                    <div className={styles.formRow}> 
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Mensagem</label>
                            <textarea name="" id="" placeholder='Digite o que quiser :)'></textarea>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.inputGroup}>
                            <button>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <section className={styles.mapsContainer}>
            <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2834071064053!2d-46.65924502466995!3d-23.558262778802014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e95a65aaaab%3A0x5682b6fafbe4a381!2sSquad%20Premium!5e0!3m2!1spt-BR!2sbr!4v1701980654263!5m2!1spt-BR!2sbr" width="800" height="600"   loading="lazy"></iframe>
            <Image src={ImagemLocalizacao} alt=''/>
            <Image className={styles.enderecoImg} src={ImagemEndereco} alt=''/>
        </section> */}
    </>
  )
}

export default Contato
