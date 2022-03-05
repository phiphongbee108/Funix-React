import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DEPARTMENTS, ROLE, STAFFS } from './shared/staffs.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
