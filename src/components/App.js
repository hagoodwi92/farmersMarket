import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProduceList from './ProduceList.js';
import Header from './Header.js';
import MarketList from './MarketList.js';

function App(){
  return (
    <React.Fragment>
      <Header/>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="row">
              <MarketList />
            </div>
            <div class="row">
              <ProduceList />
            </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

