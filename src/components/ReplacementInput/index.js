import React from 'react';
import styles from './index.module.scss';

const ReplacementInput = ({ word }) => {
  if (!word.trim()) {
    return <div style={{ minWidth: '30px' }} />;
  }
  return (
    <>
      <div className={styles.selector}/>
      <div className={styles.container}>
        <input type="text" className={styles.input} />
        <button type="button" className={styles.btnPrefixSuggestion}/>
        <button type="button" className={styles.btnPostfixSuggestion}/>
      </div>
    </>
  );
}
export default ReplacementInput;
