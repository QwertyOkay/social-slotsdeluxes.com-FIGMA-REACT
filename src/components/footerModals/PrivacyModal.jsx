import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function PrivacyModal({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={'close'}
            type={'button'}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={'Privacy Policy'}>
            <p>
              Slotsdeluxes.com is a place where the slots are hot and the
              privacy is cool. We respect your privacy, but we also like to have
              some fun. We collect information about you when you visit our
              website. Don't worry, nothing is too personal. We just want to
              know what device you are using, and what pages you are visiting.
              Yes, cookies are used. Cookies are small text files that assist us
              in remembering who you are and what you enjoy. We assure you that
              they are completely safe. To improve our site, we use third-party
              tools such as Google Analytics and social media plugins. These
              tools may also collect some of your information but don't worry,
              they are safe. We take every precaution to protect your
              information. We use the most up-to-date security measures and only
              share your information with trusted partners. We will not sell
              your information to anyone (not even for a million dollars). When
              it comes to your privacy, you have some options. You can opt out
              of certain types of data collection (such as cookies) and request
              that we delete your information. Send us an email and we'll take
              care of the rest. We are a legitimate company that abides by the
              law. We will not share your information unless required by law or
              if we suspect you of wrongdoing. That's all! We hope you enjoy
              your time at Slotsdeluxes.com, and we promise to keep your
              information as safe as our slots.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;
