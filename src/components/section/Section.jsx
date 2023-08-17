import styles from './Section.module.scss';

function Section({ variant = 'section', id = '#', children }) {
  return (
    <div className={styles[variant]} id={id}>
      {children}
    </div>
  );
}

export default Section;
