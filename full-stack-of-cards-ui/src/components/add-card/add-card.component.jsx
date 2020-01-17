import React from 'react';
import './add-card.styles.css';

class AddCard extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading:false
            }
        }
        render() {
            const { loading } = this.state;
            return (
                <div className="new-card">
                    <h4>Add a new flash card</h4>
                    <div className="new-card-form">
                        <div className="form-group">
                            <label htmlFor="question">Question</label>
                            <textarea maxLength={200} rows={3} className='card-field' id='question' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="answer">Answer</label>
                            <textarea maxLength={200} rows={3} className='card-field' id='answer' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resourceLink">Link to resource</label>
                            <input type='text' className='card-field' id='resourceLink' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resourceName">Name for link</label>
                            <input type='text' className='card-field' id='resourceName' />
                        </div>
                        <button id='new-btn'>
                            {loading && <span className="loading"></span>}
                            <span>Submit Question</span>
                        </button>
                    </div>
                </div>
            )
        }
    }

export default AddCard;