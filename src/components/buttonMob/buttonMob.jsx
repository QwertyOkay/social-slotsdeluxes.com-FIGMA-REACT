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
          {/* Здесь вы можете разместить пункты меню */}
          <a href="#">Главная</a>
          <a href="#">О нас</a>
          <a href="#">Услуги</a>
          {/* Добавьте нужные пункты меню */}
        </div>
      )}
    </div>
  );
};

export default Burger;
