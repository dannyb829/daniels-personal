import './App.css';
import Header from './elements/Header';
import InfoBox from './elements/InfoPiece';
import { useState } from 'react';
import ImageSection from './elements/ImageSection';
import NavMenu from './elements/NavMenu';

function App() {
  const [page, setPage] = useState('background')
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
    <div id="top">
      <Header setPage={setPage} page={page} open={open} setOpen={setOpen} />
      <NavMenu open={open} page={page} setPage={setPage}/>
    </div>
      <div id='leftSide'>
        <ImageSection page={page}/>
      </div>
      <div id='rightSide'>
        <InfoBox page={page}/>
      </div>
    </div>
  );
}

export default App;
