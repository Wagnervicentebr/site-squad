"use client";
import React from 'react'
import style from './page.module.css'
import Logo from '../../assets/logo-footer-squad.svg'
import Image from 'next/image';
import LogoSquad from '../../assets/logo-squad-footer.svg'
import { ArrowRight } from 'phosphor-react';
import FaceIcon from '../../assets/facebook-negative.svg'
import TwitterIcon from '../../assets/twitter-negative.svg'
import InstaIcon from '../../assets/instagram-negative.svg'
import LinkedInIcon from '../../assets/linkedIn-negative.svg'
import YoutubeIcon from '../../assets/youTube-negative.svg'
import GitIcon from '../../assets/github-negative.svg'

const Footer = () => {
  return (
    <>
        <div id={style.fullFooterDesktop}>
            <div>
                <div>
                    <Image 
                    className={style.logo}
                    src={Logo}
                    alt="SquadPremium" />
                </div>
                <div className={style.lineFooterContainer}>

                    <div className={style.lineFooter}></div>
                </div>
                <div className={style.grid}>
                    <div className={style.gridpart}>
                        <div className={style.morespace}>
                            <p className={style.title}>Páginas</p>
                            <ul>
                                <li>Início</li>
                                <li>Sobre</li>
                                <li>Serviços</li>
                                <li>Contratar</li>
                                <li>Carreira</li>
                            </ul> 
                        </div>
                    </div>
                    <div className={style.gridpart}>
                        <div className={style.morespace}>
                            <p className={style.title}>Serviços</p>
                            <ul>
                                <li>Alocação na sua empresa</li>
                                <li>Alocação na Squad</li>
                                <li>Desenvolvimento de Projetos</li>
                            </ul>
                        </div>
                        <div className={style.morespace}>
                            <p className={style.title}>Tecnologias</p>
                            <ul>
                                <li>Codificação</li>
                                <li>Banco de dados</li>
                                <li>Infraestrutura</li>
                                <li>Integração</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.gridpart}>
                        <div className={style.morespace}>
                            <p className={style.title}>Conteúdo</p>
                            <ul>
                                <li>Blog</li>
                                <li>Squadverso</li>
                                <li>Imprensa</li>
                            </ul>
                        </div>
                        <div id={style.inputdiv}>
                            <p className={style.title}>Premium News</p>
                            <div  className={style.inputGroup}>
                                <ArrowRight width={24} />
                                <input placeholder='Digite seu e-mail'/>
                            </div>
                        </div>
                    </div>
                    <div className={style.gridpart}>
                        <div >
                            <p className={style.title}>Políticas</p>
                            <ul className={style.textdecoration}>
                                <li>Política de Privacidade</li>
                                <li>Código de Ética e Conduto</li>
                                <li>Segurança</li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.gridpart}>
                        <div id={style.lastcolumn}>
                            <div>
                                <p className={style.title}>Contato</p>
                                <ul className={style.textdecoration}>
                                    <li>Formulário</li>
                                    <li>Tel:(55)1194211-5617</li>
                                    <li>contato@squadpremium.com.br</li>
                                </ul>
                            </div>
                            <div id={style.buttons}>
                                <button>FALE CONOSCO</button>
                                <div className={style.menuGroup}>
                                    <div className={style.midiasIcons}>
                                        <Image src={FaceIcon} alt='' />
                                        <Image src={TwitterIcon} alt='' />
                                        <Image src={InstaIcon} alt='' />
                                    </div>
                                    <div className={style.midiasIcons}>
                                        <Image src={LinkedInIcon} alt='' />
                                        <Image src={YoutubeIcon} alt='' />
                                        <Image src={GitIcon} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className={style.copyright}>
                    <p>Copyright 2023 Squad Premium - Todos os Direitos Reservados</p>
                </div>
            </div>

            <div className={style.fullFooterMobile}>
                <div className={style.logoMobile}>
                    <Image src={LogoSquad} alt='' />
                </div>
                <div className={style.lineFooter}></div>
                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Serviços</span>
                        </div>
                        <div  className={style.optionContent}>
                            <a href='#'>Alocação na sua empresa</a>
                            <a href='#'>Alocação na Squad</a>
                            <a href='#'>Desenvolvimento de Projetos</a>
                        </div>
                    </div>
                </div>

                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Tecnologias</span>
                        </div>
                        <div  className={style.optionContent}>
                            <a href='#'>Banco de dados</a>
                            <a href='#'>Infraestrutura</a>
                            <a href='#'>Integração</a>
                            <a href='#'>Codificação</a>
                        </div>
                    </div>
                </div>

                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Contato</span>
                        </div>
                        <div  className={style.optionContent}>
                            <a href='#'>Formulário</a>
                            <a href='#'>Tel: (55) 11 94211-5617</a>
                            <a href='#'>contato@squadpremium.com.br</a>
                        </div>
                    </div>
                </div>

                <div className={style.btnContainer}>
                    <button className={style.btnGreenTransparent}>FALE CONOSCO</button>
                </div>

                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Páginas</span>
                        </div>
                        <div  className={style.optionContent}>
                            <a href='#'>Ínicio</a>
                            <a href='#'>Sobre</a>
                            <a href='#'>Serviço</a>
                            <a href='#'>Contratar</a>
                            <a href='#'>Contato</a>
                        </div>
                    </div>
                </div>

                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Conteúdo</span>
                        </div>
                        <div  className={style.optionContent}>
                            <a href='#'>Blog</a>
                            <a href='#'>SquadVerso</a>
                            <a href='#'>Imprensa</a>
                        </div>
                    </div>
                </div>

                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Políticas</span>
                        </div>
                        <div  className={style.optionContentPoliticas}>
                            <a href='#'>Política de Privacidade</a>
                            <a href='#'>Código de Ética e Conduta</a>
                            <a href='#'>Segurança</a>
                        </div>
                    </div>
                </div>


                <div className={style.menuGroup}>
                    <div className={style.optionFooter}>
                        <div  className={style.optionTitle}>
                            <span>Premium News</span>
                        </div>
                        <div  className={style.inputGroup}>
                            <ArrowRight width={24} />
                            <input placeholder='Digite seu e-mail'/>
                        </div>
                    </div>
                </div>

                <div className={style.menuGroup}>
                    <div className={style.midiasIcons}>
                       <Image src={FaceIcon} alt='' />
                       <Image src={TwitterIcon} alt='' />
                       <Image src={InstaIcon} alt='' />
                       <Image src={LinkedInIcon} alt='' />
                       <Image src={YoutubeIcon} alt='' />
                       <Image src={GitIcon} alt='' />
                    </div>
                </div>

                <div className={style.copyright}>
                    <span>Copyright 2023 Squad Premium - Todos os Direitos Reservados</span>
                </div>
            </div>
        </>
    );
}

export default Footer