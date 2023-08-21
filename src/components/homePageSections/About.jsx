import Section from 'components/section/Section';
import Container from 'components/container/Container';
import thirdImage from 'images/third.png';
import thirdImageMobile from 'images/thirdMobile.png';
import fourthImage from 'images/fourth.png';
// import thirdImageMobile1 from 'images/thirdMobile1.png';
import styles from './homePageSections.module.scss';
import GoogleButton from 'components/googleButton/GoogleButton';

function Third() {
  return (
    <Section variant="third" id="download">
      <Container variant="containerMainThird">
        <div className={styles.textWrapThird}>
          <h1 className={styles.title2}>Download slots</h1>
          <p className={styles.text3}>
            Our application works well for everyone, regardless of your skill
            level. By using our mobile app, you can stay connected to the
            market. Whether you're new to slot games or you've been playing for
            a while, you'll discover the right game that suits your expertise
            and keeps you engaged for a long time.
          </p>
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
        <Container variant="containerMainFourth">
          <div className={styles.btnFourth}>
            <img
              className={styles.imgFourth}
              src={fourthImage}
              alt="The Game"
            />
            <p className={styles.downloadP}>What are you waiting for?</p>
            <GoogleButton />
          </div>
        </Container>
      </Container>
    </Section>
  );
}

export default Third;
