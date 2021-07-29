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
  var [hex, setHex] = useState('')
  var [hexDecrypted, setHexDecrypted] = useState('')
  function encrypt() {
    var tmp = aes.encrypt(plain, options);
    setCipher(tmp)
  }
  function decrypt() {
    var tmp_plain = aes.decrypt(cipher, options)
    setDecryptResult(tmp_plain)
  }
  function hexdecrypt() {
    var temp = aes.decrypt(atob(hex), options)
    setHexDecrypted(temp)
  }
  return (
    <div className="App">
      <div>
        <p>Mannual aes working</p>
        <label>plain text: </label><p>{plaintext}</p>
        <label>cipher text: </label><p>{btoa(ciphertext)}</p>
      </div>
      <div>
        <input type = "text" value={plain} onChange={e=>setPlain(e.target.value)}></input>
        <button onClick={encrypt}>encrypt</button>
        <input value={btoa(cipher)}></input>
      </div>
      <div>
        <input type = "text" value={btoa(cipher)} onChange={e=>setCipher((e.target.value))}></input>
        <button onClick={decrypt}>Decrypt</button>
        <input value={decryptResult}></input>
      </div>
      <br/>
      <div>
        <input type = "text" value = {hex} onChange={e=>setHex(e.target.value)} placeholder = 'Input Base64-type text'></input>
        <button onClick={hexdecrypt}>Hex Decrypt</button>
        <input value = {hexDecrypted} placeholder='Here is the decrypted result'></input>
      </div>
      

    </div>
  );
}

export default App;
