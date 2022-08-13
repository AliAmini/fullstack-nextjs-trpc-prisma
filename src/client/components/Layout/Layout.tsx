import React, { FC, useState } from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import styles from './Layout.module.scss';

interface Props {
  children: any,
};

const Layout:FC<Props> = ({
  children
}) => {

  return ( 
    <div className={styles.container}>
      <Nav />
      <Header />

      <main className={`main page-container ${styles.main}`}>
        {children}
      </main>
    </div>
  );
}

export default Layout;