import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

var aes = require('./aes/tmp/wbaes-smoke-umd.js')


function App() {
  var plaintext = 'hello world'
  var options = {
      counter: '1826e4111826e4111826e4111826e411', 
      encoding: 'str'
  };
  var ciphertext = aes.encrypt(plaintext, options);
  var output = aes.decrypt(ciphertext, options)
  console.log('primary')
  console.log(ciphertext, ' : ', output)

  var [plain, setPlain] = useState('')
  var [cipher, setCipher] = useState('')

  function encrypt() {
    var tmp = aes.encrypt(plain, options);
    var v = aes.decrypt(tmp, options)
    console.log('cipher: ', tmp)
    console.log('plain: ', v)
    setCipher(tmp)
  }
  function decrypt() {
    // console.log('cipher: ', cipher)
    // var tmp_plain = aes.decrypt(cipher, options)
    // console.log('plain temp: ', tmp_plain)
    // setPlain(tmp_plain)
  }
  return (
    <div className="App">
      <div>
        <p>Mannual aes working</p>
        <label>plain text: </label><p>{plaintext}</p>
        <label>cipher text: </label><p>{ciphertext}</p>
      </div>
      <div>
        <input value={plain} onInput={e=>setPlain(e.target.event)}></input>
        <button onClick={encrypt}>encrypt</button>
        <input value={cipher}></input>
      </div>
      <div>
        <input value={cipher}></input>
        <button onClick={decrypt}>Decrypt</button>
        <input value={plain}></input>
      </div>
    </div>
  );
}

export default App;
