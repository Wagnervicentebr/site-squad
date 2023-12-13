import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

import GlassCurve from '../../assets/glass-curve.svg';

const Carreira = () => {
  return (
   <>
        <section className={styles.carreiraContainer}>
            <div className={styles.formContainer}>
                <div className={styles.textContent}>
                    <div>
                        <span>Todo talento <span className={styles.textGradient}>tech</span> pode <span className={styles.textGradient}>transformar</span> a própria realidade e a de muitas pessoas.</span>
                    </div>
                    <div>
                        <span>Quer fazer parte de um movimento maior?</span>
                    </div>
                    <div className={styles.imgContent}>
                        <Image src={GlassCurve} alt=''/>
                    </div>
                </div>
                <div>
                    <form className={styles.form}>
                        <div  className={styles.formText}>
                            <span>Preencha os dados abaixo para darmos o próximo passo!</span>
                        </div>
                        <div className={styles.camposForm}>
                            <div  className={styles.formGroup}>
                                <span>Nome</span>
                                <input type="text" placeholder='Nome e sobrenome'/>
                            </div>

                            <div  className={styles.formGroup}>
                                <span>Telefone</span>
                                <input type="text" placeholder='( xx ) 9 9988-6633'/>
                            </div>

                            <div  className={styles.formGroup}>
                                <span>E-mail</span>
                                <input type="text" placeholder='Seu e-mail profissional'/>
                            </div>

                            <div  className={styles.formGroup}>
                                <span>Mensagem</span>
                                <textarea  placeholder='Resuma sua área de trabalho e qualificação.'> </textarea>
                            </div>

                        </div>
                        
                        <div  className={styles.formBtn}>
                            <button>Enviar</button>
                        </div>
                    </form>
                    <div className={styles.curriculoContainer}>
                        <span>Você também pode escrever um e-mail com seu currículo e enviar para: <span className={styles.email}>talentos@squadpremium.com.br</span></span>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.comoFuncionaContainer}>
            <div className={styles.title}>
                <span>Veja como funciona:</span>
            </div>

            <div className={styles.comoFuncionaContainerRow}>
                <div className={styles.buttonTransparent}>
                    <button><span>Recrutamento</span></button>
                    <span>Aqui, com nossas naves de captura de talentos, vasculhamos o universo e abduzimos os melhores Aliens.</span>
                </div>

                <div className={styles.buttonTransparent}>
                    <button><span>Bate-Papo</span></button>
                    <span>É hora de conhecer melhor os candidatos, procurando entender se há fit cultural entre nós e nosso cliente.</span>
                </div>
            </div>

            <div className={styles.comoFuncionaContainerRow}>
                <div className={styles.buttonTransparent}>
                    <button><span>Avaliação Técnica</span></button>
                    <span>Em um comitê formado pelos Aliens de maior poderio técnico, o candidato passa por uma rigorosa prova de conhecimentos técnicos. Se ele possuir as skills necessárias, poderá se juntar à missão.</span>
                </div>

                <div className={styles.buttonTransparent}>
                    <button><span>Contratação</span></button>
                    <span>Hora de colher os louros da jornada, para o cliente e candidato(a). Nosso time de people fará a recepção do candidato e daqui em diante cliente e Alien, terão uma experiência inigualável.</span>
                </div>
            </div>
        </section>
   </>
  )
}

export default Carreira
