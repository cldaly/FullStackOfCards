import React from 'react';
import { Route, Switch} from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component';

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
            
            </Switch>
        </div>
        )
    }
}

export default App;
