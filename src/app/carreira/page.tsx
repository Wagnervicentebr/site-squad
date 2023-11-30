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
                    <form>
                        <span>Preencha os dados abaixo para darmos o próximo passo!</span>
                        <div className={styles.camposForm}>
                            <div>
                                <span>Nome</span>
                                <input type="text" placeholder='Nome e sobrenome'/>
                            </div>

                            <div>
                                <span>Telefone</span>
                                <input type="text" placeholder='( xx ) 9 9988-6633'/>
                            </div>

                            <div>
                                <span>E-mail</span>
                                <input type="text" placeholder='Seu e-mail profissional'/>
                            </div>

                            <div>
                                <span>Mensagem</span>
                                <textarea  placeholder='Nome e sobrenome'/>
                            </div>

                            <div>
                                <button>Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
   </>
  )
}

export default Carreira
