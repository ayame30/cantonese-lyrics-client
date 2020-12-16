import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import _ from 'lodash';
import useOuterClick from '../../hooks/useOuterClick';
import { useStores } from '../../stores';
import { observer } from "mobx-react";

const SuggestionPopup = ({ onClose, nextWord, prevWord }) => {
  const { selectionStore, lyricsStore } = useStores();
  const [ words, setWords ] = useState([]);

  useEffect(() => {
    if (!selectionStore.selections.length) return;
    const tones = selectionStore.selections.map(d => d.similiarTone).join(',');
    const results = Object.values(lyricsStore.data.words).filter(d => d.similiarTone === tones).map(d => d.words);
    setWords(results);
  }, [selectionStore.selections]);

  useEffect(() => {
    if (!selectionStore.prefixSelection) return;
    const char = lyricsStore.data.characters[selectionStore.prefixSelection.word];
    if (!char) {
      setWords([]);
      return;
    }
    const tones = [char.similiarTone, nextWord.similiarTone].join(',');
    console.log(char.words)
    const results = char.words
      .filter(d => d.words.indexOf(selectionStore.prefixSelection.word) === 0)
      .filter(d => d.similiarTone === tones).map(d => d.words);
    setWords(results);

  }, [selectionStore.prefixSelection])

  useEffect(() => {
    if (!selectionStore.postfixSelection) return;
    const char = lyricsStore.data.characters[selectionStore.postfixSelection.word];
    if (!char) {
      setWords([]);
      return;
    }
    const tones = [prevWord.similiarTone, char.similiarTone].join(',');
    console.log(char.words)
    const results = char.words
      .filter(d => d.words.indexOf(selectionStore.postfixSelection.word) === d.words.length - 1)
      .filter(d => d.similiarTone === tones).map(d => d.words);
    setWords(results);

  }, [selectionStore.postfixSelection])

  const innerRef = useOuterClick(ev => {
    onClose();
  });

  return (

    <div ref={innerRef} className={styles.suggestions}>
    {(words || []).map(words => (
      <button style={{ padding: '1px 3px'}}>
        <small>{words}</small>
      </button>
    ))}
  </div>

  );
}
export default observer(SuggestionPopup);
