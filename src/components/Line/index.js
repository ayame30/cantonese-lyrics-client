import React from 'react';
import styles from './index.module.scss';
import Word from '../Word';
import ReplacementInput from '../ReplacementInput';
import { SelectableGroup } from 'react-selectable-fast'
import { useStores } from '../../stores';
import { toJS } from 'mobx';
import { observer } from "mobx-react";


const Line = ({ line }) => {
  const { selectionStore } = useStores();
  return (
    <div className={styles.line}>
      {line.children.map((sentence, si, arr) => (
        <div className={styles.line} key={`sen-${si}`}>
          <div className={styles.line}>
            <SelectableGroup
              resetOnStart
              onSelectionFinish={(val) => {
                selectionStore.setSelections(val.map(v => toJS(v.props.wordData)).sort((a, b) => a.index - b.index));
              }}
              ignoreList={['.not-selectable']}
              globalMouse={false}
              allowClickWithoutSelected
            >
              <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', zIndex: 2 }}
                className="inline-block"
              >
                {sentence.children.map((wordData) => (
                  <div key={`word-${wordData.id}`}
                    className="inline-block">
                    <Word wordData={wordData} />
                  </div>
                ))}
              </div>
            </SelectableGroup>
            {sentence.children.map((wordData) => (
              <div key={`word-${wordData.id}`} className="inline-block">
                <div style={{ visibility: 'hidden'}}><Word wordData={wordData} /></div>
                <ReplacementInput wordData={wordData} />
              </div>
            ))}
          </div>
          {arr.length - 1 > si && <div className={styles.separator} />}
        </div>))}
    </div>
  );
}

export default observer(Line);
