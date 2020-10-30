import React, { Component } from 'react';
import Web3 from 'web3';
import GovtEmployee from './components/govt-employee/govt-employee.component';

class App extends Component {

  
  render() {
    return (
      <div>
        <GovtEmployee />
      </div>
    );
  }
}

export default App;