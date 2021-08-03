// import images
//Clubs
import twoClubs from '../../pictures/cards-png/clubs/2Clubs.png'
import threeClubs from '../../pictures/cards-png/clubs/3Clubs.png'
import fourClubs from '../../pictures/cards-png/clubs/4Clubs.png'
import fiveClubs from '../../pictures/cards-png/clubs/5Clubs.png'
import sixClubs from '../../pictures/cards-png/clubs/6Clubs.png'
import sevenClubs from '../../pictures/cards-png/clubs/7Clubs.png'
import eightClubs from '../../pictures/cards-png/clubs/8Clubs.png'
import nineClubs from '../../pictures/cards-png/clubs/9Clubs.png'
import tenClubs from '../../pictures/cards-png/clubs/10Clubs.png'
import jackClubs from '../../pictures/cards-png/clubs/JClubs.png'
import kingClubs from '../../pictures/cards-png/clubs/KClubs.png'
import queenClubs from '../../pictures/cards-png/clubs/QClubs.png'
import aceClubs from '../../pictures/cards-png/clubs/AClubs.png'
//Hearts
import twoHearts from '../../pictures/cards-png/hearts/2Hearts.png'
import threeHearts from '../../pictures/cards-png/hearts/3Hearts.png'
import fourHearts from '../../pictures/cards-png/hearts/4Hearts.png'
import fiveHearts from '../../pictures/cards-png/hearts/5Hearts.png'
import sixHearts from '../../pictures/cards-png/hearts/6Hearts.png'
import sevenHearts from '../../pictures/cards-png/hearts/7Hearts.png'
import eightHearts from '../../pictures/cards-png/hearts/8Hearts.png'
import nineHearts from '../../pictures/cards-png/hearts/9Hearts.png'
import tenHearts from '../../pictures/cards-png/hearts/10Hearts.png'
import jackHearts from '../../pictures/cards-png/hearts/JHearts.png'
import kingHearts from '../../pictures/cards-png/hearts/KHearts.png'
import queenHearts from '../../pictures/cards-png/hearts/QHearts.png'
import aceHearts from '../../pictures/cards-png/hearts/AHearts.png'
//Spades
import twoSpades from '../../pictures/cards-png/spades/2Spades.png'
import threeSpades from '../../pictures/cards-png/spades/3Spades.png'
import fourSpades from '../../pictures/cards-png/spades/4Spades.png'
import fiveSpades from '../../pictures/cards-png/spades/5Spades.png'
import sixSpades from '../../pictures/cards-png/spades/6Spades.png'
import sevenSpades from '../../pictures/cards-png/spades/7Spades.png'
import eightSpades from '../../pictures/cards-png/spades/8Spades.png'
import nineSpades from '../../pictures/cards-png/spades/9Spades.png'
import tenSpades from '../../pictures/cards-png/spades/10Spades.png'
import jackSpades from '../../pictures/cards-png/spades/JSpades.png'
import kingSpades from '../../pictures/cards-png/spades/KSpades.png'
import queenSpades from '../../pictures/cards-png/spades/QSpades.png'
import aceSpades from '../../pictures/cards-png/spades/ASpades.png'
//Diamonds
import twoDiamonds from '../../pictures/cards-png/diamonds/2Diamonds.png'
import threeDiamonds from '../../pictures/cards-png/diamonds/3Diamonds.png'
import fourDiamonds from '../../pictures/cards-png/diamonds/4Diamonds.png'
import fiveDiamonds from '../../pictures/cards-png/diamonds/5Diamonds.png'
import sixDiamonds from '../../pictures/cards-png/diamonds/6Diamonds.png'
import sevenDiamonds from '../../pictures/cards-png/diamonds/7Diamonds.png'
import eightDiamonds from '../../pictures/cards-png/diamonds/8Diamonds.png'
import nineDiamonds from '../../pictures/cards-png/diamonds/9Diamonds.png'
import tenDiamonds from '../../pictures/cards-png/diamonds/10Diamonds.png'
import jackDiamonds from '../../pictures/cards-png/diamonds/JDiamonds.png'
import kingDiamonds from '../../pictures/cards-png/diamonds/KDiamonds.png'
import queenDiamonds from '../../pictures/cards-png/diamonds/QDiamonds.png'
import aceDiamonds from '../../pictures/cards-png/diamonds/ADiamonds.png'

import blankCard from '../../pictures/cards-png/blank.png'
//
import React, { useState } from 'react'
import Card from '../../components/Card/Cardd';
import './PlayPage.css'
import useKeypress from 'react-use-keypress';


const PlayPage = (props) => {
    // deck logic
    // const spades = [aceSpades, twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades ];
    // const hearts = [aceHearts, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts ];
    // const clubs = [aceClubs, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs ];
    // const diamonds = [aceDiamonds, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds ];
    const [player1Points, setPlayer1Points] = (useState(0))
    const [player2Points, setPlayer2Points] = (useState(0))
    const [currentCardKey, setCurrentCardKey] = (useState('blankCard'))
    const [currentCardVal, setCurrentCardVal] = (useState(blankCard))
    const [seenDeck,setSeenDeck] = useState({})
    const [deck, setDeck] = (useState(
        {   'aceDiamonds':aceDiamonds, 'twoDiamonds':twoDiamonds, 'threeDiamonds':threeDiamonds, 'fourDiamonds':fourDiamonds, 'fiveDiamonds':fiveDiamonds, 'sixDiamonds':sixDiamonds, 'sevenDiamonds':sevenDiamonds, 'eightDiamonds':eightDiamonds, 'nineDiamonds':nineDiamonds, 'tenDiamonds':tenDiamonds, 'jackDiamonds':jackDiamonds, 'queenDiamonds':queenDiamonds, 'kingDiamonds':kingDiamonds,
            'aceClubs':aceClubs, 'twoClubs':twoClubs, 'threeClubs':threeClubs, 'fourClubs':fourClubs, 'fiveClubs':fiveClubs, 'sixClubs':sixClubs, 'sevenClubs':sevenClubs, 'eightClubs':eightClubs, 'nineClubs':nineClubs, 'tenClubs':tenClubs, 'jackClubs':jackClubs, 'queenClubs':queenClubs, 'kingClubs':kingClubs,
            'aceHearts':aceHearts, 'twoHearts':twoHearts, 'threeHearts':threeHearts, 'fourHearts':fourHearts, 'fiveHearts':fiveHearts, 'sixHearts':sixHearts, 'sevenHearts':sevenHearts, 'eightHearts':eightHearts, 'nineHearts':nineHearts, 'tenHearts':tenHearts, 'jackHearts':jackHearts, 'queenHearts':queenHearts, 'kingHearts':kingHearts,
            'aceSpades':aceSpades, 'twoSpades':twoSpades, 'threeSpades':threeSpades, 'fourSpades':fourSpades, 'fiveSpades':fiveSpades, 'sixSpades':sixSpades, 'sevenSpades':sevenSpades, 'eightSpades':eightSpades, 'nineSpades':nineSpades, 'tenSpades':tenSpades, 'jackSpades':jackSpades, 'queenSpades':queenSpades, 'kingSpades':kingSpades 

        }
    ))
    useKeypress(['Enter', ' '], (e) => {
        if(e.code === 'Space'){
            console.log('Player 1 clicked Space');
            if(currentCardKey.includes('jack')){
                changePlayer1PointsBy(Object.keys(seenDeck).length);
                retrieveAndRemoveRandom();
                setSeenDeck({})
            } else {
                changePlayer1PointsBy(-5);
            }
        }

        if(e.code === 'Enter'){
            if(currentCardKey.includes('jack')){
                changePlayer2PointsBy(Object.keys(seenDeck).length);
                retrieveAndRemoveRandom();
                setSeenDeck({})
            } else {
                changePlayer2PointsBy(-5);
            }
        }
    });
    
    // const displayCards = (deck) => {
        //     let cards=[]
        //     for(let [key,value] of Object.entries(deck)){
            //         cards.push(<Card image={value} name={key}/>)
            //     }
            //     return cards
            // }
    const currentCard = () =>{
        return <Card image={currentCardVal} name={currentCardKey}/>
    } 
    const retrieveAndRemoveRandom = () => {
        // retrieve from array but mutate object for best time complexity
        // retrieve from array because we can only generate random index number and not random card name
        let index = Object.entries(deck);
        if(index.length < 1){
            return setCurrentCardKey('blankCard'), setCurrentCardVal(blankCard);
        }
        let randomCardNumber = Math.floor(Math.random() * index.length); 
        //get the random card
        let [cardKey,cardVal] = index[randomCardNumber];
        //push random card into pile of seen cards and delete from unseen deck
        // there has to be a more elegeant way to do thi
        // could do seenDeck[`${cardKey}`] = cardVal
        // but how do we utilize object.assign for this
        // setSeenDeck(Object.assign(seenDeck,{cardKey:cardVal})); is what i want to do
        let newObj = {};
        newObj[`${cardKey}`] = cardVal
        setSeenDeck(Object.assign(seenDeck,newObj))
        delete deck[cardKey];
        return setCurrentCardKey(cardKey), setCurrentCardVal(cardVal);
    }

    const changePlayer1PointsBy = (x) =>{
        setPlayer1Points(player1Points + x)
    }

    const changePlayer2PointsBy = (x) =>{
        setPlayer2Points(player2Points + x)
    }
    return (
        <>
            <div  className='playPage' >
                <div className='pointsContainer'>
                    <p className='points'>{props.player1Name ? props.player1Name : 'Player 1'}: {player1Points}</p>
                    <p>Cards to win: {Object.keys(seenDeck).length}</p>
                    <p className='points'>{props.player2Name ? props.player2Name : 'Player 2'}: {player2Points}</p>
                </div>
                {currentCard()}
                <p onClick={retrieveAndRemoveRandom}>Next Card</p>
            </div>
                
        </>
    )
}

export default PlayPage;
