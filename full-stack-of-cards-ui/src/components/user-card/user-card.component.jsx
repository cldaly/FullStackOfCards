import React from 'react';
import '../flash-card/flash-card.styles.css';
import Axios from 'axios'
import {Card} from '../../models/Card'
import './user-card.styles.css'

class UserCard extends React.Component {

    constructor({flashCard, deleteCard}) {
        super({deleteCard})
        this.state = {
            questionError : false,
            answerError : false,
            flashCard : flashCard,            
            editing: false,
            deleteCard : deleteCard
        }
    }

    Edit = () => {
        //this.state.editing = true;
        this.setState({editing : true}) 
    }

    Save = () => {
        const question = document.getElementById('eQuestion').value
        const answer = document.getElementById('eAnswer').value
        const link = document.getElementById('eResLink').value
        this.setState({questionError : false})
        this.setState({answerError : false})

        //  Prompt error if question or answer is empty
        if(question === "" || answer === "")
        {
            if(question === '')
                this.setState({questionError : true})
            if(answer === '')
                this.setState({answerError : true})             
            return
        }        

        //  Create a new card to update on database and page
        var newCard = new Card()
        newCard.question = question
        newCard.answer = answer
        newCard.resourceLink = link
        newCard.id = this.state.flashCard.id
        
        Axios.put('http://localhost:8080/flashcards/updateCard', newCard)

        this.setState({flashCard : newCard})
        this.setState({editing : false})
    }

    render()
    {    
        return  (
                <div className='user-card'>
                    {!this.state.editing && 
                        <div className='user-card-content'>
                            <h3>Q: {this.state.flashCard.question}</h3>            
                            <div className="card-details">
                                <p>A: {this.state.flashCard.answer}</p>
                                <div className="card-actions">
                                    <a className='reference' target="_blank" rel='noreferrer noopener' href={this.state.flashCard.resourceLink}>More Info</a>
                                </div>                    
                            </div> 
                            <div className="edit-button-group">
                                <button className="edit-button" style={{float:"left"}} onClick={this.Edit}>Edit</button>
                                <button className="edit-button delete-button" style={{float:"right"}} onClick={() => this.state.deleteCard(this.state.flashCard.id)}>Remove</button>
                            </div>
                        </div>                        
                    }
                    {this.state.editing && 
                        <div className="edit-card-form">
                            <div className="form-group">
                                <div className="edit-card-header">
                                    <label htmlFor="eQuestion">Question:</label>  
                                    {this.state.questionError && <span className="error">Question is required</span>}                                          
                                </div>                            
                                <textarea id="eQuestion" rows={2} className='card-field' type="text" defaultValue={this.state.flashCard.question} />
                            </div>

                            <div className="form-group">
                                <div className="edit-card-header">
                                    <label htmlFor="eAnswer">Answer:</label>  
                                    {this.state.answerError && <span className="error">Answer is required</span>}                                          
                                </div>
                                <textarea id="eAnswer" rows={4} className='card-field' type="text" defaultValue={this.state.flashCard.answer}/>
                            </div>

                            <div className="form-group">
                                <div className="edit-card-header">
                                    <label htmlFor="eResLink">Resource Link:</label>                                          
                                </div>
                                <input id="eResLink" className='card-field' type="text" defaultValue={this.state.flashCard.resourceLink} />
                            </div>

                            <div className="edit-button-group">
                                <button className="edit-button" onClick={this.Save}>Save</button>
                            </div>
                        </div>
                    }
                </div>
                )
    }
}

export default UserCard;