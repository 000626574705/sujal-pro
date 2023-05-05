
import './App.css';
import Navabar from './Components/Navabar';
import Textform from './Components/Textform';

function App() {
  return (
   <div>
  <Navabar title="TextUtils"/>
  <div className="container my-3">
   <Textform heading="Enter text here"/>
  </div>
   </div>
   
  );
}

export default App;
