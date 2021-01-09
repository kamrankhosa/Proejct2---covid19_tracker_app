import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header';
import { getData } from './Components/Api/Index'
import Cards from './Components/Cards/Cards';
function App() {
  let [data, setData] = useState({})
  async function componentDidMount(){
    let allRecord = await getData();
    data=setData(allRecord);
  }
  componentDidMount();
  return (
    <div className="container">
      <Header></Header>
      <Cards GetData={data} />
    </div>
  );
}

export default App;
