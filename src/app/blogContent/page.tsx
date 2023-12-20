"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import FerramentaCategoria from '../../assets/ferramentas-categoria.svg'
import TechCategoria from '../../assets/tecnologia-categoria.svg'
import CarreiraCategoria from '../../assets/carreira-categoria.svg'
import Slide1 from '../../assets/blog-funcionalidade-analytics-4.svg'
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
import SliderComponent from '@/components/Slider'
import SliderMobileComponent from '@/components/SliderMobile'
import { BlogContentJson } from './blogContentJson';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface blogContent {
        title: string,
        imagem: string,
        categoria: string,
        dataPublicacao: string,
        contentLine: Array<string>
}
const BlogContent = () => {

    const searchParams  = useSearchParams()
    const [blogContent, setBlogContent] = useState<blogContent>();
    const [idBlog, setIdBlog] = useState(searchParams?.get('id'));

    function getBlogContent() {
        const blog = BlogContentJson.filter(item => {
            return item.id === idBlog;
        })

        setBlogContent(blog[0]);
    }

    useEffect(() => {
        getBlogContent();
    },[])
  return (
    <>
        <section className={styles.blogContainer}> 

            <div className={styles.blogContent}>
               <div className={styles.title}>
                <span>{blogContent?.title}</span>
               </div>
               <div className={styles.imagemCotent}>
                <Image src={blogContent?.imagem as string} alt='' width={400} height={400}/>
                <div className={styles.contentImg}>
                    <button>{blogContent?.categoria}</button>
                    <span>{blogContent?.dataPublicacao}</span>
                </div>
               </div>
               
               <div className={styles.textContent}>
                {blogContent?.contentLine.map(item => {
                    return <span key={item}>{item}</span>
                })}
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

                    <Link href={{
                        pathname: '/blogContent',
                        query: { id: 1 },
                        }}>
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
                    </Link>

                    <Link href={{
                        pathname: '/blogContent',
                        query: { id: 1 },
                        }}>
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
                    </Link>

                    <Link href={{
                        pathname: '/blogContent',
                        query: { id: 1 },
                        }}>
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
                    </Link>
                </div>
            </div>
        </section>

        <section className={styles.itensRelacionados}>
            <div className={styles.itensRelacionadosText}>
                <span>Artigos relacionados</span>
            </div>
        
            <div className={styles.sliderContainer}>
                <SliderComponent />
            </div>

            <div className={styles.sliderMobileContainer}>
                <SliderMobileComponent />
            </div>
        </section>
    </>
  )
}

export default BlogContent
