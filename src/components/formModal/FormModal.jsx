import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Modal from 'components/modal';
import GameModal from 'components/gameModal/GameModal';
import TermsModal from 'components/terms&PrivacyModal/TermsModal';
import PrivacyModal from 'components/terms&PrivacyModal/PrivacyModal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import Button from 'components/button/Button';
import styles from './FormModal.module.scss';
import modalImage from 'images/formImg.jpg';
import modalImageMobile from 'images/formImg_mobile.png';

function FormModal({ setIsOpen }) {
  const [isOpenGame, setIsOpenGame] = useState(false);
  const [isOpenTerms, setIsOpenTerms] = useState(false);
  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('This field is required'),
  });

  const handleSubmit = values => {
    if (values) {
      setIsOpenGame(true);
      return;
    }
  };

  return (
    <>
      {setIsOpen && (
        <Modal variant="formModal" closeModal={setIsOpen}>
          {/* <div className={styles.circle}></div> */}
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => setIsOpen(false)}
          />

          <div className={styles.featured}>
            <picture>
              <source
                srcSet={modalImage}
                type="image/jpeg"
                media="(min-width: 1280px)"
              />
              <source
                srcSet={modalImageMobile}
                type="image/jpeg"
                media="(max-width: 1279px)"
              />
              <img
                src={modalImage}
                alt="Lord Merlin and the Lady of the Lake"
                className={styles.modalImg}
                width="300"
              />
            </picture>
          </div>

          <div className={styles.content}>
            <Formik
              initialValues={{
                email: '',
                acceptTerms: false,
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (
                <Form className={styles.form}>
                  <label className={styles.formGroup}>
                    <Field
                      required
                      type="email"
                      name="email"
                      className={styles.formInput}
                      placeholder="Enter your email"
                      pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                    />
                    {errors.email && touched.email && (
                      <div className={styles.errorMsg}>try again</div>
                    )}
                  </label>
                  <label className={styles.checkboxLabel}>
                    <Field
                      className={styles.checkboxInput}
                      required
                      name="acceptTerms"
                      type="checkbox"
                    />
                    <span className={styles.checkboxText}>
                      I'm 18 years old and I accept the&nbsp;
                      <a
                        href="#"
                        className={styles.link}
                        onClick={() => setIsOpenTerms(true)}
                      >
                        Terms&Conditions&nbsp;
                      </a>
                      and&nbsp;
                      <a
                        href="#"
                        className={styles.link}
                        onClick={() => setIsOpenPrivacy(true)}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  <Button variant="btnForm" type={'submit'} title={'Submit'} />
                </Form>
              )}
            </Formik>
          </div>
        </Modal>
      )}
      {isOpenGame && <GameModal showGame={setIsOpen} />}
      {isOpenTerms && <TermsModal showTerms={setIsOpenTerms} />}
      {isOpenPrivacy && <PrivacyModal showPrivacy={setIsOpenPrivacy} />}
    </>
  );
}

export default FormModal;
