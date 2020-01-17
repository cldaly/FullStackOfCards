import React from 'react';
import Axios from 'axios';
import { Card } from '../../models/Card';
import FlashCard from '../flash-card/flash-card.component';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            finishedCards: [],
            flashCard: new Card(),
            status: 'loading'
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
        let card = new Card();
        do {
            card = this.state.cards[Math.floor(Math.random()*this.state.cards.length)];
            console.log(card)
        } while (this.state.finishedCards.includes(card.id));
        card.showAnswer = false;
        this.setState({flashCard:card, status:'done'});
    }

    next = () => {
        let finished = this.state.finishedCards;
        finished.push(this.state.flashCard.id);
        if (this.state.finishedCards.length < this.state.cards.length) {
            this.setState({finishedCards:finished}, () => {
                this.pickCard();
            })
        } else {
            this.setState({finishedCards:[]}, () => {
                this.pickCard();
            })
        }
    }

    show = () => {
        let card = this.state.flashCard;
        card.showAnswer = true;
        this.setState({ flashCard:card })
    }

    render(){
        const { flashCard, status } = this.state;
        return(
            <div className="cards">
                {status === 'done' && <FlashCard flashCard={flashCard} show={this.show} next={this.next} />}
            </div>
            
        )
    }
}

export default Cards;