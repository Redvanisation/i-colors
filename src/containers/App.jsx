import React, { useState } from 'react';
import ColorScheme from 'color-scheme';
import useLocalStorage from '../hooks/useLocalStorage';
import ColorsDisplay from '../components/ColorsDisplay';
import Control from '../components/Control';

const App = () => {

  const [hue, setHue] = useState(5);
  const [scm, setScm] = useState('tetrade');
  const [distance, setDistance] = useState(0.1);
  const [complement, setComplement] = useState(false);
  const [variation, setVariation] = useState('default');
  const [webSafe, setWebSafe] = useState(true);
  const [colors, setColors] = useLocalStorage('colors', []);

  const scheme = new ColorScheme();

  const generataColor = () => {
     scheme.from_hue(hue)
      .scheme(scm)
      .distance(distance)
      .add_complement(complement)
      .variation(variation)
      .web_safe(webSafe);

    setColors(scheme.colors());
  }


  return (
    <div className="app">
      <ColorsDisplay generataColor={generataColor} colors={colors} />
      
      <Control setHue={setHue} setScm={setScm} setDistance={setDistance} setComplement={setComplement} 
        setVariation={setVariation} setWebSafe={setWebSafe} generataColor={generataColor}
      />
    </div>
  );
}

export default App;
