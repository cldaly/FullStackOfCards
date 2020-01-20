import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/login/login.component';
import AddCard from '../components/add-card/add-card.component';
import Register from '../components/register/register.component';

const UserPage = ({isLoggedIn, completeLogin}) => (
    <div className='user-page'>
        <Switch>
            <Route exact path='/user/login'>
                {!isLoggedIn ? (
                    <Login completeLogin={completeLogin} />
                ) : (
                    <Redirect to={{ pathname: "/cards" }}/>
                )}
            </Route>
            <Route exact path='/user/register'>
                {!isLoggedIn ? (
                    <Register completeLogin={completeLogin} />
                ) : (
                    <Redirect to={{ pathname: "/cards" }}/>
                )}
            </Route>
            <Route exact path='/user/addcard'>
                {isLoggedIn ? (
                    <AddCard completeLogin={completeLogin} />
                ) : (
                    <Redirect to={{ pathname: "/cards" }}/>
                )}
            </Route>
            <Route exact path='*'>
                <Redirect to={{ pathname: "/cards" }}/>
            </Route>
        </Switch>
    </div>
)
export default UserPage;