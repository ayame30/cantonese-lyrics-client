import React from 'react';
import styles from './index.module.scss';
import { createSelectable } from 'react-selectable-fast'
import { useStores } from '../../stores';
import _ from 'lodash';
import { observer } from "mobx-react";

const Word = ({ selectableRef, isSelected, isSelecting, wordData }) => {
  const { selectionStore } = useStores();

  const isActive = _.find(selectionStore.selections, { id: wordData.id });

  return (
    <div className={`inline-block ${!wordData.syllable && "not-selectable"}`} ref={selectableRef} >
      {wordData.syllable &&
        <small className={styles.syllable}>
          {wordData.syllable}
        </small>}
      <div
        className={styles.word}
        style={{
          backgroundColor: isActive || isSelecting ? 'lightblue' : 'transparent'
        }}
      >
        {wordData.word}
      </div>
    </div>
  );
};

export default createSelectable(observer(Word));
