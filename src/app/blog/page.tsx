'use client'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import FerramentaCategoria from '../../assets/ferramentas-categoria.svg'
import TechCategoria from '../../assets/tecnologia-categoria.svg'
import CarreiraCategoria from '../../assets/carreira-categoria.svg'
import Slide1 from '../../assets/slider1.svg'
import Slide2 from '../../assets/slider2.svg'
import Slide3 from '../../assets/slider3.svg'
import Slide4 from '../../assets/slider-4.svg'
import Slide5 from '../../assets/slider-5.svg'
import Slide6 from '../../assets/slider-6.svg'
import { ArrowLeft, ArrowRight, MagnifyingGlass } from 'phosphor-react'
import TechIcon from '../../assets/tecnologia-icon-button.svg'
import FerramentaIcon from '../../assets/ferramenta-icon-button.svg'
import AnaliticsIcon from '../../assets/analitics-icon-button.svg'
import GrowthIcon from '../../assets/growth-icon-button.svg'
import NoticiasIcon from '../../assets/noticias-icon-button.svg'
import CarreiraIcon from '../../assets/carreira-icon-button.svg'

const Blog = () => {
  return (
    <>
        <section className={styles.blogContainer}> 

            <div className={styles.blogCards}>
                <div className={styles.title}>
                    <span>Blog Tech</span>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.searchBlogMobile}>
                    <MagnifyingGlass size={24} />
                    <input placeholder='Buscar no blog....'/>
                </div>

                <div className={styles.cardsGroup}>
                    <div className={styles.card}>
                        <Image className={styles.cardImg} src={Slide1} alt=''/>
                        <div className={styles.cardDescription}>
                            <Image src={TechCategoria} alt='' />
                            <span className={styles.cardCateogry}>Tecnologia</span>
                            <span className={styles.cardDescriptionText}>Quais as novas funcionalidades do google analytics 4?</span>
                        </div>
                        
                    </div>



                    <div className={styles.card}>
                        <Image className={styles.cardImg} src={Slide2} alt=''/>
                        <div className={styles.cardDescription}>
                            <Image src={TechCategoria} alt='' />
                            <span className={styles.cardCateogry}>Tecnologia</span>
                            <span className={styles.cardDescriptionText}>Como o blockchain impactará o mercado financeiro em 2024?</span>
                        </div>
                        
                    </div>


                    <div className={styles.card}>
                        <Image className={styles.cardImg} src={Slide3} alt=''/>
                        <div className={styles.cardDescription}>
                            <Image src={TechCategoria} alt='' />
                            <span className={styles.cardCateogry}>Tecnologia</span>
                            <span className={styles.cardDescriptionText}>5G e 6G: indústrias de telecom se preparam para produção.</span>
                        </div>
                        
                    </div>


                    <div className={styles.card}>
                        <Image className={styles.cardImg} src={Slide4} alt=''/>
                        <div className={styles.cardDescription}>
                            <Image src={CarreiraIcon} alt='' />
                            <span className={styles.cardCateogry}>Carreira</span>
                            <span className={styles.cardDescriptionText}>Entenda como ingressar na carreira Tech</span>
                        </div>
                        
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.cardImg} src={Slide5} alt=''/>
                        <div className={styles.cardDescription}>
                            <Image src={TechCategoria} alt='' />
                            <span className={styles.cardCateogry}>Tecnologia</span>
                            <span className={styles.cardDescriptionText}>Quais as novidades da nova versão do Chat GPT?</span>
                        </div>
                        
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.cardImg} src={Slide6} alt=''/>
                        <div className={styles.cardDescription}>
                            <Image src={FerramentaIcon} alt='' />
                            <span className={styles.cardCateogry}>Ferramenta</span>
                            <span className={styles.cardDescriptionText}>Entenda como incluir I.A para seu workflow</span>
                        </div>
                        
                    </div>

                    <div className={styles.btnPageGroup}>
                        <div className={styles.btnPrevNext}>
                            <ArrowLeft width={24}  className={styles.btnPrev}/>
                            <button>Proximo</button>
                        </div>
                        <div className={styles.btnNumbers}>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                        </div>
                        <div className={styles.btnPrevNext}>
                            <button>Proximo</button>
                            <ArrowRight width={24} className={styles.btnNext}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.infosLeft}>
                <div className={styles.searchBlog}>
                    <MagnifyingGlass size={24} />
                    <input placeholder='Buscar no blog....'/>
                </div>

                <div className={styles.category}>
                    <span>Categorias</span>
                </div>

                <div className={styles.buttonCategory}>
                    <div className={styles.btnGrop}>
                        <Image src={TechIcon} alt='' />
                        <button>Tecnologia</button>
                    </div>

                    <div className={styles.btnGrop}>
                        <Image src={NoticiasIcon} alt='' />
                        <button>Notícias</button>
                    </div>

                    <div className={styles.btnGrop}>
                        <Image src={CarreiraIcon} alt='' />
                        <button>Carreira</button>
                    </div>

                    <div className={styles.btnGrop}>
                        <Image src={GrowthIcon} alt='' />
                        <button>Growth</button>
                    </div>

                    <div className={styles.btnGrop}>
                        <Image src={AnaliticsIcon} alt='' />
                        <button>Analytics</button>
                    </div>

                    <div className={styles.btnGrop}>
                        <Image src={FerramentaIcon} alt='' />
                        <button>Ferramentas</button>
                    </div>
                </div>

                <div className={styles.lastArticle}>
                    <span className={styles.lastArticleTitle}>Ultimos artigos</span>

                    <div className={styles.cardArticle}>
                        <div className={styles.cardArticleImg}>
                            <Image src={Slide1} alt='' />
                        </div>
                        <div className={styles.cardArticleContent}>
                            <span className={styles.contentDate}>11 de julho 2023</span>
                            <span className={styles.contentText}>Quais as novas funcionalidades do google analytics 4?</span>
                            <span className={styles.contentTextGreen}>Acessar artigo</span>
                        </div>
                    </div>

                    <div className={styles.cardArticle}>
                        <div className={styles.cardArticleImg}>
                            <Image src={Slide2} alt='' />
                        </div>
                        <div className={styles.cardArticleContent}>
                            <span className={styles.contentDate}>06 de julho 2023</span>
                            <span className={styles.contentText}>Como o blockchain impactará o mercado financeiro em 2024?</span>
                            <span className={styles.contentTextGreen}>Acessar artigo</span>
                        </div>
                    </div>

                    <div className={styles.cardArticle}>
                        <div className={styles.cardArticleImg}>
                            <Image src={Slide3} alt='' />
                        </div>
                        <div className={styles.cardArticleContent}>
                            <span className={styles.contentDate}>02 de julho 2023</span>
                            <span className={styles.contentText}>5G e 6G: indústrias de telecom se preparam para produção.</span>
                            <span className={styles.contentTextGreen}>Acessar artigo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.newLatterContainer}>
            <div className={styles.cardNewLatter}>
                <div className={styles.cardNewLatterRow}>
                <div className={styles.elipse1}></div>
                <div className={styles.elipse2}></div>
                    <span>Inscreva-se em nossa <span className={styles.textBold}>newsletter</span></span>
                    <div className={styles.linePurple}></div>
                </div>
                <div className={styles.cardNewLatterRow}>
                    <input type="text" placeholder='Digite seu e-mail de contato'/>
                    <button>ENVIAR</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog
