import Section from 'components/section/Section';
import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import firstImage from 'images/first.png';
import styles from './homePageSections.module.scss';

function Welcome() {
  return (
    <Section id="welcome" className={styles.SectionBg}>
      <Container variant="containerMain">
        <div className={styles.textWrap}>
          <h1 className={styles.title}>Welcome</h1>
          <p className={styles.text}>
            Plunge into our carefully crafted assortment of the most exquisite
            slot games, thoughtfully selected to provide exhilarating excitement
            and an adrenaline-pumping experience. Every game is a work of art on
            its own, intricately crafted to engage your senses and hold you
            spellbound with anticipation.
          </p>
          <div className={styles.btn}>
            <GoogleButton />
          </div>
        </div>

        <div className={styles.imgWrap}>
          <img src={firstImage} alt="Game1" />
        </div>
      </Container>
    </Section>
  );
}

export default Welcome;
