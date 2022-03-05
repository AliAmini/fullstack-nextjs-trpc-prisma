import React, { FC, useState } from 'react';
import Header from '../Header/Header.component';
import styles from './Layout.module.scss';

interface Props {
  children: any,
};

const Layout:FC<Props> = ({
  children
}) => {

  return ( 
    <div className={styles.container}>
      <Header />

      <main className={`main ${styles.main}`}>
        {children}
      </main>
    </div>
  );
}

export default Layout;