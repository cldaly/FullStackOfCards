import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component';
import Cards from './components/cards/cards.component';
import UserPage from './user-page/user-page.component';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn:true
        }
    }

    componentDidMount(){
        if (localStorage.getItem('user-id')) {
            this.setState({isLoggedIn:true});
        } else {
            this.setState({isLoggedIn:false});
        }
    }

    completeLogin = (id) => {
        this.setState({isLoggedIn:true}, () => {
            localStorage.setItem('user-id', id)
        })
    }

    logout = () => {
        this.setState({isLoggedIn:false}, () => {
            localStorage.clear();
        })
    }

    render() {
        return (
        <div className='main'>
            <Header isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
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
                    <UserPage completeLogin={this.completeLogin} isLoggedIn={this.state.isLoggedIn} />
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
