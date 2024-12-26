import { IpcRendererEvent, ipcRenderer } from 'electron';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const { ipcRenderer } = window.require('electron');

    document.getElementById('minimize-button')?.addEventListener('click', () => {
      ipcRenderer.send('minimize-window');
    });

    document.getElementById('maximize-button')?.addEventListener('click', () => {
      ipcRenderer.send('maximize-window');
    });

    document.getElementById('close-button')?.addEventListener('click', () => {
      ipcRenderer.send('close-window');
    });
  }, []);

  return (
    <div>
      <div id="content">
        <div className='w-full h-full'>
          <div className='flex justify-end gap-5 p-2 px-5 bg-gray-800 text-white draggable'>
            <button className='undraggable' id="minimize-button">_</button>
            <button className='undraggable' id="maximize-button">[]</button>
            <button className='undraggable' id="close-button">X</button>
          </div>
          <h1>Hello animal</h1>
        </div>
      </div>
    </div>
  );
};

export default App;