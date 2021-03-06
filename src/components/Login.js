import React, { Component } from 'react';
import firebase from 'firebase';
import Confirm from './Confirm';
class Login extends Component {
    INITIAL_STATE = {
        password: '',
        username: ''
    }

    constructor() {
        super();
        this.state = {
            ...this.INITIAL_STATE,
            message: '',
            message_style: '',
            loading: false,
            openConfirm: false
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

        const { username, password } = this.state;

        this.setState({ message: '', loading: true });
        firebase
            .auth().
            signInWithEmailAndPassword(username, password)
            .then(this.onLoginSuccess)
            .catch((error) => {
                if (error.code == 'auth/user-not-found')
                    this.setState({ openConfirm: true, loading: false })
                else this.setState({ message: 'Datos invalidos', message_style: "alert-danger", loading: false })
            });
    }

    onLoginSuccess = () => {
        this.setState({
            message: 'Login exitoso!',
            message_style: 'alert-success',
            loading: false,
            openConfirm: false
        })
    }

    onLoginFail = () => {
        this.setState({
            message: "Error al ingresar",
            message_style: "alert-danger",
            loading: false,
            openConfirm: false
        })
    }

    renderMenssage = () => {
        if (this.state.message)
            return <div className={`alert ${this.state.message_style} mt-2`}>
                {this.state.message}
            </div>
    }

    handleClose = () => {
        this.setState({ openConfirm: false });
    };

    handleConfirm = () => {
        const { username, password } = this.state;

        firebase
            .auth()
            .createUserWithEmailAndPassword(username, password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail);
    }

    render() {
        return (
            <div className="Login">
                <Confirm open={this.state.openConfirm}
                    handleClose={this.handleClose}
                    handleConfirm={this.handleConfirm} />
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
                                    {this.renderMenssage()}
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
                                    <button name="Login" className="btn btn-success" >
                                        Login  {this.state.loading && <i class="fas fa-spinner fa-spin"></i>}
                                    </button>
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