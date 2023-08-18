import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './AgeModal.module.scss';

function AgeModal({ showAgeModal }) {
  return (
    <Modal variant="ageModal" closeModal={() => showAgeModal(true)}>
      <div className={styles.text}>
        <p>
          Welcome to our world! Your happiness is our priority, and we're
          excited to have you here. We're all about ensuring you have a great
          time. Just to be clear, our website is all about fun social games for
          leisure. We're strictly against any real money bets or gambling. Our
          content is meant for those who are 18 years or older.
        </p>
        <p>
          Want to know more about the awesome things we have in store for you?
        </p>
      </div>
      <div className={styles.buttons}>
        <Button title={'YES'} onClick={() => showAgeModal(false)}></Button>
        <Button
          variant="btnNo"
          title={'NO'}
          onClick={() => showAgeModal(true)}
        ></Button>
      </div>
    </Modal>
  );
}

export default AgeModal;
