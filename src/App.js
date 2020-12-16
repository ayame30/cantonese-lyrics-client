import React, { useState, useEffect } from 'react';
import './App.css';
// import 'reset-css';
import Line from './components/Line';
import { useStores } from "./stores";
import { observer } from "mobx-react";



function App() {
  const { lyricsStore } = useStores();
  const [tab, setTab] = useState('original');


  useEffect(() => {
    fetch('https://demo-328sd82.s3-ap-southeast-1.amazonaws.com/data.json')
      .then((res) => res.json())
      .then((data) => {
        lyricsStore.setData(data);
      });
  }, []);

  const tabOptions = {
    original: '原詞',
    import: '匯入',
    export: '匯出',
    usual: '常用',
  }
  return (
    <div className="App">
      <header>
        <div style={{ flex: 1 }}>
          {Object.entries(tabOptions).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={tab === key ? 'active' : null}
              onClick={() => tab === key ? setTab(null) : setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <a rel="noreferrer" href="https://forms.gle/eYZtTGMCYn15mtF56" target="_blank">
          ？
        </a>
      </header>
      <div style={{ padding: '10px 20px' }}>

        {tab === null && <div
          style={{ height: 210 }}
        />}
        {tab === 'original' && <textarea
          style={{ width: '100%', height: 200 }}
          value={lyricsStore.original}
          onChange={(e) => lyricsStore.setOriginal(e.target.value)}
        />}
        {tab === 'import' &&
          <textarea
            style={{ width: '100%', height: 200 }}
            value={lyricsStore.replacement}
            onChange={(e) => lyricsStore.setReplacement(e.target.value)}
          />
        }
        {tab === 'export' && <textarea
          style={{ width: '100%', height: 200 }}
          readOnly
          value={lyricsStore.exportReplacement}
        />}
        {tab === 'usual' && <textarea
          style={{ width: '100%', height: 200 }}
          placeholder="請用半形逗號分隔"
          value={lyricsStore.usualWords.join(',')}
          onChange={(e) => lyricsStore.setUsualWords(e.target.value)}
        />}
      </div>
      <div style={{ padding: '20px' }}>
        {lyricsStore.transformed.map((line, i) => (
          <Line key={`line-${i}`} line={line}/>
        ))}
      </div>

    </div>
  );
}


export default observer(App);
