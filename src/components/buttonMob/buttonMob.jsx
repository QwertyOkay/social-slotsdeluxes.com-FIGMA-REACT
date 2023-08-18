import styles from './buttonMob.module.scss';
import React, { useState } from 'react';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button
        className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      {isOpen && (
        <div className={styles.burgerDropdown}>
          <a href="#welcome">Welcome</a>
          <a href="#slots">Our slots</a>
          <a href="#download">Download</a>
        </div>
      )}
    </div>
  );
};

export default Burger;
