import { observable, action, makeObservable } from "mobx";

class SelectionStore {
  selections = [];
  prefixSelection = null;
  postfixSelection = null;

  constructor() {
    makeObservable(this, {
      selections: observable,
      prefixSelection: observable,
      postfixSelection: observable,

      setSelections: action,
      removeSelections: action,

      selectPrefix: action,
      selectPostfix: action,
    })
  }
  selectPrefix(wordData) {
    this.selections = [];
    this.prefixSelection = wordData;
    this.postfixSelection = null;
  }
  selectPostfix(wordData) {
    this.selections = [];
    this.postfixSelection = wordData;
    this.prefixSelection = null;
  }
  setSelections(wordDatas) {
    this.selections = wordDatas;
    this.prefixSelection = null;
    this.postfixSelection = null;
  }

  removeSelections() {
    this.selections = [];
    this.prefixSelection = null;
    this.postfixSelection = null;
  }

}

export default SelectionStore;
