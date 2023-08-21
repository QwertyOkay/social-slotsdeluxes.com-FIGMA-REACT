import Section from 'components/section/Section';
import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import firstImage from 'images/first.png';
import firstDesk from 'images/firstDesk.png';
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
          <div className={styles.btn2}>
            <GoogleButton />
          </div>
        </div>

        <div className={styles.imgWrap}>
          <picture>
            <source
              srcSet={firstDesk}
              type="image/png"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={firstImage}
              type="image/png"
              media="(max-width: 1200px)"
            />
            <img src={firstImage} alt="The Game" />
          </picture>
        </div>
      </Container>
    </Section>
  );
}

export default Welcome;
