"use client";
import React from 'react'
import styles from './page.module.css'
import { ArrowCircleDown } from 'phosphor-react'
import Image from 'next/image';
import EfeitoVerdeEsquedo from '../../assets/efeito-bola-verde-esquerda.svg'
import EfeitoVerdeDireito from '../../assets/efeito-bola-verde-direita.svg'
import SamsungLogo from '../../assets/samsung-logo.svg'
import GoogleLogo from '../../assets/google-logo.svg'
import AmazonLogo from '../../assets/logo-amazon.svg'
import WindowsLogo from '../../assets/windows-logo.svg'
import GenialLogo from '../../assets/genial-logo.svg'
import SafraLogo from '../../assets/logo-safra.svg'
import SantanderLogo from '../../assets/santander-logo.svg'
import MagaluLogo from '../../assets/magalu-logo.svg'
import B3Logo from '../../assets/logo-b3.svg'
import MercadoLivreLogo from '../../assets/logo-mercado-livre.svg'
import NuLogo from '../../assets/nu-logo.svg' 
import CrefisaLogo from '../../assets/crefisa-logo.svg' 
import XPLogo from '../../assets/logo-xp.svg' 
import AmericanasLogo from '../../assets/logo-americanas.svg' 
import YoutubeNegaticeIcon from '../../assets/youTube-negative.svg'
import InstagramNegaticeIcon from '../../assets/instagram-negative.svg'
import FacebookNegaticeIcon from '../../assets/facebook-negative.svg'
import LinkedInNegaticeIcon from '../../assets/linkedIn-negative.svg'
import TwitterNegaticeIcon from '../../assets/twitter-negative.svg'



export default function Sobre() {
    return (
        <>
            <section className={styles.sobreContainer}>
                <div className={styles.squadSobreImgLeft}>
                    <Image width={400} src={EfeitoVerdeEsquedo}  alt='Efeito verde'/>
                </div>

                <div className={styles.contentText}>
                    <span className={styles.textPrincipal}>Estamos na vanguarda da <span className={styles.textGreen}> revolução tech</span>, com grandes mentes do mercado de tecnologia e um <span className={styles.textGreen}>desejo insaciável por transformação.</span></span>
                </div>
                
                <div className={styles.iconScroll}>
                    <ArrowCircleDown size={24} />
                    <span>Saber mais</span>
                </div>

                <div className={styles.squadSobreImgRight}>
                    <Image src={EfeitoVerdeDireito}  alt='Efeito verde'/>
                </div>
            </section>

            <section className={styles.empresasParceiras} >
                <div className={styles.contentText} >
                    <span>Empresas que confiam na Squad Premium</span>
                </div>

                <div className={styles.empresas}>
                    <div className={styles.sobreRow}>
                        <Image src={SamsungLogo} alt=''/>
                        <Image src={GoogleLogo} alt=''/>
                        <Image src={AmazonLogo} alt=''/>
                        <Image src={WindowsLogo} alt=''/>
                    </div>

                    <div className={styles.sobreRow}>
                        <Image src={GenialLogo} alt=''/>
                        <Image src={SafraLogo} alt=''/>
                        <Image src={SantanderLogo} alt=''/>
                        <Image src={MagaluLogo} alt=''/>
                    </div>

                    <div className={styles.sobreRow}>
                        <Image src={B3Logo} alt=''/>
                        <Image src={MercadoLivreLogo} alt=''/>
                        <Image src={NuLogo} alt=''/>
                        <Image src={CrefisaLogo} alt=''/>
                    </div>

                    <div className={styles.sobreRow}>
                        <Image src={XPLogo} alt=''/>
                        <Image src={AmericanasLogo} alt=''/>
                    </div>
                </div>
            </section>

            <section className={styles.tempoNoMercadoContainer} >

                <div className={styles.row}>
                    <div className={styles.nossaHistoria}>
                        <span>Nossa história</span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.textPrincipal}>
                        <span>Completamos uma década no mercado com grandes conquistas e vários aprendizados.</span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Ao longo de vários anos, nossos líderes enfrentaram diversas transformações no mercado de tecnologia e antes da existência da empresa, acompanharam cada grande movimento de transformação global com pessoas e tecnologias. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Toda a experiência acumulada nos ajuda a guiar o planejamento, visão e ações da empresa, mas não é só isso: todos os líderes e colaboradores têm o compromisso de gerar impacto dentro e fora da Squad Premium. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Nossa cultura tem em seu núcleo o que chamamos de “Jeito Premium de ser”, que definimos como a mentalidade constante de servir bem, com excelência, sendo impecável em cada ação. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Em 2013, demos nosso “Hello World”, começando as atividades sob outro nome e marca, focando em criar a melhor consultoria do universo, que seria (e hoje é) motivo de orgulho para nós e todos os parceiros que estão conosco nessa caminhada. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Mudamos de nome, expandimos nossas frentes de serviço, modernizamos nossa estrutura e crescemos muito, nosso escritório pequeno logo foi trocado por um maior e depois por outro, até nos instalarmos em uma das avenidas mais famosas do Brasil: A querida Paulista. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>A cada ano, nossas metas e ambições crescem e se concretizam. Estamos sempre planejando o próximo passo, concentrados em crescer e levar para todas as melhores empresas, uma estrutura revolucionária de serviços, para que elas possam desfrutar do que há de melhor em tech.</span>
                    </div>
                </div>

            </section>

            <section className={styles.filosofiaPremiumContainer} >

                <div className={styles.row}>
                    <div className={styles.textPrincipal}>
                        <span>A filosofia Premium</span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Nossa cultura tem em seu núcleo o que chamamos de “Jeito Premium de ser”, que definimos como a mentalidade constante de servir bem, com excelência, sendo impecável em cada ação. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Excelência para nós, é um estilo de vida. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>A visão e as práticas da nossa cultura refletem autocuidado, inteligência, desenvolvimento pessoal e profissional constantes, para que os que são incrivelmente competentes, sejam ainda melhores dia após dia. </span>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.contentText}>
                        <span>Estamos criando um novo nível a ser atingido pelo mercado, um novo padrão.</span>
                    </div>
                </div>

            </section>


            <section className={styles.midiaSociaisContainer} >

                <div className={styles.textHeader}>
                    <span>Saiba mais nas nossas mídias:</span>
                    <div className={styles.textLineHeader}></div>
                </div>

                <div className={styles.rowIcons}>
                    <Image src={FacebookNegaticeIcon} alt=''/>
                    <Image src={TwitterNegaticeIcon} alt=''/>
                    <Image src={InstagramNegaticeIcon} alt=''/>
                    <Image src={LinkedInNegaticeIcon} alt=''/>
                    <Image src={YoutubeNegaticeIcon} alt=''/>
                </div>

            </section>
        </>
    )
}
