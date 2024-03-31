import './App.css';
import Header from './elements/Header';
import InfoBox from './elements/InfoPiece';
import { useState } from 'react';
import ImageSection from './elements/ImageSection';

function App() {
  const [page, setPage] = useState('background')

  return (
    <div className="App">
      <Header setPage={setPage} page={page}/>
      <div class='gridBox'>
        
      <div class='leftSide'>
        <ImageSection page={page}/>
      </div>
      <div class='rightSide'>
        <InfoBox page={page}/>
      </div>
      </div>
    </div>
  );
}

export default App;
