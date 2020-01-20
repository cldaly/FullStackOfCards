import React from 'react';
import '../flash-card/flash-card.styles.css';
import Axios from 'axios'
import {Card} from '../../models/Card'
import './user-card.styles.css'

class UserCard extends React.Component {

    constructor({flashCard}) {
        super()
        this.state = {
            questionError : false,
            answerError : false,
            flashCard : flashCard,            
            editing: false
        }
    }

    Edit = () => {
        //this.state.editing = true;
        this.setState({editing : true}) 
    }

    Remove = () => {
        Axios.delete('http://localhost:8080/flashcards/removeCard/'+ this.state.flashCard.id)
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
                        <div>
                            <h3>Q: {this.state.flashCard.question}</h3>            
                            <div className="card-details">
                                <p>A: {this.state.flashCard.answer}</p>
                                <div className="card-actions">
                                    <a className='reference' target="_blank" rel='noreferrer noopener' href={this.state.flashCard.resourceLink}>More Info</a>
                                </div>                    
                            </div> 
                            <button id='edit-btn' onClick={this.Edit}>Edit</button>
                            <button id='edit-btn' onClick={this.Remove}>Remove</button>
                        </div>                        
                    }
                    {this.state.editing && 
                        <div className="edit-card-form">
                            <div className="form-group">
                                <div className="edit-card-header">
                                    <label htmlFor="eQuestion">Question:</label>  
                                    {this.state.questionError && <span className="error">Question is required</span>}                                          
                                </div>                            
                                <textarea id="eQuestion" className='card-field' type="text" defaultValue={this.state.flashCard.question} />
                            </div>

                            <div className="form-group">
                                <div className="edit-card-header">
                                    <label htmlFor="eAnswer">Answer:</label>  
                                    {this.state.answerError && <span className="error">Answer is required</span>}                                          
                                </div>
                                <textarea id="eAnswer" className='card-field' type="text" defaultValue={this.state.flashCard.answer}/>
                            </div>

                            <div className="form-group">
                                <div className="edit-card-header">
                                    <label htmlFor="eResLink">Resource Link:</label>                                          
                                </div>
                                <input id="eResLink" className='card-field' type="text" defaultValue={this.state.flashCard.resourceLink} />
                            </div>

                            <button id='edit-btn' onClick={this.Save}>Save</button>
                        </div>
                    }
                </div>
                )
    }
}

export default UserCard;