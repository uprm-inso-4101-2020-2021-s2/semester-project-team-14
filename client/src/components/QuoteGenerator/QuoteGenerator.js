import React, { useEffect, useState } from 'react';
import styles from './QuoteGenerator.module.css';

const QuoteGenerator = ({ author, content }) => {
  return (
    <div className={styles.container}>
      <p> {`${content}`}</p>
      <p className={styles.author}>{`-${author}`}</p>
    </div>
  );
};

export default QuoteGenerator;
