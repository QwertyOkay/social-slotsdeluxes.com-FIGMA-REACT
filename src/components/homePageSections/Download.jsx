import Section from 'components/section/Section';
import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
// import fourthImage from 'images/fourth.png';
// import fourthMobile from 'images/fourthMobile.png';
import styles from './homePageSections.module.scss';

function Fourth() {
  return (
    <Section variant="second" id="download">
      <Container variant="containerMainFourth">
        <div className={styles.btnFourth}>
          <GoogleButton />
        </div>
      </Container>
    </Section>
  );
}

export default Fourth;
