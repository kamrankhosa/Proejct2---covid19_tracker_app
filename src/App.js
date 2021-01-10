import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards/Cards';
import Graph from './Components/Graphs/Graph';
import { getData } from './Components/Api/Index';
import Countries from './Components/Countries/Countries';
function App() {
  let [data, setData] = useState({});
  async function componentDidMount() {
    let allRecord = await getData();
    data = setData(allRecord);
  }
  componentDidMount();
  return (
    <div className="container">
      <Header></Header>
      <Cards GetData={data} />
      <Countries />
      <Graph />
    </div>
  );
}

export default App;
