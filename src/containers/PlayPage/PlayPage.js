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
//
import React from 'react'
import Card from '../../components/Card/Cardd';
import './PlayPage.css'

const PlayPage = () => {
    // deck logic
    // const spades = [aceSpades, twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades ];
    // const hearts = [aceHearts, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts ];
    // const clubs = [aceClubs, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs ];
    // const diamonds = [aceDiamonds, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds ];
    const deck = [aceDiamonds, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds,
                    aceClubs, twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs,
                    aceHearts, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts,
                    aceSpades, twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades 

                ]
    
    debugger;
    //
    return (
        <>
            <Card/>
            {
                deck.map(card=><img src={card}/>)
            }
            <img src={twoClubs}/>
        </>
    )
}

export default PlayPage;
