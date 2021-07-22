import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <div>
        <TextField id="standard-basic" label="Plain Text" />
        <Button variant="contained">Encrypt</Button>
      </div>
      <div>
      <TextField id="standard-basic" label="Cipher Text" />
        <Button variant="contained">Decrypt</Button>
      </div>
    </div>
  );
}

export default App;
