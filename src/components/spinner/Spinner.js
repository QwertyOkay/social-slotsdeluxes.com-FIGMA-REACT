import { CgSpinner } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={styles.spinWrap}>
      <IconContext.Provider value={{ size: '8rem' }}>
        <div className={styles.iconContainer}>
          <CgSpinner />
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default Spinner;
