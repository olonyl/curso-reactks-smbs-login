import React, { Component } from 'react';

class Login extends Component {
    INITIAL_STATE = {
        password: '',
        username: ''
    }

    constructor() {
        super();
        this.state = {
            ...this.INITIAL_STATE,
            error: ''
        }

    }
    handleChange = (event) => {
        var element = event.target;

        var name = element.name;
        var value = element.value;

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
                                    <input type="email" name="username" className="form-control" onChange={this.handleChange} value={this.state.username} />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
                                </div>
                                <div className="col-12 mt-2">
                                    <input type="submit" name="Login" className="btn btn-success" value="Login" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;