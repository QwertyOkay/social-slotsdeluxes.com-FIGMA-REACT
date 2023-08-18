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
            <h3>Introduction</h3>
            <p>
              SlotDeluxes values your personal information's privacy and
              security. This Privacy Policy describes our practices and policies
              for collecting, storing, and using your personal information in
              connection with your use of our website, which can be found at
              slotdeluxes.com. You agree to be bound by this Privacy Policy by
              accessing or using our website.
            </p>
            <h3>The Data We Gather</h3>
            <p>
              Contact Form: We ask for your name and email address when you fill
              out the "Contact Us" form. We collect and process this information
              in order to provide you with the requested assistance and
              information, as well as to keep accurate records of our
              interactions with you. This information may also be used to
              initiate a contract with you and to improve our website and user
              experience, which we believe is a legitimate business interest.
            </p>
            <p>
              Google Analytics: We may use Google Analytics to collect
              non-personalized information. This information is used to
              understand and improve the performance of our website and cannot
              be used to identify you. Our cookies policy contains more
              information about the collection and use of this information.
            </p>
            <h3>Information Utilization</h3>
            <p>
              The information gathered in Section 2.1 is used and processed to:
              Contact you about our products and services, as well as industry
              events where you can meet us. By analyzing your website activity,
              we can personalize, measure, and improve our marketing efforts.
              SlotDeluxes is dedicated to protecting your personal information
              and will not share, rent, or sell it to third parties unless
              required by law or to fulfill a contractual obligation.
            </p>
            <h3>Disclosure and Sharing</h3>
            <p>
              We take your personal data security seriously and only share it in
              the circumstances described below.
            </p>
            <h3>Defense of Our Rights</h3>
            <p>
              If and to the extent required or permitted by law, or if such
              disclosure is reasonably necessary, we may disclose your personal
              information to courts, law enforcement, governmental authorities,
              or authorized third parties. This is required for our legitimate
              interests, such as protecting and asserting our legal rights and
              protecting our business from risks.
            </p>
            <h3>Subject Rights to Data</h3>
            <p>
              You have a number of rights in relation to your personal data
              under the General Data Protection Regulation. Some of your data
              can be accessed, corrected, ported, and deleted. You also have the
              right to object to and limit certain data processing. The exercise
              of these rights will be determined by factors such as the nature
              of the data, the purpose for which it is processed, and legal or
              operational retention requirements.
            </p>
            <p>
              Please send an email to helpdesk@slotdeluxes.com to request any of
              the aforementioned rights. Please keep in mind that we may need to
              confirm your identity before proceeding with your request.
            </p>
            <p>
              While we will do our best to accommodate your request, please keep
              in mind that your rights are not absolute, and we may have to
              refuse or partially comply with it.
            </p>
            <h3>Your Legal Rights</h3>
            <h4>Correction of Incorrect or Incomplete Information</h4>
            <p>
              You have the right to request that any inaccurate or incomplete
              personal information we have on file for you be corrected.
            </p>
            <h4>Data Portability and Access</h4>
            <p>
              You have the right to request access to your personal data and a
              copy of your personal data in a structured, commonly used, and
              machine-readable format. You can also ask us to send this
              information to another data controller if it is technically
              possible.
            </p>
            <h4>Data Retention and Erasure</h4>
            <p>
              We will retain your personal information for as long as is
              necessary to fulfill the purposes for which it was collected and
              to comply with our legal obligations. We will securely delete or
              anonymize your personal data once it is no longer necessary for us
              to process it.
            </p>
            <h3>Get in Touch</h3>
            <p>
              Please contact our data protection officer at
              helpdesk@slotdeluxes.com if you have any questions or concerns
              about our privacy practices or your rights under applicable data
              protection laws. You can also find the contact information for the
              data controllers via our website's "Contact Us" form.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default PrivacyModal;
