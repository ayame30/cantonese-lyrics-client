import { observable, action, computed, makeObservable } from "mobx";
import _ from 'lodash';

const dummyOriginal = `若這一束吊燈傾瀉下來 或者我 已不會存在
即使你不愛 亦不需要分開

若這一刻我竟嚴重痴呆 根本不需要被愛
永遠在床上發夢 餘生都不會再悲哀

人總需要勇敢生存 我還是重新許願
例如學會 承受失戀
明年今日 別要再失眠 床褥都改變 如果有幸會面
或在同伴新婚的盛宴 惶惑地等待你出現
明年今日 未見你一年 誰捨得改變 離開你六十年
但願能認得出你的子女 臨別亦聽得到你講再見

人總需要勇敢生存 我還是重新許願
例如學會 承受失戀
明年今日 別要再失眠 床褥都改變 如果有幸會面
或在同伴新婚的盛宴 惶惑地等待你出現
明年今日 未見你一年 誰捨得改變 離開你六十年
但願能認得出你的子女 臨別亦聽得到你講再見

在有生的瞬間能遇到你 竟花光所有運氣
到這日才發現 曾呼吸過空氣`;

class LyricsStore {
  original = '';
  transformed = [];

  replacement = '';
  transformedReplacement = [];

  usualWords = [
    '仍', '常', '還', '而', '如', '然', '時', '和', '才', '或', '亦', '若', '著', '未', '被', '在', '及', '便', '就', '又', '吧', '與', '也', '再', '這', '那', '會', '要', '已', '了', '竟', '當', '不', '可', '只', '因', '先', '請', '的', '嗎', '這'
  ];
  constructor() {
    makeObservable(this, {
      original: observable,
      replacement: observable,
      transformed: observable,
      transformedReplacement: observable,
      usualWords: observable,
      setUsualWords: action,

      exportReplacement: computed,
      updateReplacement: action,

      setOriginal: action,
      setReplacement: action,
    })
    this.setOriginal(dummyOriginal);
  }
  setOriginal(val) {
    this.original = val;

    const lines = val.split('\n');

    this.transformed = lines.map((line, lineIndex) => ({
     type: 'line',
     index: lineIndex,
     children: line.split(' ').map((sentence, sentenceIndex) => ({
       type: 'sentence',
       index: sentenceIndex,
       children: sentence.split('').reduce((acc, word, wordIndex, arr) => {
        if (/[a-zA-Z0-9]/g.test(word) && wordIndex && /[a-zA-Z0-9]/g.test(arr[wordIndex - 1])) {
          acc[acc.length - 1].word += word;
          return acc;
        }
        acc.push({
          id: [lineIndex, sentenceIndex, wordIndex].join('-'),
          type: 'word',
          index: wordIndex,
          syllable: 'tat2',
          sentenceIndex,
          lineIndex,
          word: word,
          replacement: this.transformedReplacement.length ? _.get(this.transformedReplacement, `${lineIndex}.children.${sentenceIndex}.children.${wordIndex}.word`, '') : '',
          replacementSyllable: this.transformedReplacement.length ? _.get(this.transformedReplacement, `${lineIndex}.children.${sentenceIndex}.children.${wordIndex}.syllable`, ''): '',
        });
        return acc;
       }, []),
     }))
    }));
  }


  setUsualWords(val) {
    this.usualWords = val.split(',');
  }
  setReplacement(val) {
    this.replacement = val;

    const lines = val.split('\n');
    this.transformedReplacement = lines.map((line, lineIndex) => ({
     type: 'line',
     index: lineIndex,
     children: line.split(' ').map((sentence, sentenceIndex) => ({
       type: 'sentence',
       index: sentenceIndex,
       children: sentence.split('').reduce((acc, word, wordIndex, arr) => {
        if (/[a-zA-Z0-9]/g.test(word) && wordIndex && /[a-zA-Z0-9]/g.test(arr[wordIndex - 1])) {
          acc[acc.length - 1].word += word;
          return acc;
        }
        acc.push({
          id: [lineIndex, sentenceIndex, wordIndex].join('-'),
          type: 'word',
          sentenceIndex,
          lineIndex,
          index: wordIndex,
          syllable: 'tat2',
          word: word,
        });
        return acc;
       }, []),
     }))
    }));

    this.setOriginal(this.original);
  }
  updateReplacement(wordData, val) {
    this.transformed[wordData.lineIndex].children[wordData.sentenceIndex].children[wordData.index].replacement = val;
  }

  get exportReplacement() {
    return this.transformed
      .map(line =>
        line.children
          .map(sentence =>
            sentence.children.map(wordData => wordData.replacement).join('')
          ).join(' ').trim()
      ).join('\n').trim();
  }
}

export default LyricsStore;
