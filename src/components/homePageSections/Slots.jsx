import Section from 'components/section/Section';
import Container from 'components/container/Container';
import secondImage from 'images/second.png';
import secondImageMobile from 'images/secondMobile.png';
import styles from './homePageSections.module.scss';

function Second() {
  return (
    <Section variant="second" id="slots">
      <Container variant="containerMainSecond" className={styles.BG}>
        <div className={styles.textWrapSecond}>
          <h1 className={styles.title}>Our slots</h1>
          <p className={styles.text}>
            Drench yourself in an unparalleled gaming journey that harmonizes
            state-of-the-art visuals, immersive audio landscapes, and effortless
            gameplay. Our slot games transcend mere entertainment – they
            constitute a melodic fusion of visuals and sounds that will
            transport you to a realm of complete enchantment.
          </p>
        </div>
        <div className={styles.imgWrapSecond}>
          <picture>
            <source
              srcSet={secondImage}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={secondImageMobile}
              type="image/png"
              media="(max-width: 1279px)"
            />
            <img src={secondImage} alt="The Game" />
          </picture>
        </div>
      </Container>
    </Section>
  );
}

export default Second;
