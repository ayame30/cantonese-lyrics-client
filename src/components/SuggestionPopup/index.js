import React, { useState } from 'react';
import styles from './index.module.scss';
import _ from 'lodash';
import useOuterClick from '../../hooks/useOuterClick';

const SuggestionPopup = ({ onClose }) => {
  const innerRef = useOuterClick(ev => {
    onClose();
  });

  return (

    <div ref={innerRef} className={styles.suggestions}>
    {["詞一", "詞一","詞一", "詞一","詞一", "詞一","詞一", "詞一",].map(words => (
      <button style={{ padding: '1px 3px'}}>
        <small>{words}</small>
      </button>
    ))}
  </div>

  );
}
export default SuggestionPopup;
