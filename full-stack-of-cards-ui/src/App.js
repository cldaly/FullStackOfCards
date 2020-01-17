import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component';
import Cards from './components/cards/cards.component';

class App extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
        <div className='main'>
            <Header />
            <Switch>
                <Route exact path='/cards'>
                    <Cards />
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
