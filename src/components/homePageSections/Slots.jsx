import Section from 'components/section/Section';
import Container from 'components/container/Container';
import secondImage from 'images/second.png';
// import secondImageMobile from 'images/secondMobile.png';
import styles from './homePageSections.module.scss';

function Second() {
  return (
    <Section variant="second" id="slots">
      <Container variant="containerMainSecond" className={styles.BG}>
        <div className={styles.textWrapSecond}>
          <h1 className={styles.title3}>Our slots</h1>
          <p className={styles.text4}>
            Experience an extraordinary gaming journey where cutting-edge
            visuals, captivating audio, and easy gameplay come together. Our
            slot games offer more than just entertainment – they combine visuals
            and sounds to transport you to a realm of enchantment.
          </p>
        </div>
        <div className={styles.imgWrapSecond}>
          <picture>
            <source
              srcSet={secondImage}
              type="image/png"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={secondImage}
              type="image/png"
              media="(max-width: 1200px)"
            />
            <img src={secondImage} alt="The Game" />
          </picture>
        </div>
      </Container>
    </Section>
  );
}

export default Second;
