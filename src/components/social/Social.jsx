import { RiVimeoLine, RiInstagramLine } from 'react-icons/ri';
import { FiFacebook, FiYoutube } from 'react-icons/fi';

import styles from './Social.module.scss';

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a
          href="https://www.youtube.com/"
          aria-label="youtube"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <FiYoutube />
        </a>
      </li>
      <li>
        <a
          href="https://www.vimeo.com"
          aria-label="vimeo"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <RiVimeoLine />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com"
          aria-label="facebook"
          target="_blank"
          rel="noreferrer"
          className={styles.socialLink}
        >
          <FiFacebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          aria-label="instagram"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <RiInstagramLine />
        </a>
      </li>
    </ul>
  );
}

export default Social;
