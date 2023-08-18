import Modal from 'components/modal';
import ButtonClose from 'components/buttonClose/ButtonClose';
import ModalTextWrap from 'components/modalTextWrap/ModalTextWrap';

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal" closeModal={showTerms}>
          <ButtonClose
            aria-label={'close'}
            type={'button'}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title={'Terms & Conditions'}>
            <h3>Terms and Conditions in General</h3>
            <p>
              This User Agreement governs your use of the SlotsDeluxes website,
              which can be found at bestdayslot.com - Registered at
              Namecheap.com
            </p>
            <p>
              1.2. The purpose of this User Agreement is to define the terms of
              interaction between the SlotsDeluxes Website Administrators
              (referred to in this User Agreement as "Website Administrators")
              and the Website Users.
            </p>
            <p>
              1.3. The Website Administrators reserve the right to modify this
              User Agreement at any time by adding, deleting, or changing any of
              its clauses without prior notice to the Users.
            </p>
            <p>
              1.4. The User's use of the Website implies agreement with all of
              the terms of this User Agreement. Furthermore, the User agrees to
              any future changes to this User Agreement.
            </p>
            <p>
              1.5. It is the User's sole responsibility to become acquainted
              with this User Agreement and any future changes that may occur.
            </p>
            <h3>
              2. The Meanings of the Terms and Conditions in this User Agreement
            </h3>
            <p>
              2.1. The following keywords and phrases are defined in this User
              Agreement:
            </p>
            <p>2.1.1. The website can be found at slotsdeluxes.com</p>
            <p>
              2.1.2. The SlotsDeluxes Internet Website hosts the following
              documents: general information about available video slot games.
            </p>
            <p>
              2.1.3. The SlotsDeluxes Website Administrators are professional
              staff members who moderate and maintain the Website and are
              official representatives of the company's group.
            </p>
            <p>
              2.1.4. Individuals who access the SlotsDeluxes Website via the
              Internet and use the Website in accordance with the terms and
              conditions of this User Agreement are referred to as users.
            </p>
            <h3>3. This User Agreement's Subject</h3>
            <p>3.1. Any User may freely access the SlotsDeluxes Website.</p>
            <p>
              This User Agreement is a legally enforceable public offer
              contract. Users automatically agree to be bound by the terms and
              conditions outlined in this User Agreement by accessing the
              Website.
            </p>
            <h3>4. The Parties' Rights and Responsibilities</h3>
            <p>The Website Administrators reserve the right to:</p>

            <p>
              Modify the Website's Terms and Conditions as well as its content.
              All changes become effective immediately after an updated version
              of the User Agreement is published.
            </p>
            <p>
              In the event of a breach of this User Agreement, restrict or deny
              a User's access to the Website's resources.
            </p>
            <p>Users have the following privileges:</p>
            <p>Use an Internet connection to access the Website.</p>
            <p>
              To contact customer service if any problems arise while
              interacting with the Website.
            </p>

            <p>
              Use the Website in accordance with the terms and conditions set
              forth in this User Agreement.
            </p>

            <h3>Users are not permitted to:</h3>
            <p>
              Using any devices, procedures, programs, algorithms, or methods to
              gain unauthorized access to the Website's Content, or tracking or
              copying any of its elements.
            </p>
            <p>
              Creating fictitious problems or difficulties that may interfere
              with the Website's proper operation.
            </p>
            <h3>5. Accountabilities</h3>
            <p>
              The Website Administrators are not liable for any losses incurred
              by Users as a result of a violation of this User Agreement,
              whether intentional or unintentional, or for any unauthorized
              access to another User's communications.
            </p>
            <h3>The Website Administrators are not liable for:</h3>
            <p>
              The accessibility of the Website, which is largely determined by
              the User's Internet connection and access provider.
            </p>
            <p>
              The proper operation of all Website services if the User does not
              have the necessary technical equipment and devices to effectively
              use the Website.
            </p>
            <h3>6. Infringements on the User Agreement</h3>
            <p>
              Violations of this User Agreement are taken very seriously by the
              Website's Administrators. If any User violates this agreement by
              interfering with the Website's operation or using it for illegal
              purposes, the Administrators reserve the right to reveal the
              User's personal information in order to investigate and resolve
              the issue. This includes any information that is permissible under
              the Website Privacy Policy.
            </p>
            <p>
              In accordance with legal requirements, the Administrators may
              disclose personal information about any User in response to a
              court or law enforcement unit's request.
            </p>
            <p>
              In cases where legal requirements require it, the Administrators
              may disclose personal information about any User as permitted or
              required by law.
            </p>
            <p>
              If a User violates this User Agreement, the Website Administrators
              may take action to prevent the User from accessing the Website
              without prior notice.
            </p>
            <p>
              If a User violates this User Agreement, the Website Administrators
              are not liable for any losses or damages resulting from denied
              access to the Website or partial blocking of its services.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
