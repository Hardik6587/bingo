
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import BingoCard from './BingoCard/BingoCard'
import utils from '../utils/utils';
import './Bingo.css';

const Bingo = forwardRef(({
    setLoading
}, ref) => {
    // setting intial dummy data for loading scene
    const [items, setItems] = useState(utils.getAllPlayers().slice(0, 25)); 
    // reset game scene flag
    const [gameReset, setResetGame] = useState(true); // reset game state
    // resetting game with dummy data and playing scene
    const resetGame = () => {
        setLoading(true);
        setItems(utils.getAllPlayers().slice(0, 25));
        setResetGame(true);
    }

    useImperativeHandle(ref, () => ({
        resetBingo() {
            resetGame();
        }
    }));

    // reset game scene
    useEffect(() => {
        if(gameReset) {
            const allBingoCards = document.querySelectorAll('.bingo-card');
            const interval = setInterval(() => {
                const nextNumber = utils.getRandomNumberForLoading();
                const nextCard = allBingoCards[nextNumber];
                nextCard.classList.add('bingo-card-load');
                setTimeout(() => {
                    nextCard.classList.remove('bingo-card-load');
                }, 90);
                
            }, 100);
            setTimeout(() => {
                clearInterval(interval);
                setLoading(false);
                setItems(utils.getBingoList());
                setResetGame(false);
            }, 3200);
        }
    }, [gameReset]);

    // select card function
    const selectCard = (index) => {
        const newList = [...items];
        newList[index].selected = true;
        setItems(newList);
        // checking bingo and setting bingo flag if bingo found
        utils.checkBingo(index, newList);
    };

    return (
        <div className="bingo">
        {
            items && items.map((item, index) => {
                return (
                    <BingoCard 
                        key={item.image}
                        item={item}
                        cardIndex={index}
                        selectCard={selectCard}
                    />
                )
          })
        }
    </div>
  );
});

export default Bingo;
