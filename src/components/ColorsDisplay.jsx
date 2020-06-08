import React, { useState, useEffect } from 'react';
import ColorScheme from 'color-scheme';
import useLocalStorage from '../hooks/useLocalStorage';
import Square from './Square';


const ColorsDisplay = () => {

  const [hue, setHue] = useState(5);
  const [scm, setScm] = useState('tetrade');
  const [distance, setDistance] = useState(0.1);
  const [complement, setComplement] = useState(false);
  const [variation, setVariation] = useState('default');
  const [webSafe, setWebSafe] = useState(true);
  const [colors, setColors] = useState([]);

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

  useEffect(() => {

    generataColor();
  }, [])
  // const colors = scheme.colors();

// console.log(colors.length)

// ["ff9966", "996633", "ffcccc", "cc6633", "669966", "339966", "ccffcc", "33cc99", "339999", "339966", "ccffcc", "33cc99"]


  return (
    <div className="columns is-multiline squares-container">
      {colors.map((hex, i) => <Square key={i} hex={hex} />)}
    </div>
  )
}

export default ColorsDisplay;
