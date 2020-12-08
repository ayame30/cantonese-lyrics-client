import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LyricsStore from './stores/LyricsStore';
import SelectionStore from './stores/SelectionStore';
import { StoreProvider } from './stores';

const lyricsStore = new LyricsStore();
const selectionStore = new SelectionStore();


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={{lyricsStore, selectionStore}}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
