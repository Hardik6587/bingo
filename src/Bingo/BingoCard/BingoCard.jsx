
import React from 'react';
import './BingoCard.css';

const BingoCard = ({
    item,
    cardIndex,
    selectCard
}) => {
    //Calling Select Card from parent fn
    const selectBingoCard = () => {
        selectCard(cardIndex);
    }
    return (
        <div className="bingo-card">
            {   item.selected && !item.bingo
                && <img className="bingo-selected" src={item.image} alt={item.name}/>
            }
            {   !item.selected
                && <span className="card-name" onClick={selectBingoCard}> {item.name} </span>
            }
            {   item.bingo
                && (
                    <>
                <img className="bingo-done" src="/images/bingo.jpg" alt={item.name}/>
                <span className="bingo-player"> {item.name} </span>
                </>)
            }
        </div>
  );
}

export default BingoCard;
