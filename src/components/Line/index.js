import React from 'react';
import styles from './index.module.scss';
import Word from '../Word';
import ReplacementInput from '../ReplacementInput';

const Line = ({ line }) => (
  <div className={styles.line}>
    {line.split('').map((word, i) => (
      <div key={`word-${i}-${word}`} className="inline-block">
        <Word word={word} syllable="yat1" />
        <ReplacementInput word={word} />
      </div>
    ))}
  </div>
);

export default Line;
