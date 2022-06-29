import React from 'react';
import './App.css';
import{action,originals} from './urls'

import Banner from './components/Banner/banner'
import NavBar from './components/NavBar/NavBar';
import Rowpost from './components/RowPost/Rowpost';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Orginals' />
    <Rowpost url={action} title='Action' isSmall/>

    </div>
  );
}

export default App;
