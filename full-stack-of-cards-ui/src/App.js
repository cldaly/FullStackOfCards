import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component';
import Cards from './components/cards/cards.component';
import UserPage from './user-page/user-page.component';

// Testing User-Card
import UserCards from './user-cards/user-cards.component';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn:false
        }
    }
    render() {
        return (
        <div className='main'>
            <UserCards />

            <Header />
            <Switch>
                <Route exact path='/'>
                    <Link to='/cards'>
                        <button className='begin-btn'>Give me a card!</button>
                    </Link>
                </Route>
                <Route exact path='/cards'>
                    <Cards />
                </Route>
                <Route path='/user'>
                    <UserPage />
                </Route>
                <Route path='/*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </div>
        )
    }
}

export default App;
