import React from 'react';
import Axios from 'axios';
import './register.styles.css';
import { Alert } from '../alert/alert.component';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            errorMessage: '',
            usernameError: '',
            passwordError: '',
            passwordConfError: ''
        }
    }

    validate = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        let uError = '';
        let pError = '';
        let cError = '';

        if (username === '' || username === undefined) {
            uError = 'Username is required';
        }
        if (password === '' || password === undefined) {
            pError = 'Password is required';
        } else if (password.length < 6) {
            pError = 'Must be at least 6 characters';
        }
        if (confirmPassword === '' || confirmPassword === undefined) {
            cError = 'Confirmation is required';
        } else if (confirmPassword.length < 6) {
            cError = 'Must be at least 6 characters';
        }

        if (pError === '' && cError === '' && password !== confirmPassword) {
            cError = 'Passwords do not match';
        }

        this.setState({usernameError:uError, passwordError:pError, passwordConfError: cError}, () => {
            if (this.state.usernameError === '' && this.state.passwordError === '' && this.state.passwordConfError === '') {
                this.registerUser(username, password);
            }
        })
    }

    registerUser = (username, password) => {
        this.setState({loading: true}, () => {
            Axios.post('http://localhost:8080/api/users/register',{username, password})
            .then(data => {
                if (data.request.response === '') {
                    this.setState({errorMessage: 'Sorry, that username is taken', loading:false})
                } else {
                    return JSON.parse(data.request.response);
                }
            }).then(user => {
                if (user === '' || user === undefined || user === null) {
                    this.setState({errorMessage: 'Sorry, that username is taken', loading:false})
                } else {
                    this.props.completeLogin(user.id);
                }
            }).catch(err => {
                console.log(err);
                this.setState({errorMessage: 'Something went wrong, please try again later', loading:false})
            })
        })
    }

    closeAlert = () => (this.setState({errorMessage:''}));

    render(){
        const { errorMessage, usernameError, passwordError, passwordConfError, loading } = this.state;
        return (
            <div className="register">
                {errorMessage !== '' && <Alert message={errorMessage} closeAlert={this.closeAlert} />}
                <div className="register-page">
                    <h4>Register</h4>
                    <div className="registerForm">
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <div className='input'>
                                <input autoComplete='off' id='username' name='username' type='text' />
                                {(usernameError !== '') && <span className='error'>{usernameError}</span>}
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <div className="input">
                                <input id='password' name='password' type='password' />
                                {(passwordError !== '') && <span className='error'>{passwordError}</span>}
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <div className="input">
                                <input id='confirmPassword' name='confirmPassword' type='password' />
                                {(passwordConfError !== '') && <span className='error'>{passwordConfError}</span>}
                            </div>
                        </div>
                        <button id='register-btn' onClick={this.validate}>
                            {loading && <span className="loading"></span>}
                            <span>Register</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;