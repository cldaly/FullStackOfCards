import React from 'react';
import Axios from 'axios';
import './login.styles.css';
import { Alert } from '../alert/alert.component';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usernameError: {
                status:false,
                message:''
            },
            passwordError: {
                status:false,
                message:''
            },
            submitted: false,
            errorMessage: '',
            loading: false
        }
    }

    validate = () => {
        this.setState({ submitted:true }, () => {
            let username = document.getElementById('username').value;
            let password = document.getElementById('password').value;

            let uStatus = {status:false,message: ""}
            let pStatus = {status:false,message: ""}

            if (username === '' || username === undefined || username === null){
                uStatus = {status:true,message:"Username is required"};
            }
            if (password === '' || password === undefined || password == null) {
                pStatus = {status:true,message:"Password is required"};
            }

            this.setState({ usernameError:uStatus, passwordError:pStatus },() => {
                if (!this.state.usernameError.status && !this.state.passwordError.status) {
                    this.login(username, password);
                }
            })
        });
    }

    login = (username, password) => {
        this.setState({loading:true}, () => {
            Axios.post('http://localhost:8080/users/login',{username, password})
            .then(data => {
                return JSON.parse(data.request.response);
            }).then(user => {
                console.log(user)
            }).catch(() => {
                this.setState({errorMessage:'Invalid Username or Password', loading:false })
            })
        })
    }

    closeAlert = () => (this.setState({errorMessage:''}));

    render(){
        const {usernameError, passwordError, submitted, loading, errorMessage} = this.state;
        return(
            <div className='login'>
                <h2>Welcome to Musix App</h2>
                {errorMessage !== '' && <Alert message={errorMessage} closeAlert={this.closeAlert} />}
                <div className='login-page'>
                    <h4>Login</h4>
                    <div className="loginForm" autoComplete='off' noValidate>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input id='username' type='text' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input id='password' type='password' />
                        </div>
                        <button id='login-btn' onClick={this.validate}>
                            {loading && <span className="loading"></span>}
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
class User {
    userId;
    email;
    profileImg;
    constructor(email){
        this.email = email;
        this.token = undefined;
    }
}


export default Login;