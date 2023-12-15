"use client";

import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import SetaDiagonal from '../../assets/seta-diagonal-servico.svg'
import { ArrowLeft, ArrowRight, ArrowUp } from 'phosphor-react'
import EfeitoVerdeEsquedo from '../../assets/elipse-pequeno-esquerdo-verde.svg'
import EfeitoVerdeDireito from '../../assets/elipse-pequeno-direito-verde.svg'
import iconExclusividade from '../../assets/icon-exclusividade-tecnologia.svg'
import iconEstrategia from '../../assets/icon-extrategia-tecnologia.svg'
import iconPrazos from '../../assets/icon-prazos-tecnologia.svg'
import iconQualidade from '../../assets/icon-qualidade-tecnologia.svg'

import iconAngular from '../../assets/tecnologias/angular.svg'
import iconAws from '../../assets/tecnologias/aws.svg'
import iconAzure from '../../assets/tecnologias/azure.svg'
import iconCC from '../../assets/tecnologias/cc.svg'
import iconCobol from '../../assets/tecnologias/cobol.svg'
import iconFlutter from '../../assets/tecnologias/flutter.svg'
import iconSwift from '../../assets/tecnologias/swift.svg'
import iconJava from '../../assets/tecnologias/java.svg'
import iconJs from '../../assets/tecnologias/javascript.svg'
import iconKotlin from '../../assets/tecnologias/kotlin.svg'
import iconMulesoft from '../../assets/tecnologias/mulesoft1.svg'
import iconPhp from '../../assets/tecnologias/php.svg'
import iconPyton from '../../assets/tecnologias/phyton.svg'
import iconScrum from '../../assets/tecnologias/scrum.svg'

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
          <div className={styles.btnArrowGroupMobile}>
            <button className={styles.btnArrowGreenTransparent}>
              <ArrowLeft size={24}/>
            </button>
            <button className={styles.btnArrowGreen}>
              <ArrowRight size={24}/>
            </button>
          </div>
        </div>

        <div className={styles.btnService}>
          <button className={styles.btnServiceGreenGrandient}>ENTRAR EM CONTATO</button>
        </div>
      </section>

      <section className={styles.topicosContainer}>
        <div className={styles.squadTopicosImgLeft}>
            <Image width={350} src={EfeitoVerdeEsquedo}  alt='Efeito verde'/>
        </div>

        <div className={styles.topicosRow}>
            <div className={styles.topicosText}>
              <span>Codificação</span>
            </div>
            <div className={styles.underLineGreen}>
            </div>
        </div>

        <div className={styles.topicosRow}>
            <div className={styles.topicosText}>
              <span>Banco de Dados</span>
            </div>
            <div className={styles.underLineGreen}>
            </div>
        </div>

        <div className={styles.topicosRow}>
            <div className={styles.topicosText}>
              <span>Infraestrutura</span>
            </div>
            <div className={styles.underLineGreen}>
            </div>
        </div>

        <div className={styles.topicosRow}>
            <div className={styles.topicosText}>
              <span>Integração</span>
            </div>
            <div className={styles.underLineGreen}>
            </div>
        </div>

        <div className={styles.squadTopicosImgRight}>
          <Image src={EfeitoVerdeDireito}  alt='Efeito verde'/>
        </div>
      </section>

      <section className={styles.diferenciaisContainer}>
        <div className={styles.headerGroup}>
          <span>Nossos Diferenciais</span>
          <div className={styles.linePurple}></div>
        </div>

        <div className={styles.cardGroup}>
          <div className={styles.cardTecnologia}>
            <div className={styles.cardImg}>
              <Image src={iconQualidade} alt=''/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <span>Qualidade</span>
              </div>
              <div className={styles.cardText}>
                <span>Tudo aquilo que criamos deve beirar a perfeição, temos primazia por qualidade como algo essencial.</span>
              </div>
            </div>
          </div>

          <div className={styles.cardTecnologia}>
            <div className={styles.cardImg}>
              <Image src={iconExclusividade} alt=''/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <span>Exclusividade</span>
              </div>
              <div className={styles.cardText}>
                <span>Dedicação exclusiva, para que você foque no seu negócio enquanto nós resolvemos tudo.</span>
              </div>
            </div>
          </div>

          <div className={styles.cardTecnologia}>
            <div className={styles.cardImg}>
              <Image src={iconPrazos} alt=''/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <span>Prazos</span>
              </div>
              <div className={styles.cardText}>
                <span>Esse tópico é sagrado. Para nós é básico, como respirar, por isso, todos os prazos são seguidos religiosamente.</span>
              </div>
            </div>
          </div>

          <div className={styles.cardTecnologia}>
            <div className={styles.cardImg}>
              <Image src={iconEstrategia} alt=''/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <span>Estratégia</span>
              </div>
              <div className={styles.cardText}>
                <span>Algo que permeia toda a nossa cultura e todos os pontos da empresa, prezamos por agir com o máximo de inteligência a cada passo dado.</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tecnologiasGroup}>
          <div>
            <span>TECNOLOGIAS</span>
          </div>
          <div className={styles.listaTecnologias}>
            <Image src={iconAngular} alt='' />
            <Image src={iconAws} alt='' />
            <Image src={iconAzure} alt='' />
            <Image src={iconCC} alt='' />
            <Image src={iconCobol} alt='' />
            <Image src={iconFlutter} alt='' />
            <Image src={iconSwift} alt='' />
            <Image src={iconJava} alt='' />
            <Image src={iconJs} alt='' />
            <Image src={iconKotlin} alt='' />
            <Image src={iconMulesoft} alt='' />
            <Image src={iconPhp} alt='' />
            <Image src={iconPyton} alt='' />
            <Image src={iconScrum} alt='' />
          </div>
        </div>
      </section>  
    </>
  )
}

export default Servico
