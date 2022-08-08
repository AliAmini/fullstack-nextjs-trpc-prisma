import React, { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return ( 
    <header className={`header ${styles.header}`}>
      <h3 className={styles.title}>Header</h3>
    </header>
  );
}

export default Header;
