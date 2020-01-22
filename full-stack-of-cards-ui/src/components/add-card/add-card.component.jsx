import React from 'react';
import './add-card.styles.css';
import Axios from 'axios';

class AddCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted:false,
            loading:false,
            question: '',
            answer: '',
            link: '',
            message: ''
        }
    }

    validateCard = () => {
        this.setState({submitted:true}, () => {
            if (this.state.question !== '' && this.state.question !== undefined 
                && this.state.answer !== '' && this.state.answer !== undefined) {
                this.addNewCard();
            }
        })
    }

    addNewCard = () => {
        this.setState({loading:true}, () => {
            const card = {
                question:this.state.question,
                answer:this.state.answer,
                resourceLink:this.state.link,
                userId:localStorage.getItem('user-id')
            }
            Axios.post('https://full-stack-cards-backend.herokuapp.com/api/flashcards/addCard', card)
            .then(()=>{
                this.setState({question:'', answer:'', link:'', message: 'Flash card has been added!', loading:false, submitted:false})
            }).catch(err => {
                console.log(err);
            })
        })
    }

    handleQuestion = (e) => { this.setState({question:e.target.value}) }
    handleAnswer = (e) => { this.setState({answer:e.target.value}) }
    handleLink = (e) => { this.setState({link:e.target.value}) }

    closeMessage = () => { this.setState({message: ''}) }

    render() {
        const { loading, question, answer, link, submitted, message } = this.state;
        return (
            <div className="new-card-page">
                {message !== '' && 
                    <div className="message">
                        <h4>{message}</h4>
                        <span className='close' onClick={this.closeMessage}>close</span>
                    </div>
                }
                <div className="new-card">
                    <h4>Add a new flash card</h4>
                    <div className='new-card-form'>
                        <div className="form-group">
                            <div className='new-card-header'>
                                <label htmlFor="question">Question *</label>
                                {(question === '' || question === undefined) && submitted && <span className="error">Question is required</span>}
                            </div>
                            <textarea maxLength={100} rows={2} className='card-field' value={question} onChange={this.handleQuestion} />
                        </div>
                        <div className="form-group">
                            <div className='new-card-header'>
                                <label htmlFor="answer">Answer *</label>
                                {(answer === '' || answer === undefined) && submitted  && <span className="error">Answer is required</span>}
                            </div>
                            <textarea maxLength={400} rows={4} className='card-field' value={answer} onChange={this.handleAnswer} />
                        </div>
                        <div className="form-group">
                            <div className='new-card-header'>
                                <label htmlFor="resourceLink">Link to resource</label>
                            </div>
                            <input type='text' className='card-field' value={link} onChange={this.handleLink} />
                        </div>
                        <button id='new-btn' onClick={this.validateCard}>
                            {loading && <span className="loading"></span>}
                            <span>Submit Card</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCard;