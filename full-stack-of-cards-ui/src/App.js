import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import './App.css';
import Header from './components/header/header.component';
import Cards from './components/cards/cards.component';
import UserPage from './user-page/user-page.component';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:true,
            fadein: false
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

    begin = () => {
        const hero = document.getElementsByClassName("hero")[0];
        const heroBtn = document.getElementById('hero-btn');
        const heroContent = document.getElementById('hero-content');

        heroBtn.classList.toggle('fadeout');
        setTimeout(() => { heroContent.classList.toggle('fadeout'); },500)
        setTimeout(() => { hero.classList.toggle('fadeout'); },1000)

        setTimeout(() => { heroBtn.style.display = 'none' }, 2000)
        setTimeout(() => { heroContent.style.display = 'none' }, 2500)
        setTimeout(() => { 
            hero.style.display = 'none' ;
            this.setState({fadein:true}, () => {
                this.props.history.push('/cards');
                setTimeout(() => {
                    this.setState({fadein:false})
                }, 2500)
            })
        }, 3000)
    }

    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <div className="hero">
                            <div className="background-image"></div>
                            <div className="hero-content-area" id='hero-content'>
                                <h1>Full Stack of Cards</h1>
                                <h3>Flash cards for full stack java developers</h3>
                                <div id='hero-btn'>
                                    <button id='begin' onClick={this.begin} className="begin-btn">Begin</button>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/cards'>
                        <Header fadein={this.state.fadein} isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
                        <Cards fadein={this.state.fadein} />
                    </Route>
                    <Route path='/user'>
                        <Header fadein={this.state.fadein} isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
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

export default withRouter(App);
