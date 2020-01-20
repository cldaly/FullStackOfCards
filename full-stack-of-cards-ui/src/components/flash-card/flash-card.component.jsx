import React from 'react';
import './flash-card.styles.css';

const FlashCard = ({flashCard, show, next}) => {

    return(
        <div className='card'>
            <h3>{flashCard.question}</h3>            
            {!flashCard.showAnswer && <button onClick={show} className='show-answer'>Show Answer</button>}
            {flashCard.showAnswer && 
            <div className="card-details">
                <p>{flashCard.answer}</p>
                <div className="card-actions">
                    <a className='reference' target="_blank" rel='noreferrer noopener' href={flashCard.resourceLink}>More info.</a>
                    <button onClick={next} className="next">Next Card</button>
                </div>
                
            </div>
            }
        </div>
    )
}

export default FlashCard;