import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './AgeModal.module.scss';

function AgeModal({ showAgeModal }) {
  return (
    <Modal variant="ageModal" closeModal={() => showAgeModal(true)}>
      <div className={styles.text}>
        <p>
          Please keep in mind that our website is solely dedicated to providing
          enjoyable social games for recreational purposes. We strictly prohibit
          any form of real-money gambling or betting. Our content is intended
          for people over the age of 18.
        </p>
        <p>Do you want to learn more about our extensive range of services?</p>
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
