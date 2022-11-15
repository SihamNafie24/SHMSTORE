import React from 'react';
import styles from './slide.module.css';
import arrowRight from '../img/icons/right-arrow-icon.svg';
import arrowLeft from '../img/icons/left-arrow-icon.svg';

function Slide({ slides }) {
  const [slideAtivo, setSlideAtivo] = React.useState(0);
  const [posicao, setPosicao] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosicao(-(width * slideAtivo));
  }, [slideAtivo]);

  function slideNext() {
    if (slideAtivo < slides.length - 1) {
      setSlideAtivo(slideAtivo + 1);
    } else {
      setSlideAtivo(0)
    }
  }

  function slidePrev() {
    if (slideAtivo > 0) {
      setSlideAtivo(slideAtivo - 1);
    }
  }

  function goToSlide(index) {
    setSlideAtivo(index);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (slideAtivo < slides.length - 1) {
        setSlideAtivo(slideAtivo + 1);
      } else if (slideAtivo > 0) {
        setSlideAtivo(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [slideAtivo]);

  return (
    <section className={`${styles.wrapper} comeFromBottom`}>
      <div className={styles.container}>
        <div
          className={styles.content}
          ref={contentRef}
          style={{ transform: `translateX(${posicao}px)` }}
        >
          {slides.map((slide) => (
            <div
              className={styles.item}
              key={slide.id}
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
          ))}
        </div>
        <div className={styles.dotsContainer}>
          {slides.map((slide, index) => (
            <button
              style={{backgroundColor: index === slideAtivo ? '#F4F4F4' : '#E0E0E080'}}
              className={styles.dots}
              key={index + 1}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <nav className={styles.nav}>
        <button className={styles.prevButton} onClick={slidePrev}>
          <img src={arrowLeft} alt="" />
        </button>
        <button className={styles.nextButton} onClick={slideNext}>
          <img src={arrowRight} alt="" />
        </button>
      </nav>
    </section>
  );
}

export default Slide;
