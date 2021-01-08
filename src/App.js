import './App.css';
import Header from './Components/Header';
import {getData} from './Components/Api'
function App() {
  return (
    <div className="container">
      {
        getData
      }
      <Header></Header>
    </div>
  );
}

export default App;
