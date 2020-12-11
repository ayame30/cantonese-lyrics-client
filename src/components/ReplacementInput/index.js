import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { useStores } from '../../stores';
import _ from 'lodash';
import { observer } from "mobx-react";
import SuggestionPopup from '../SuggestionPopup';



const ReplacementInput = ({ wordData }) => {
  const { selectionStore, lyricsStore } = useStores();
  const [ openPopUp, setOpenPopUp ] = useState(false);

  const isFirstActive = selectionStore.selections.length && _.get(selectionStore.selections, '0.id') === wordData.id;
  const isPrefixSelected = selectionStore.prefixSelection && selectionStore.prefixSelection.id === wordData.id;
  const isPostfixSelected = selectionStore.postfixSelection && selectionStore.postfixSelection.id === wordData.id;

  useEffect(() => {
    if (isFirstActive || isPrefixSelected || isPostfixSelected) {
      setOpenPopUp(true);

    } else {
      setOpenPopUp(false);
    }
  }, [
    isFirstActive,
    isPrefixSelected,
    isPostfixSelected,
  ]);
  const onClose = () => {
    setOpenPopUp(false);
    selectionStore.removeSelections();
  }


  return (

      <div className={styles.container}>
        {false && <div className={styles.selector} >
          <small className="block">{wordData.replacementSyllable}</small>
        </div>}
        <div style={{ height: 10}} />
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={wordData.replacement}
            size="1"
            className={styles.input}
            onChange={(e) => lyricsStore.updateReplacement(wordData, e.target.value)}
          />

        {!!wordData.replacement && <button
          type="button"
          className={styles.btnPrefixSuggestion}
          onClick={() => selectionStore.selectPostfix(wordData)}
        />}
        {!!wordData.replacement && <button
          type="button"
          className={styles.btnPostfixSuggestion}
          onClick={() => selectionStore.selectPrefix(wordData)}
        />}
                </div>

        {openPopUp &&
          <SuggestionPopup onClose={onClose}  />
        }
      </div>

  );
}
export default observer(ReplacementInput);
