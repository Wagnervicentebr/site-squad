import React from 'react'
import style from './page.module.css'
import Logo from '../../assets/logo-footer-squad.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <div id={style.fullFooter}>
        <div>
            <div>
                <Image 
                className={style.logo}
                src={Logo}
                alt="SquadPremium" />
            </div>
            <hr id={style.hr}></hr>
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
                        <input placeholder="Digite o seu e-mail"></input>
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
                            <div id={style.socialicons}>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className={style.copyright}>
                <p>Copyright 2023 Squad Premium - Todos os Direitos Reservados</p>
            </div>
        </div>);
}

export default Footer