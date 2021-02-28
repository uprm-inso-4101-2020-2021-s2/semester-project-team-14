import React, { useEffect, useState } from 'react';
import styles from './QuoteGenerator.module.css';

const QuoteGenerator = () => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  async function randomQuote() {
    const response = await fetch(
      'https://api.quotable.io/random?tags=inspirational'
    );
    const data = await response.json();
    setContent(data.content);
    setAuthor(data.author);
  }
  useEffect(() => {
    randomQuote();
  }, []);
  return (
    <div className={styles.container}>
      <p> {`${content}`}</p>
      <p className={styles.author}>{`-${author}`}</p>
    </div>
  );
};

export default QuoteGenerator;
