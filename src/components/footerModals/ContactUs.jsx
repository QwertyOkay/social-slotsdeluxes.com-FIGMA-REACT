import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose';
import ContactForm from 'components/contactForm/ContactForm';

function Contact({ showContact }) {
  return (
    <>
      {showContact && (
        <Modal variant="contactModal" closeModal={showContact}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showContact(false)}
          />
          <ContactForm title={'Contact us'} />
        </Modal>
      )}
    </>
  );
}

export default Contact;
