import Section from 'components/section/Section';
import Container from 'components/container/Container';
import thirdImage from 'images/third.png';
import thirdImageMobile from 'images/thirdMobile.png';
// import thirdImageMobile1 from 'images/thirdMobile1.png';
import styles from './homePageSections.module.scss';
import GoogleButton from 'components/googleButton/GoogleButton';

function Third() {
  return (
    <Section variant="third" id="download">
      <Container variant="containerMain">
        <div className={styles.textWrapThird}>
          <h1 className={styles.title}>Download slots</h1>
          <p className={styles.text2}>
            Irrespective of your skill level, our application adapts seamlessly
            to your needs. Through our mobile app, you can maintain your link to
            the market. Whether you're an experienced participant or a newcomer
            to the realm of slot games, you'll discover the ideal game that
            aligns with your proficiency and sustains your involvement for
            extended periods.
          </p>
          <GoogleButton />
        </div>
        {/* <div className={styles.btn}>
          <GoogleButton />
        </div> */}
        <div className={styles.imgWrapThird}>
          <picture>
            <source
              srcSet={thirdImage}
              type="image/png"
              media="(min-width: 1280px)"
            />
            <source
              srcSet={thirdImageMobile}
              type="image/png"
              media="(max-width: 1279px)"
            />
            <img className={styles.imgThird} src={thirdImage} alt="The Game" />
          </picture>
        </div>
      </Container>
    </Section>
  );
}

export default Third;
