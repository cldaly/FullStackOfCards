import React from 'react'
import UserCard from '../components/user-card/user-card.component'
import Axios from 'axios'
import './user-cards.styles.css'

class UserCards extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            cards : []
        }           
    }

    componentDidMount(){
        Axios.get('http://localhost:8080/flashcards/getCards')
        .then(data => {            
            return JSON.parse(data.request.response);
        })
        .then(cards => {
            this.setState({cards:cards})
        }).catch(error => {
            console.log(error)
        })
    }

    render() {        
        return  <div className="user-cards">
                    {this.state.cards.map(card => <UserCard key={card.id} className="user-card" flashCard={card}/>)}  
                </div>
    }
}

export default UserCards