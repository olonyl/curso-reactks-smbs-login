import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      error: ''
    }

  }

  handleChange = (event) => {
    var name = event.target;
    var value = event.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.state.username) {
      this.setState({
        error: 'Username is required'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="Login">
            <div className="card">
              <div className="card-header">
                Login
              </div>
              <div className="card-body">
                <form action="" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-12 AvatarWrapper">
                      <img src="/avatar.png" alt="" className="Avatar" />
                    </div>
                    <div className="col-12">
                      <div className="alert alert-danger mt-2">
                        Error: <br /> {this.state.error}
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Username</label>
                      <input type="text" name="username" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="">Password</label>
                      <input type="password" name="username" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="col-12 mt-2">
                      <input type="submit" name="Login" className="btn btn-success" value="Login" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
