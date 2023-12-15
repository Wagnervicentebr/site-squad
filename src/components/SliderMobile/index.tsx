import React, { useState } from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import Slide1 from '../../assets/slider1.svg'
import Slide2 from '../../assets/slider2.svg'
import Slide3 from '../../assets/slider3.svg'
import { ArrowRight } from 'phosphor-react';



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
      <div className={styles.SliderRow}>
        <div className={styles.slider}>
            <Image src={slideSelected} alt=''/>
            <div className={styles.contentText}>
                <span>{slideContent}</span>
            </div>
        </div>

        {/* <div className={styles.slider}>
            <Image src={Slide2} alt=''/>
            <div className={styles.contentText}>
                <span>Quais as novas funcionalidades do google analytics 4?</span>
            </div>
        </div>

        <div className={styles.slider}>
            <Image src={Slide3} alt=''/>
            <div className={styles.contentText}>
                <span>Quais as novas funcionalidades do google analytics 4?</span>
            </div>
        </div> */}
      </div>
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
