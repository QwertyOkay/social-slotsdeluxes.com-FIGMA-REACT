import React, { useState } from 'react';
import Img18Plus from '../../images/18-plus.png';
import Social from 'components/social';

import Container from 'components/container/Container';
import GoogleButton from 'components/googleButton/GoogleButton';
import TermsModal from 'components/footerModals/TermsModal';
import PrivacyModal from 'components/footerModals/PrivacyModal';
import Contact from 'components/footerModals/ContactUs';
import styles from './Footer.module.scss';

function Footer() {
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);

  return (
    <>
      <footer className={styles.footer} id="footer">
        <Container>
          <div className={styles.btn}>
            <GoogleButton />
          </div>
          <div>
            <img src={Img18Plus} alt="18+" className={styles.plus18} />
          </div>

          <div className={styles.disclaimer}>
            <p className={styles.footerP}>
              Disclaimer: the site is designed to provide free social games to
              people aged 18 and up. We place a high value on responsible
              gambling. Please be aware that our games are only for fun and do
              not include any actual prizes or monetary rewards. It is critical
              to note that success in free social casino games does not imply
              success in "real money gambling."
            </p>
          </div>

          <div>
            <ul className={styles.footerLinks}>
              <li className={styles.link}>
                <button type="button" onClick={() => setIsOpenTerms(true)}>
                  Terms & Conditions
                </button>
              </li>
              <li className={styles.link}>
                <button type="button" onClick={() => setIsOpenPrivacy(true)}>
                  Privacy Policy
                </button>
              </li>
              <li className={styles.link}>
                <button type="button" onClick={() => setIsOpenContact(true)}>
                  Contacts Us
                </button>
              </li>
            </ul>
          </div>
          <div>
            <Social />
          </div>
          <div className={styles.footerFont}>
            <small>
              Slotsdeluxes.com &copy; 2022-2023 <br></br>All rights reserved{' '}
            </small>
          </div>
        </Container>
      </footer>
      {isOpenTerms && <TermsModal showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <PrivacyModal showPrivacy={setIsOpenPrivacy} />}
      {isOpenContact && <Contact showContact={setIsOpenContact} />}
    </>
  );
}

export default Footer;
