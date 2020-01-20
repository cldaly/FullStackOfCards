import React from 'react'
import UserCard from '../user-card/user-card.component'
import Axios from 'axios'
import './user-cards.styles.css'

class UserCards extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            cards : [],
            count : 0
        }           
    }

    componentDidMount(){
       this.getCards();
    }

    getCards = () => {
        console.log("Gettin New Cards");
        Axios.get('http://localhost:8080/flashcards/getUserCards', localStorage.getItem('user-id'))
        .then(data => {            
            return JSON.parse(data.request.response);
        })
        .then(cards => {
            this.setState({cards:cards})
            this.setState({count : cards.length})
        }).catch(error => {
            console.log(error)
        })
    }
    
    deleteCard = (id) => {
        Axios.delete('http://localhost:8080/flashcards/removeCard/'+ id).then(data => this.getCards());
        
        //this.setState({count : this.state.count - 1})
    }

    render() {        
        return  <div className="user-card-page">
                    <h2>Your Cards</h2>
                    <div className="user-cards">                        
                        {this.state.cards.map(card => <UserCard key={card.id} className="user-card" flashCard={card} deleteCard={this.deleteCard}/>)}  
                    </div>
                </div>
    }
}

export default UserCards