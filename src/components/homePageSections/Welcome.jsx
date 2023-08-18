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
            Explore our thoughtfully chosen collection of amazing slot games,
            designed to give you a thrilling and exciting experience. Each game
            is like a piece of art, created to captivate your senses and keep
            you eagerly anticipating every moment.
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
