"use client";
import styles from './pages.module.css'
import Image from 'next/image'
import EstrelaHome from '../assets/estrela-home.svg'
import ScrollIcon from '../assets/mouse-home.svg'
import instaIconHome from '../assets/instagram-icon-home.svg'
import faceIconHome from '../assets/facebook-icon-home.svg'
import linkedinIconHome from '../assets/linkedin-icon-home.svg'
import SobreLogoSquad from '../assets/sobre-squad-logo.png'
import SamsungLogo from '../assets/samsung-logo.svg'
import GoogleLogo from '../assets/google-logo.svg'
import WindowsLogo from '../assets/windows-logo.svg'
import AmazonLogo from '../assets/logo-amazon.svg'
import SonyLogo from '../assets/sony-logo.svg'
import EfeitoVerdeEsquedo from '../assets/efeito-bola-verde-esquerda.svg'
import EfeitoVerdeDireito from '../assets/efeito-bola-verde-direita.svg'
import ImagemDesktopSquad from '../assets/capa-como-contratar.svg'
import SliderComponent from '@/components/Slider';
import { ArrowRight } from 'phosphor-react';

export default function Home() {
  return (
    <>

      {/*====================HOME============================= */}
        <section className={styles.homeContainer}>

          <div className={styles.socialMedia}>
            <div className={styles.lineSocialMedia}></div>

           <div className={styles.socialMediaGroup}>
              <Image src={instaIconHome} alt='intagram'/>
              <Image src={faceIconHome} alt='facebook'/>
              <Image src={linkedinIconHome} alt='linkedin'/>
           </div>

           <div className={styles.lineSocialMedia}></div>

          </div>

          <div className={styles.textContainer}>
            <div className={styles.iconStar}>
              <Image src={EstrelaHome} alt='estrela Home'/>
            </div>
            <div className={styles.conentText}>
              <span>Pessoas, Tecnologia e Disrupção:</span>
              <span className={styles.conentTextGreen}>Resultados fora da curva.</span>
            </div>

            <div className={styles.subContentText}>
              <span>Toda a evolução do mercado, condensada em líderes e talentos fora da curva. Estamos criando uma divisão entre o mercado comum e o que é PREMIUM.</span>
            </div>

            <div className={styles.btnHome}>
              <button className={styles.btnHomeGreen}>Serviços</button>
              <button className={styles.btnHomeTransparent}>Saiba mais</button>
            </div>

            <div className={styles.scrollIcon}>
              <Image src={ScrollIcon} alt='estrela Home'/>
              <span>Role para baixo</span>
            </div>
          </div>
        </section>

        {/*====================Serviços============================= */}
        <section className={styles.servicosContainer}>
          <div className={styles.textHeader}>
            <span>Serviços</span>
            <div className={styles.textLineHeader}></div>
          </div>

          <div className={styles.contentServico}>
            <div className={styles.contentDescription}>
              <span>Alocação remota, onsite, desenvolvimento de projetos e muito mais.</span>
            </div>
          
            <div className={styles.btnService}>
              <button className={styles.btnServiceTranspatent}>NOSSOS SERVIÇOS</button>
              <button className={styles.btnServiceGreenGrandient}>ENTRAR EM CONTATO</button>
            </div>
          </div>
        </section>


        {/*====================Sobre Squad============================= */}
        <section className={styles.sobreSquadContainer}>
          <div className={styles.sobreContentText}>
            <div>
              <div className={styles.contentPrincipal}>
                <span>Acreditamos que a <span className={styles.textResultados}>os resultados</span> falam mais alto que tudo.</span>
              </div>
              <div className={styles.subContent}>
                <span>Nossos clientes confiam em nós para promover a transformação necessária dentro e fora dos seus territórios. Nossa missão é sempre conectar o que há de melhor em tecnologia com os objetivos das empresas que apoiamos.</span>
              </div>
            </div>
            <div>
              <Image src={SobreLogoSquad} alt='Logo Squad'/>
            </div>
          </div>

          <div className={styles.clientRow}>
              <Image src={SamsungLogo} alt='Logo Samsung'/>
              <Image src={GoogleLogo} alt='Logo Google'/>
              <Image src={AmazonLogo} alt='Logo Amazon'/>
              <Image src={WindowsLogo} alt='Logo Windows'/>
              <Image src={SonyLogo} alt='Logo Sony'/>
          </div>

          <div className={styles.squadNumber}>
            <div className={styles.squadNumberImgLeft}>
              <Image src={EfeitoVerdeEsquedo}  alt='Efeito verde'/>
            </div>

            <div className={styles.metrics}>
              <div>
              </div>

              <div  className={styles.metricsRow}>
                <div className={styles.contentInfos}>
                  <div className={styles.textHeaderInfos}>
                    <p>squad em números</p>
                  </div>
                  <div className={styles.textContentInfos}>
                    <span className={styles.textPrincipalInfos}>1500+</span>
                    <span>Carreiras</span>
                    <span>Transformadas</span>
                  </div>
                </div>

                <div className={styles.metricsLine}></div>

                <div className={styles.contentInfos}>
                  <div className={styles.textContentInfos}>
                    <span className={styles.textPrincipalInfos}>3,3%</span>
                    <span>Turnover</span>
                  </div>
                </div>

                <div className={styles.metricsLine}></div>

                <div className={styles.contentInfos}>
                  <div className={styles.textContentInfos}>
                    <span className={styles.textPrincipalInfos}>70+</span>
                    <span>Clientes</span>
                    <span>Satifeitos</span>
                  </div>
                </div>
              </div>

              <div className={styles.metricsRow}>
                <div className={styles.contentInfos}>
                  <div className={styles.textContentInfos}>
                    <span className={styles.textPrincipalInfos}>98%</span>
                    <span>Aprovação dos</span>
                    <span>clientes</span>
                  </div>
                </div>

                <div className={styles.metricsLine}></div>

                <div className={styles.contentInfos}>
                  <div className={styles.textContentInfos}>
                    <span className={styles.textPrincipalInfos}>10+</span>
                    <span>Anos de</span>
                    <span>mercado</span>
                  </div>
                </div>

                <div className={styles.metricsLine}></div>

                <div className={styles.contentInfos}>
                  <div className={styles.textContentInfos}>
                    <span className={styles.textPrincipalInfos}>250+</span>
                    <span>Projetos e</span>
                    <span>Missões tech</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.squadNumberImgRight}>
              <Image src={EfeitoVerdeDireito}  alt='Efeito verde'/>
            </div>
          </div>
        </section>


        {/*====================Sobre Squad============================= */}

        <section className={styles.comoContratarContainer}>
          <div className={styles.comoContratarContent}>
            <div className={styles.imagemDesktop}>
              <Image src={ImagemDesktopSquad} alt='Imagem desktop' />
            </div>
            <div className={styles.contentText}>
              <div className={styles.contentTextHeader}>
                <span>O que fazemos</span>
              </div>
              <div className={styles.contentTextSubtitle}>
                <span>Da primeira linha de código ao projeto mais complexo já imaginado: Cobrimos missões tecnológicas com eficiência e personalização incomparáveis.</span>
              </div>
            </div>
          </div>
          <div className={styles.saibaComoContratar}>
            <span>Saiba como contratar</span>
            <div className={styles.saibaComoContratarLine}></div>
          </div>
        </section>

        {/*====================Blog============================= */}

        <section className={styles.blogContainer}>
          <div className={styles.blogRow}>
            <div className={styles.blogTitle}>
              <span>Blog</span>
            </div>
            <div className={styles.blogSubTitle}>
              <span>Acessar todas matérias</span>
              <ArrowRight size={24} />
            </div>
          </div>
          
          <div className={styles.sliderContainer}>
            <SliderComponent />
          </div>
        </section>

    </>
  )
}
