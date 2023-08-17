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
            <p>
              Welcome to Slotsdeluxes.com, where the slots are hot and the terms
              are chilled. Please take a moment to read our terms and conditions
              before proceeding. We understand that this isn't the most exciting
              thing you'll read today, but we promise to keep it light and
              informative. You agree to be bound by our terms and conditions by
              using our website. If you disagree with any of the terms, simply
              do not use the website. We will not be angry, but we will be sad.
              To play on Slotsdeluxes.com, you must be at least 18 years old. If
              you aren't, go outside and play hopscotch or something. To
              participate in our games, you must first create an account. Please
              ensure that the information you provide is accurate and truthful.
              We do not want any fictitious names or addresses - that is simply
              unacceptable. We anticipate that our users will be cool, calm, and
              collected. Any inappropriate language or behavior will not be
              tolerated. Let's act like we're all adults here. Please provide
              accurate payment information if you are playing for real money. We
              are not liable for any mistakes you make. Also, while we will do
              our best to ensure that you receive your winnings, we cannot be
              held liable for any issues beyond our control. We do not tolerate
              any form of cheating, hacking, or another unfair advantage. We'll
              have to say goodbye if you're caught doing anything illegal or
              prohibited. There will be no hard feelings, but we cannot have a
              few bad apples spoiling the bunch. We reserve the right to change
              our terms and conditions at any time. We'll notify you of any
              major changes, but it's your responsibility to check back for
              updates on a regular basis. Thank you for visiting
              Slotsdeluxes.com. We promise to keep things cool and entertaining
              around here. Now you can start spinning those slots!
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
