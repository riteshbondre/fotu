import React, { useState } from 'react';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import OnlineMode from './comps/onlineModeButton';
import OfflineMode from './comps/offlineModeButton';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <div><OnlineMode/></div>
      
      <h2>Online Mode</h2>
      <ImageGrid setSelectedImg={setSelectedImg} />
      <div><OfflineMode/></div>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
