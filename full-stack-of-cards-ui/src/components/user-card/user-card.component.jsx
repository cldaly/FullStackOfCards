import React from 'react';
import '../flash-card/flash-card.styles.css';

class UserCard extends React.Component {

    constructor({flashCard}) {
        super()
        this.state = {
            flashCard : flashCard,
            editing: false
        }
    }

    Edit = () => {
        //this.state.editing = true;
        this.setState({editing : true}) 
    }

    Save = () => {
        this.setState({editing : false})
    }

    render()
    {    
        return  (
                <div className='card'>
                    {!this.state.editing && 
                        <div>
                            <h3>Q: {this.state.flashCard.question}</h3>            
                            <div className="card-details">
                                <p>A: {this.state.flashCard.answer}</p>
                                <div className="card-actions">
                                    <a className='reference' target="_blank" rel='noreferrer noopener' href={this.state.flashCard.resourceLink}>{this.state.flashCard.resourceName}</a>
                                </div>                    
                            </div> 
                            <button onClick={this.Edit}>Edit</button>
                        </div>                        
                    }
                    {this.state.editing && 
                        <div>
                            <h3>Q: <input type="text" value={this.state.flashCard.question} /></h3>            
                            <div className="card-details">
                                <p>A: <input type="text" value={this.state.flashCard.answer}/></p>
                                <div className="card-actions">
                                    <p>Resource Label: <input type="text" value={this.state.flashCard.resourceName}/></p>
                                    <p>Resource Link: <input type="text" value={this.state.flashCard.resourceLink} /></p>
                                </div>                    
                            </div> 
                            <button onClick={this.Save}>Save</button>
                        </div>
                    }
                    
                </div>
                )
    }
}

export default UserCard;