import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/login/login.component';
import AddCard from '../components/add-card/add-card.component';

const UserPage = ({isLoggedIn, completeLogin}) => (
    <div className='user-page'>
        <Switch>
            <Route exact path='/user/login'>
                {!isLoggedIn ? (
                    <Login completeLogin={completeLogin} />
                ) : (
                    <Redirect to={{ pathname: "/" }}/>
                )}
            </Route>
            <Route exact path='/user/addcard'>
                {isLoggedIn ? (
                    <AddCard completeLogin={completeLogin} />
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