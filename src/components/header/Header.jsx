import Burger from 'components/buttonMob/buttonMob';
import Container from 'components/container/Container';
import styles from './Header.module.scss';

function Header() {
  return (
    <>
      <Burger />
      <header className={styles.header}>
        <Container>
          <nav className={styles.navBlock}>
            <a href="#welcome" className={styles.link}>
              Welcome
            </a>
            <a href="#slots" className={styles.link}>
              Our Slots
            </a>
            <a href="#download" className={styles.link}>
              Download
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.games.lightningslots"
              className={styles.linkPlay}
              target="blank"
            >
              PLAY NOW
            </a>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
