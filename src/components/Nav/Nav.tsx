import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Nav.module.scss';

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;