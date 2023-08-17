import { GrFormClose } from 'react-icons/gr';

import styles from './ButtonClose.module.scss';

function ButtonClose({ variant = 'closeBtn', type = 'button', onClick }) {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      <GrFormClose size={20} />
    </button>
  );
}

export default ButtonClose;
