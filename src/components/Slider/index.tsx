import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import Slide1 from '../../assets/slider1.svg'
import Slide2 from '../../assets/slider2.svg'
import Slide3 from '../../assets/slider3.svg'
import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';



const SliderComponent = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.SliderRow}>
        <Link href={{
              pathname: '/blogContent',
              query: { id: 1 },
            }}>
          <div className={styles.slider}>
              <Image src={Slide1} alt=''/>
              <div className={styles.contentText}>
                  <span>Quais aas novas funcionalidades do google analytics 4?</span>
              </div>
          </div>
        </Link>
       
        <Link href={{
              pathname: '/blogContent',
              query: { id: 1 },
            }}>
          <div className={styles.slider}>
              <Image src={Slide2} alt=''/>
              <div className={styles.contentText}>
                  <span>Quais as novas funcionalidades do google analytics 4?</span>
              </div>
          </div>
        </Link>

        <Link href={{
              pathname: '/blogContent',
              query: { id: 1 },
            }}>
          <div className={styles.slider}>
              <Image src={Slide3} alt=''/>
              <div className={styles.contentText}>
                  <span>Quais as novas funcionalidades do google analytics 4?</span>
              </div>
          </div>
        </Link>
      </div>
      <div className={styles.SliderRow}>
        <div className={styles.sliderCount}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <div className={styles.proximo}>...</div>
            <button>
                Próxima
                <ArrowRight size={24} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default SliderComponent
