import React, { useState } from 'react';
import './App.css';
// import 'reset-css';
import Line from './components/Line';

function App() {
  const [lyrics, setLyrics] = useState('');
  return (
    <div className="App">
      <textarea
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
      />
      <div>
        {lyrics.split('\n').map((line, i) => (
          <Line key={`line-${i}`} line={line} />
        ))}
      </div>
    </div>
  );
}


export default App;
