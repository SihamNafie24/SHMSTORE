import React from 'react';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className='container'>
      <div className={styles.loading}></div>
    </div>
  );
}

export default Loading;
