import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/login/login.component';
import Register from '../components/register/register.component';

const UserPage = ({isLoggedIn, completeLogin, closeAlert}) => (
    <div className='user-page'>
        <Switch>
            <Route exact path='/user/login'>
                {!isLoggedIn ? (
                    <Login completeLogin={completeLogin} />
                ) : (
                    <Redirect to={{ pathname: "/" }}/>
                )}
            </Route>
            <Route exact path='/user/register'>
                {!isLoggedIn ? (
                    <Register completeLogin={completeLogin} />
                ) : (
                    <Redirect to={{ pathname: "/" }}/>
                )}
            </Route>
            <Route exact path='*'>
                <Redirect to={{ pathname: "/" }}/>
            </Route>
        </Switch>
    </div>
)
export default UserPage;