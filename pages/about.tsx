import type {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/About.module.scss'


const AboutPage: NextPage = ({
  
}) => {
  return ( 
    <div className={styles.pageWrapper}>
      <Head>
        <title>ABBBBBBout pgx!</title>
      </Head>

      <h1>About page!</h1>
      <p>some description...</p>
    </div>
  );
}

export default AboutPage;