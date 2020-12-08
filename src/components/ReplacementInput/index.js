import React, { useState } from 'react';
import styles from './index.module.scss';
import { useStores } from '../../stores';
import _ from 'lodash';
import { observer } from "mobx-react";
import { Popover } from 'react-tiny-popover'
import { createSelectable } from 'react-selectable-fast'
import SelectionStore from '../../stores/SelectionStore';



const ReplacementInput = ({ wordData }) => {
  const { selectionStore, lyricsStore } = useStores();

  const isFirstActive = selectionStore.selections.length && _.get(selectionStore.selections, '0.id') === wordData.id;
  const isPrefixSelected = selectionStore.prefixSelection && selectionStore.prefixSelection.id === wordData.id;
  const isPostfixSelected = selectionStore.postfixSelection && selectionStore.postfixSelection.id === wordData.id;

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

        {(!!isFirstActive || isPrefixSelected || isPostfixSelected) &&
          <div className={styles.suggestions}>
            <button type="button" onClick={() => selectionStore.removeSelections()}>x</button>
            {["詞一", "詞一","詞一", "詞一","詞一", "詞一","詞一", "詞一",].map(words => (
              <button style={{ padding: '1px 3px'}}>
                <small>{words}</small>
              </button>
            ))}
          </div>
        }
      </div>

  );
}
export default observer(ReplacementInput);
