import React from 'react';
import './cards.styles.css';
import Axios from 'axios';
import { Card } from '../../models/Card';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            finishedCards: [],
            flashCard: new Card(),
            status: 'hold'
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:8080/flashcards/getCards')
        .then(data => {
            return JSON.parse(data.request.response);
        })
        .then(cards => {
            this.setState({cards:cards}, () => {

                this.pickCard();
            });
        }).catch(error => {
            console.log(error)
        })
    }

    pickCard = () => {
        console.log(this.state);
        let card = new Card();
        do {
            card = this.state.cards[Math.floor(Math.random()*this.state.cards.length)];
            console.log(card)
        } while (this.state.finishedCards.includes(card.id));
        console.log(card)
        this.setState({flashCard:card});
    }

    render(){
        const { flashCard } = this.state;
        return(
            <ul>
                <li>{flashCard.id}</li>
                <li>{flashCard.question}</li>
                <li>{flashCard.answer}</li>
                <li><a target="_blank" rel='noreferrer noopener' href={flashCard.resourceLink}>{flashCard.resourceName}</a></li>
            </ul>
        )
    }
}

export default Cards;