import { keysArr } from './keysArray';
import { useEffect, useState } from 'react';

function App() {
  const [pressedKey, setPressedKey] = useState('X');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      handlePlaySound(event.key.toUpperCase());
    });
  }, []);

  const drumPads = keysArr;
  const handlePlaySound = (selector) => {
    const audio = document.getElementById(selector);
    audio.play();
    setPressedKey(selector);
  };

  return (
    <div className="bg-pink-400" >
      <div id="drum-machine" className='flex flex-col justify-center items-center h-screen'>
        <div className="text-7xl text-center font-bold">McDrums ePad</div>
        <div className="text-4xl text-white font-bold text-center mb-5 mt-7" id="display">
          {pressedKey}
        </div>
        <div
          id="drum-pads"
          className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-4 h-1/2 pb-10"
        >
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.src}
              onClick={() => {
                handlePlaySound(drumPad.text);
              }}
              className="drum-pad rounded border-gray-300  dark:border-gray-700 border-dashed border-2 flex justify-center items-center text-xl h-full bg-gray-800 text-white shadow"
              id={drumPad.src}
            >
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
