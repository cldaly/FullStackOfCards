import React from 'react';
import './add-card.styles.css';

class AddCard extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading:false
            }
        }


        validateCard = () => {

        }

        render() {
            const { loading, questionError, answerError } = this.state;
            return (
                <div className="new-card">
                    <h4>Add a new flash card</h4>
                    <div className="new-card-form">
                        <div className="form-group">
                            <div className='new-card-header'>
                                <label htmlFor="question">Question</label>
                                {questionError && <span className="error">Question is required</span>}
                            </div>
                            <textarea maxLength={100} rows={2} className='card-field' id='question' />
                        </div>
                        <div className="form-group">
                            <div className='new-card-header'>
                                <label htmlFor="answer">Answer</label>
                                {answerError && <span className="error">Answer is required</span>}
                            </div>
                            <textarea maxLength={250} rows={3} className='card-field' id='answer' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resourceLink">Link to resource</label>
                            <input type='text' className='card-field' id='resourceLink' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resourceName">Name for link</label>
                            <input type='text' className='card-field' id='resourceName' />
                        </div>
                        <button id='new-btn' onClick={this.validateCard}>
                            {loading && <span className="loading"></span>}
                            <span>Submit Question</span>
                        </button>
                    </div>
                </div>
            )
        }
    }

export default AddCard;