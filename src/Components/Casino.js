import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setCards } from '../Actions/GameActions';
import PlaySong from './PlaySong';
import BillBoard from './Marquee';
import swal from 'sweetalert';

function Casino() {
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  });
  window.onload = setup;

  const dispatch = useDispatch();

  const [cardDeck, setDeck ]  = useState([
    // {require('../public/spades/2S.jpg').default}
{card_number: 1, value: 1, image_url: "{require('../public/spades/AS.jpg').default}"},
{card_number: 2, value: 2, image_url: "{require('../public/spades/2S.jpg').default}"},
{card_number: 3, value: 3, image_url: "{require('../public/spades/3S.jpg').default}"},
{card_number: 4, value: 4, image_url: "{require('../public/spades/4S.jpg').default}"},
{card_number: 5, value: 5, image_url: "{require('../public/spades/5S.jpg').default}"},
{card_number: 6, value: 6, image_url: "{require('../public/spades/6S.jpg').default}"},
{card_number: 7, value: 7, image_url: "{require('../public/spades/7S.jpg').default}"},
{card_number: 8, value: 8, image_url: "{require('../public/spades/8S.jpg').default}"},
{card_number: 9, value: 9, image_url: "{require('../public/spades/9S.jpg').default}"},
{card_number: 10, value: 10, image_url: "{require('../public/spades/10S.jpg').default}"},
{card_number: 11, value: 10, image_url: "{require('../public/spades/JS.jpg').default}"},
{card_number: 12, value: 10, image_url: "{require('../public/spades/QS.jpg').default}"},
{card_number: 13, value: 10, image_url: "{require('../public/spades/KS.jpg').default}"},

{card_number: 27, value: 1, image_url: "{require('../public/hearts/AH.jpg').default}"},
{card_number: 28, value: 2, image_url: "{require('../public/hearts/2H.jpg').default}"},
{card_number: 29, value: 3, image_url: "{require('../public/hearts/3H.jpg').default}"},
{card_number: 30, value: 4, image_url: "{require('../public/hearts/4H.jpg').default}"},
{card_number: 31, value: 5, image_url: "{require('../public/hearts/5H.jpg').default}"},
{card_number: 32, value: 6, image_url: "{require('../public/hearts/6H.jpg').default}"},
{card_number: 33, value: 7, image_url: "{require('../public/hearts/7H.jpg').default}"},
{card_number: 34, value: 8, image_url: "{require('../public/hearts/8H.jpg').default}"},
{card_number: 35, value: 9, image_url: "{require('../public/hearts/9H.jpg').default}"},
{card_number: 36, value: 10, image_url: "{require('../public/hearts/10H.jpg').default}"},
{card_number: 37, value: 10, image_url: "{require('../public/hearts/JH.jpg').default}"},
{card_number: 38, value: 10, image_url: "{require('../public/hearts/QH.jpg').default}"},
{card_number: 39, value: 10, image_url: "{require('../public/hearts/KH.jpg').default}"},

{card_number: 14, value: 1, image_url: "{require('../public/clubs/AC.jpg').default}"},
{card_number: 15, value: 2, image_url: "{require('../public/clubs/2C.jpg').default}"},
{card_number: 16, value: 3, image_url: "{require('../public/clubs/3C.jpg').default}"},
{card_number: 17, value: 4, image_url: "{require('../public/clubs/4C.jpg').default}"},
{card_number: 18, value: 5, image_url: "{require('../public/clubs/5C.jpg').default}"},
{card_number: 19, value: 6, image_url: "{require('../public/clubs/6C.jpg').default}"},
{card_number: 20, value: 7, image_url: "{require('../public/clubs/7C.jpg').default}"},
{card_number: 21, value: 8, image_url: "{require('../public/clubs/8C.jpg').default}"},
{card_number: 22, value: 9, image_url: "{require('../public/clubs/9C.jpg').default}"},
{card_number: 23, value: 10, image_url: "{require('../public/clubs/10C.jpg').default}"},
{card_number: 24, value: 10, image_url: "{require('../public/clubs/JC.jpg').default}"},
{card_number: 25, value: 10, image_url: "{require('../public/clubs/QC.jpg').default}"},
{card_number: 26, value: 10, image_url: "{require('../public/clubs/KC.jpg').default}"},

{card_number: 40, value: 1, image_url: "{require('../public/diamonds/AD.jpg').default}"},
{card_number: 41, value: 2, image_url: "{require('../public/diamonds/2D.jpg').default}"},
{card_number: 42, value: 3, image_url: "{require('../public/diamonds/3D.jpg').default}"},
{card_number: 43, value: 4, image_url: "{require('../public/diamonds/4D.jpg').default}"},
{card_number: 44, value: 5, image_url: "{require('../public/diamonds/5D.jpg').default}"},
{card_number: 45, value: 6, image_url: "{require('../public/diamonds/6D.jpg').default}"},
{card_number: 46, value: 7, image_url: "{require('../public/diamonds/7D.jpg').default}"},
{card_number: 47, value: 8, image_url: "{require('../public/diamonds/8D.jpg').default}"},
{card_number: 48, value: 9, image_url: "{require('../public/diamonds/9D.jpg').default}"},
{card_number: 49, value: 10, image_url: "{require('../public/diamonds/10D.jpg').default}"},
{card_number: 50, value: 10, image_url: "{require('../public/diamonds/JD.jpg').default}"},
{card_number: 51, value: 10, image_url: "{require('../public/diamonds/QD.jpg').default}"},
{card_number: 52, value: 10, image_url: "{require('../public/diamonds/KD.jpg').default}"},
  ]);

  const fetchDeck = () => {
    dispatch(setCards(cardDeck));
  };

  useEffect(() => {
    fetchDeck();
  }, []);

  console.log("Card Deck?", cardDeck)
//   now it will be dynamic.... use:
//  const image_url = `url(".{require('../public/diamonds/KD.jpg")`


// ------------------ bidding --------------------

  let buttonElement = document.getElementById('pause');
  let plusButtonElement = document.getElementById('plus');
  let minusButtonElement = document.getElementById('minus');
  let bid = 25.00;
  let bidding = document.getElementById('bidding');
  let available = document.getElementById('balance');
  var balance = 500; //init balance
  let cashOutButtonElement = document.getElementById('cashOut');
  let dealButton = document.getElementById('gameStats');
  let card = "AH.jpg";

  function setup(){
  bidding.innerHTML = bid;
  dealButton.disabled= "true";
  buttonElement.disabled= "true";
}

function plusBidding(){
  bid += 5
    bidding.innerHTML = bid;
    if (bid > 45){
      bidding.style.color = "red";
    };
    if (bid > 95){
      bidding.style.color = "purple";
    };
}

function minusBidding(){
  if (bid >= 5){
    bid -= 5;
  };
  if (bid < 50){
    bidding.style.color = "black";
  };
    if (bid >= 0){
    bidding.innerHTML = bid;
  };
  if (bid === 0){
    swal(" ", "Please Place A Bid.", "info", {timer: 1000,});
  };
}

function placeBid(){
  balance -= bid
  if (balance >= 0 && bid !== 0){
  available.innerHTML = "$" + balance + ".00" ;
  buttonElement.disabled = true;
  // let dealButton = document.getElementById("cardDealer");
  // dealButton.disabled = false;
  };
  if (balance < 0){
    alert("See? Now, You don't have enough money to buy a cheeseburger on the ride home.");
    window.location.reload();
  }
  if (bid === 0){
    swal(" ", "You Can't Bid Nothing.", "warning", {timer: 1000,});
  }
}

function begin(){
  document.getElementById("homeButton").remove();
  let cardGame = document.getElementById('details_cards');
    setTimeout(() => {cardGame.innerHTML =" " },750);
    cardGame.style.fontSize = "48px";
    cardGame.style.color = "orangered";
    cardGame.style.textAlign = "center";

    setTimeout(()  => {cardGame.innerHTML =" Begin!" },1000);
    setTimeout(() => {cardGame.innerHTML =" " },2500);
    setTimeout(() => { findOrCreate() },4000);

    // available.innerHTML = "$" + balance + ".00" ;
    setTimeout(() => {available.innerHTML = "$" + balance + ".00" },2000);
}

function findOrCreate(){
  let previousCard = document.createElement('div');
  let currentCard = document.createElement('div');

  previousCard.id = 'previousCardArea';
  currentCard.id = 'currentCardArea';

  let cardTable = document.getElementById('details_cards');

  cardTable.append(currentCard);
  cardTable.append(previousCard);
  swal("Welcome Back,", {timer: 2000,});
const X = Math.floor(Math.random() * 51) + 1
console.log("First card:", cardDeck[X].image_url);
setTimeout(() => {swal("Will the next Card be Higher, or Lower?")}, 2000);

};

function changeImage(){
  const rndInt = Math.floor(Math.random() * 51) + 1
  console.log("Random card:", cardDeck[rndInt]);  
}

// current and prevCard style will by assigned AFTER the random select
  return (
    <>
        <div>
    <h1 id="welcomed">
      <center><PlaySong/></center>
    </h1>
    <main >
        <center><p id="main"> Higer-Lower</p></center>
    </main>
    <div id="details">
    <span id="bid_count">current bid:</span><br/>
    <h1 id='bidding'>
    </h1>
    <button id='plus' onClick={plusBidding}> Increase Bid </button>      <button id='minus' onClick={minusBidding}> Decrease Bid </button><br/>
<hr/>
<span>higher:<input type="checkbox" id="higher" name="higher" /></span><br/>    <button id='pause' onClick={placeBid}> BID </button>
<button id= "cashOut"> Cash Out <i class='far fa-money-bill-alt'></i></button><br/>
<br/>
<span>Your Balance:</span>
<h1 id='balance'>
  
</h1> <br/>


    </div>
    <div id="details_plus">

    </div>
    <div id="details_cards">
      <BillBoard/>
    <div id="currentCardArea">
      <div id="currentCard">
      <img alt="RolltideCasino" id="leadingCard" className="cards" src={`${process.env.PUBLIC_URL}/${card}`}/>
      </div>
    </div>
    {/* <div id="previousCardArea">
      <div id="currentCard">
        <img alt="RolltideCasino" className="cards" src={require('../public/spades/9S.jpg').default}/>
      </div>
    </div> */}
    <button id="homeButton" onClick={begin}>Let's Play!</button>
    </div>
    <button id="gameStats" onClick={changeImage}>Deal</button>
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