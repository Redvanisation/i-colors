import React from 'react';


const Control = ({ setHue, setScm, setDistance, setComplement, 
  setVariation, setWebSafe, generataColor }) => {

    const schemes = ['mono', 'contrast', 'triade', 'tetrade', 'analogic'];
    const variations = ['default', 'pastel', 'soft', 'light', 'hard', 'pale'];
    

  const generateRandom = () => {
    const ran = Math.floor(Math.random() * 255);
    setHue(ran);
    generataColor();
  }

  const validateDist = (val) => {
    if (typeof(val) !== Number) return;
    if (typeof(val) === Number && (val < 0 || val > 1)) return;
    setDistance(val);
    generataColor();
  }


  return (
    <div className="control-container" onChange={() => generataColor()}>
      <h1 className="main-title">iColors</h1>

      <button type="button" className="button" onClick={generateRandom}>Generate Random</button>
      
      <div>
        <h3>Scheme</h3>
        <select name="scheme" onChange={(e) => setScm(e.target.value)}>
          {schemes.map((mode, i) => <option key={i} value={mode}>{mode}</option>)}
        </select>
      </div>

      <div>
        <h3>Distance</h3>
        <input type="text" placeholder="Enter a number between 0 and 1" onChange={(e) => validateDist(e.target.value)} />
      </div>

      <div>
        <h3>Complement</h3>
        <select name="complement" onChange={(e) => setComplement(e.target.value)}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>


      <div>
        <h3>Variation</h3>
        <select name="variation" onChange={(e) => setVariation(e.target.value)}>
          {variations.map((vari, i) => <option key={i} value={vari}>{vari}</option>)}
        </select>
      </div>

      <div>
        <h3>Web Safe</h3>
        <select name="web-safe" onChange={(e) => setWebSafe(e.target.value)}>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
      </div>


    </div>
  )
}

export default Control;
