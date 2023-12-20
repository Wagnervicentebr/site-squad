import React, { useState } from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import Slide1 from '../../assets/slider1.svg'
import Slide2 from '../../assets/slider2.svg'
import Slide3 from '../../assets/slider3.svg'
import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';



const SliderMobileComponent = () => {

  const [slideSelected, setSlideSelected] = useState(Slide1);
  const [slideContent, setSlideContent] = useState('Quais as novas funcionalidades do google analytics 4?');

  const handdleChangeContent = (slide: Number) => {
    switch (slide) {
      case 1:
        setSlideSelected(Slide1);
        setSlideContent('Quais as novas funcionalidades do google analytics 4?')
        break;
      case 2:
        setSlideSelected(Slide2);
        setSlideContent('Como o blockchain impactará o mercado financeiro em 2024?')
        break;
      case 3:
        setSlideSelected(Slide3);
        setSlideContent('5G e 6G: indústrias de telecom se preparam para produção.')
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.sliderContainer}>
      <Link href={{
              pathname: '/blogContent',
              query: { id: 1 },
            }}>
        <div className={styles.SliderRow}>
          <div className={styles.slider}>
              <Image src={slideSelected} alt=''/>
              <div className={styles.contentText}>
                  <span>{slideContent}</span>
              </div>
          </div>
        </div>
      </Link>
      <div className={styles.SliderRow}>
        <div className={styles.sliderCount}>
            <button onClick={() => handdleChangeContent(1)}>1</button>
            <button onClick={() => handdleChangeContent(2)}>2</button>
            <button onClick={() => handdleChangeContent(3)}>3</button>
            <button onClick={() => handdleChangeContent(4)}>4</button>
            <button >
                Proximo
                <ArrowRight size={24} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default SliderMobileComponent
