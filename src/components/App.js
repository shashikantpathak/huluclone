import "../css/App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import React, {useState} from 'react'
import {requests} from '../endpoint/requests'



function App() {  
  const [selectedOption, setSelectedOption] = useState(requests.trending)
  return (
    <div className="app">
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
