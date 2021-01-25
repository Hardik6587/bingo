// Dummy player to display
// 5 teams with 8 players each
const getAllPlayers = () => {
    return [{
        name: 'Alisson Becker', selected: false, image: '/images/liverpool1.jpg'
    }, {
        name: 'Jordan Henderson', selected: false, image: '/images/liverpool2.jpg'
    }, {
        name: 'Virgil Van Daijk', selected: false, image: '/images/liverpool3.jpg'
    }, {
        name: 'Andrew Robertson', selected: false, image: '/images/liverpool4.jpg'
    }, {
        name: 'Steven Gerrard', selected: false, image: '/images/liverpool5.jpg'
    }, {
        name: 'Xander Shakiri', selected: false, image: '/images/liverpool6.jpg'
    }, {
        name: 'Mohamed Salah', selected: false, image: '/images/liverpool7.jpg'
    }, {
        name: 'Bobby Firminho', selected: false, image: '/images/liverpool8.jpg'
    }, {
        name: 'Roman Bürki', selected: false, image: '/images/dortmund1.jpg'
    }, {
        name: 'Dan-Axel Zagadou', selected: false, image: '/images/dortmund2.jpg'
    }, {
        name: 'Jadon Sancho', selected: false, image: '/images/dortmund3.jpg'
    }, {
        name: 'Mahmoud Dahoud', selected: false, image: '/images/dortmund4.jpg'
    }, {
        name: 'Erling Haaland', selected: false, image: '/images/dortmund5.jpg'
    }, {
        name: 'Marco Reus', selected: false, image: '/images/dortmund6.jpg'
    }, {
        name: 'Mats Hummels', selected: false, image: '/images/dortmund7.jpg'
    }, {
        name: 'Nico Schulz', selected: false, image: '/images/dortmund8.jpg'
    }, {
        name: 'Manuel Neuer', selected: false, image: '/images/munich1.jpg'
    }, {
        name: 'Benjamin Pavard', selected: false, image: '/images/munich2.jpg'
    }, {
        name: 'Serge Gnabry', selected: false, image: '/images/munich3.jpg'
    }, {
        name: 'Robert Lewandowski', selected: false, image: '/images/munich4.jpg'
    }, {
        name: 'Leroy Sané', selected: false, image: '/images/munich5.jpg'
    }, {
        name: 'Douglas Costa', selected: false, image: '/images/munich6.jpg'
    }, {
        name: 'Jérôme Boateng', selected: false, image: '/images/munich7.jpg'
    }, {
        name: 'Thomas Müller', selected: false, image: '/images/munich8.jpg'
    }, {
        name: 'Paul Pogba', selected: false, image: '/images/manchester1.jpg'
    }, {
        name: 'Edinson Cavani', selected: false, image: '/images/manchester2.jpg'
    }, {
        name: 'Bruno Fernandes', selected: false, image: '/images/manchester3.jpg'
    }, {
        name: 'Harry Maguire', selected: false, image: '/images/manchester4.jpg'
    }, {
        name: 'Donny van de Beek', selected: false, image: '/images/manchester5.jpg'
    }, {
        name: 'Luke Shaw', selected: false, image: '/images/manchester6.jpg'
    }, {
        name: 'Fred', selected: false, image: '/images/manchester7.jpg'
    }, {
        name: 'Marcus Rashford', selected: false, image: '/images/manchester8.jpg'
    }, {
        name: 'Marc-André ter Stegen', selected: false, image: '/images/barcelona1.jpg'
    }, {
        name: 'Gerard Piqué', selected: false, image: '/images/barcelona2.jpg'
    }, {
        name: 'Sergio Busquets', selected: false, image: '/images/barcelona3.jpg'
    }, {
        name: 'Antoine Griezmann', selected: false, image: '/images/barcelona4.jpg'
    }, {
        name: 'Lionel Messi', selected: false, image: '/images/barcelona5.jpg'
    }, {
        name: 'Philippe Coutinho', selected: false, image: '/images/barcelona6.jpg'
    }, {
        name: 'Jordi Alba', selected: false, image: '/images/barcelona7.jpg'
    }, {
        name: 'Sergi Roberto', selected: false, image: '/images/barcelona8.jpg'
    }];
}

// random number generator for fetching the player from array index
const getRandomNumberForLoading = () => {
    return Math.floor(Math.random()* 25);
};

// getting 25 player randomly from the array
const getBingoList = () => {
    const playerList = getAllPlayers();
    const newSet = new Set();
    while(newSet.size !== 25) {
        const newNumber = Math.floor(Math.random()*playerList.length);
        newSet.add(newNumber);
    }
    const randomNumbers = [...newSet];
    const bingoList = [];
    for(let i=0 ;i<25; i++){
        const player = playerList[randomNumbers[i]];
        if(i === 12) {
            player.selected = true;
        }
        bingoList.push(player);
    }
    return bingoList;
};

// Checking bingo on row which card is selected
const checkOrSetRowBingo = (rowIndex, bingoList, setBingo = false) => {
    let rowBingo = true;
    for(let i=rowIndex; i<rowIndex+5; i++) {
        if(setBingo) {
            bingoList[i].bingo = true;
        } else if(bingoList[i].selected !== true) {
            rowBingo = false;
            break;
        }
    }
    return rowBingo;
};

// Checking bingo on column which card is selected
const checkOrSetColBingo = (colIndex, bingoList, setBingo = false) => {
    let colBingo = true;
    for(let i=0; i<5; i++) {
        if(setBingo) {
            bingoList[(colIndex+(i*5))].bingo = true;
        } else if(bingoList[(colIndex+(i*5))].selected !== true) {
            colBingo = false;
            break;
        }
    }
    return colBingo;
};

// checking forward diagonal Bingo
const checkForwardDiagBingo = (bingoList, setBingo = false) => {
    let forwardBingo = true;
    for(let i=0; i<5; i++) {
        if(setBingo) {
            bingoList[(i*5) + i].bingo = true;
        }
        if(bingoList[(i*5) + i].selected !== true) {
            forwardBingo = false;
            break;
        }
    }
    return forwardBingo;
};

// Checking reverse diagonal bingo
const checkReverseDiagBingo = (bingoList, setBingo = false) => {
    let reverseBingo = true;
    for(let i=1; i<=5; i++) {
        if(setBingo) {
            bingoList[(i*5) - i].bingo = true;
        }
        if(bingoList[(i*5) - i].selected !== true) {
            reverseBingo = false;
            break;
        }
    }
    return reverseBingo;
};

// fn to check any possible bingo
const checkBingo = (index, list) => {
    const row = parseInt(index/5) * 5;
    const col = parseInt(index%5);

    const rowBingo = checkOrSetRowBingo(row, list);
    if(rowBingo) {
        checkOrSetRowBingo(row, list, true);
    }
    
    const columnBingo = checkOrSetColBingo(col, list);
    if(columnBingo) {
        checkOrSetColBingo(col, list, true);
    }

    const forwardBingo = checkForwardDiagBingo(list);
    if(forwardBingo) {
        checkForwardDiagBingo(list, true);
    }

    const reverseBingo = checkReverseDiagBingo(list);
    if(reverseBingo) {
        checkReverseDiagBingo(list, true);
    }
};


const utils = {
    getRandomNumberForLoading,
    getBingoList,
    checkOrSetRowBingo,
    checkOrSetColBingo,
    checkBingo,
    getAllPlayers
}

export default utils;