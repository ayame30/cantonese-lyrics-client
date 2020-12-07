import React from 'react';
import styles from './index.module.scss';

const Word = ({ word, syllable }) => {
  if (!word.trim()) {
    return <div style={{ minWidth: '10px' }} />;
  }
  return (
    <div className="inline-block">
      {word.trim() &&
        <small className={styles.syllable}>
          {syllable}
        </small>}
      <div className={styles.word}>
        {word}
      </div>
    </div>
  );
};

export default Word;
