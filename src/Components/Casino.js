import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setCards } from '../Actions/GameActions';
import PlaySong from './PlaySong';

function Casino() {
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });

  const dispatch = useDispatch();

  const [cardDeck, setDeck ]  = useState([
{card_number: 1, value: 1, image_url: "./Assets/cards/spades/AS.jpg"},
{card_number: 2, value: 2, image_url: "./Assets/cards/spades/2S.jpg"},
{card_number: 3, value: 3, image_url: "./Assets/cards/spades/3S.jpg"},
{card_number: 4, value: 4, image_url: "./Assets/cards/spades/4S.jpg"},
{card_number: 5, value: 5, image_url: "./Assets/cards/spades/5S.jpg"},
{card_number: 6, value: 6, image_url: "./Assets/cards/spades/6S.jpg"},
{card_number: 7, value: 7, image_url: "./Assets/cards/spades/7S.jpg"},
{card_number: 8, value: 8, image_url: "./Assets/cards/spades/8S.jpg"},
{card_number: 9, value: 9, image_url: "./Assets/cards/spades/9S.jpg"},
{card_number: 10, value: 10, image_url: "./Assets/cards/spades/10S.jpg"},
{card_number: 11, value: 10, image_url: "./Assets/cards/spades/JS.jpg"},
{card_number: 12, value: 10, image_url: "./Assets/cards/spades/QS.jpg"},
{card_number: 13, value: 10, image_url: "./Assets/cards/spades/KS.jpg"},

{card_number: 27, value: 1, image_url: "./Assets/cards/hearts/AH.jpg"},
{card_number: 28, value: 2, image_url: "./Assets/cards/hearts/2H.jpg"},
{card_number: 29, value: 3, image_url: "./Assets/cards/hearts/3H.jpg"},
{card_number: 30, value: 4, image_url: "./Assets/cards/hearts/4H.jpg"},
{card_number: 31, value: 5, image_url: "./Assets/cards/hearts/5H.jpg"},
{card_number: 32, value: 6, image_url: "./Assets/cards/hearts/6H.jpg"},
{card_number: 33, value: 7, image_url: "./Assets/cards/hearts/7H.jpg"},
{card_number: 34, value: 8, image_url: "./Assets/cards/hearts/8H.jpg"},
{card_number: 35, value: 9, image_url: "./Assets/cards/hearts/9H.jpg"},
{card_number: 36, value: 10, image_url: "./Assets/cards/hearts/10H.jpg"},
{card_number: 37, value: 10, image_url: "./Assets/cards/hearts/JH.jpg"},
{card_number: 38, value: 10, image_url: "./Assets/cards/hearts/QH.jpg"},
{card_number: 39, value: 10, image_url: "./Assets/cards/hearts/KH.jpg"},

{card_number: 14, value: 1, image_url: "./Assets/cards/clubs/AC.jpg"},
{card_number: 15, value: 2, image_url: "./Assets/cards/clubs/2C.jpg"},
{card_number: 16, value: 3, image_url: "./Assets/cards/clubs/3C.jpg"},
{card_number: 17, value: 4, image_url: "./Assets/cards/clubs/4C.jpg"},
{card_number: 18, value: 5, image_url: "./Assets/cards/clubs/5C.jpg"},
{card_number: 19, value: 6, image_url: "./Assets/cards/clubs/6C.jpg"},
{card_number: 20, value: 7, image_url: "./Assets/cards/clubs/7C.jpg"},
{card_number: 21, value: 8, image_url: "./Assets/cards/clubs/8C.jpg"},
{card_number: 22, value: 9, image_url: "./Assets/cards/clubs/9C.jpg"},
{card_number: 23, value: 10, image_url: "./Assets/cards/clubs/10C.jpg"},
{card_number: 24, value: 10, image_url: "./Assets/cards/clubs/JC.jpg"},
{card_number: 25, value: 10, image_url: "./Assets/cards/clubs/QC.jpg"},
{card_number: 26, value: 10, image_url: "./Assets/cards/clubs/KC.jpg"},

{card_number: 40, value: 1, image_url: "./Assets/cards/diamonds/AD.jpg"},
{card_number: 41, value: 2, image_url: "./Assets/cards/diamonds/2D.jpg"},
{card_number: 42, value: 3, image_url: "./Assets/cards/diamonds/3D.jpg"},
{card_number: 43, value: 4, image_url: "./Assets/cards/diamonds/4D.jpg"},
{card_number: 44, value: 5, image_url: "./Assets/cards/diamonds/5D.jpg"},
{card_number: 45, value: 6, image_url: "./Assets/cards/diamonds/6D.jpg"},
{card_number: 46, value: 7, image_url: "./Assets/cards/diamonds/7D.jpg"},
{card_number: 47, value: 8, image_url: "./Assets/cards/diamonds/8D.jpg"},
{card_number: 48, value: 9, image_url: "./Assets/cards/diamonds/9D.jpg"},
{card_number: 49, value: 10, image_url: "./Assets/cards/diamonds/10D.jpg"},
{card_number: 50, value: 10, image_url: "./Assets/cards/diamonds/JD.jpg"},
{card_number: 51, value: 10, image_url: "./Assets/cards/diamonds/QD.jpg"},
{card_number: 52, value: 10, image_url: "./Assets/cards/diamonds/KD.jpg"},
  ]);

  const fetchDeck = () => {
    dispatch(setCards(cardDeck));
  };

  useEffect(() => {
    fetchDeck();
  }, []);

// const PlaySong = (
//   handleSongLoading,
//   handleSongPlaying,
//   handleSongFinishedPlaying
// ) => { 
//   return(
//   <div>
//   <Sound
//   url={backgroundMusic}
//   playStatus={Sound.status.PLAYING}
//   playFromPosition={300}
//   onLoading={handleSongLoading}
//   onPlaying={handleSongPlaying}
//   onFinishedPlaying={handleSongFinishedPlaying}
//   />
// </div>
// );
// }

  console.log("Card Deck?", cardDeck)
 const Background = "./Assets/cards/diamonds/KD.jpg"
  var CurrentCardStyle = {
    width: "200px",
    height: "245px",
    backgroundImage: "url(" + { Background } + ")"
  };

  var PreviousCardStyle = {
    width: "200px",
    height: "245px",
    backgroundImage: "url(" + { Background } + ")"
  };

  // current and prevCard stype will by assigned AFTER the random select
  return (
    <>
        <div id="casino_floor">
    <h1 id="welcomed">
      <center><PlaySong/></center>
    </h1>
    <main >
        <center><p id="main"> Higer-Lower</p></center>
    </main>
    <div id="currentCardArea" style={ CurrentCardStyle }></div>
    <div id="previousCardArea" style={ PreviousCardStyle }></div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    Cards: state.Cards
  }

}

const mapDispatchToProps = (dispatch) => {
  console.log("Deck loaded")
  return{
    findEntry: (cardDeck) => { dispatch({type: 'SET_CARDS', cardDeck})}
  }
}


     export default connect(mapStateToProps, mapDispatchToProps)(Casino); 