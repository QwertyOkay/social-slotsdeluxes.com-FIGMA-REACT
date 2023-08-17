import Button from 'components/button/Button';
import styles from './CookiesModal.module.scss';

const Cookies = ({ showCookies }) => {
  return (
    <>
      <div className={styles.cookieBar}>
        <p className={styles.cookieText}>
          We use cookies to better understand your preferences and provide a
          better experience.
        </p>
        <Button title={'OK'} onClick={() => showCookies()} />
      </div>
    </>
  );
};

export default Cookies;
