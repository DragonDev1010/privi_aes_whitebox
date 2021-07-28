import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

var aes = require('./aes/tmp/wbaes-smoke-umd.js')


function App() {
  var plaintext = 'hello'
  var options = {
      counter: '1826e4111826e4111826e4111826e411', 
      encoding: 'str'
  };
  var ciphertext = aes.encrypt(plaintext, options);
  var output = aes.decrypt(ciphertext, options)

  var [plain, setPlain] = useState('')
  var [cipher, setCipher] = useState('')
  var [decryptResult, setDecryptResult] = useState('')
  function encrypt() {
    var tmp = aes.encrypt(plain, options);
    setCipher(tmp)
  }
  function decrypt() {
    var tmp_plain = aes.decrypt(cipher, options)
    setDecryptResult(tmp_plain)
  }
  return (
    <div className="App">
      <div>
        <p>Mannual aes working</p>
        <label>plain text: </label><p>{plaintext}</p>
        <label>cipher text: </label><p>{ciphertext}</p>
      </div>
      <div>
        <input type = "text" value={plain} onChange={e=>setPlain(e.target.value)}></input>
        <button onClick={encrypt}>encrypt</button>
        <input value={cipher}></input>
      </div>
      <div>
        <input value={cipher}></input>
        <button onClick={decrypt}>Decrypt</button>
        <input value={decryptResult}></input>
      </div>
    </div>
  );
}

export default App;
