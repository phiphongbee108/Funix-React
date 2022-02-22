import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DEPARTMENTS, ROLE, STAFFS } from './shared/staffs.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    }
  }

  render() {
    const employees = this.state.staffs.map(e => {
      return (
        <div key={e.id} className='col-6'>
          {e.name}
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row'>
          {employees}
        </div>
      </div>
    );
  }
}

export default App;
