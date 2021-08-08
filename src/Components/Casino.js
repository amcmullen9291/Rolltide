  
import React, { useState, useEffect, createElement } from 'react';
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
{card_number: 1, value: 1, image_url: "AS.jpg"},
{card_number: 2, value: 2, image_url: "2S.jpg"},
{card_number: 3, value: 3, image_url: "3S.jpg"},
{card_number: 4, value: 4, image_url: "4S.jpg"},
{card_number: 5, value: 5, image_url: "5S.jpg"},
{card_number: 6, value: 6, image_url: "6S.jpg"},
{card_number: 7, value: 7, image_url: "7S.jpg"},
{card_number: 8, value: 8, image_url: "8S.jpg"},
{card_number: 9, value: 9, image_url: "9S.jpg"},
{card_number: 10, value: 10, image_url: "10S.jpg"},
{card_number: 11, value: 10, image_url: "JS.jpg"},
{card_number: 12, value: 10, image_url: "QS.jpg"},
{card_number: 13, value: 10, image_url: "KS.jpg"},

{card_number: 27, value: 1, image_url: "AH.jpg"},
{card_number: 28, value: 2, image_url: "2H.jpg"},
{card_number: 29, value: 3, image_url: "3H.jpg"},
{card_number: 30, value: 4, image_url: "4H.jpg"},
{card_number: 31, value: 5, image_url: "5H.jpg"},
{card_number: 32, value: 6, image_url: "6H.jpg"},
{card_number: 33, value: 7, image_url: "7H.jpg"},
{card_number: 34, value: 8, image_url: "8H.jpg"},
{card_number: 35, value: 9, image_url: "9H.jpg"},
{card_number: 36, value: 10, image_url: "10H.jpg"},
{card_number: 37, value: 10, image_url: "JH.jpg"},
{card_number: 38, value: 10, image_url: "QH.jpg"},
{card_number: 39, value: 10, image_url: "KH.jpg"},

{card_number: 14, value: 1, image_url: "AC.jpg"},
{card_number: 15, value: 2, image_url: "2C.jpg"},
{card_number: 16, value: 3, image_url: "3C.jpg"},
{card_number: 17, value: 4, image_url: "4C.jpg"},
{card_number: 18, value: 5, image_url: "5C.jpg"},
{card_number: 19, value: 6, image_url: "6C.jpg"},
{card_number: 20, value: 7, image_url: "7C.jpg"},
{card_number: 21, value: 8, image_url: "8C.jpg"},
{card_number: 22, value: 9, image_url: "9C.jpg"},
{card_number: 23, value: 10, image_url: "10C.jpg"},
{card_number: 24, value: 10, image_url: "JC.jpg"},
{card_number: 25, value: 10, image_url: "QC.jpg"},
{card_number: 26, value: 10, image_url: "KC.jpg"},

{card_number: 40, value: 1, image_url: "AD.jpg"},
{card_number: 41, value: 2, image_url: "2D.jpg"},
{card_number: 42, value: 3, image_url: "3D.jpg"},
{card_number: 43, value: 4, image_url: "4D.jpg"},
{card_number: 44, value: 5, image_url: "5D.jpg"},
{card_number: 45, value: 6, image_url: "6D.jpg"},
{card_number: 46, value: 7, image_url: "7D.jpg"},
{card_number: 47, value: 8, image_url: "8D.jpg"},
{card_number: 48, value: 9, image_url: "9D.jpg"},
{card_number: 49, value: 10, image_url: "10D.jpg"},
{card_number: 50, value: 10, image_url: "JD.jpg"},
{card_number: 51, value: 10, image_url: "QD.jpg"},
{card_number: 52, value: 10, image_url: "KD.jpg"},
  ]);

  const fetchDeck = () => {
    dispatch(setCards(cardDeck));
  };

  useEffect(() => {
    fetchDeck();
  }, []);

  console.log("Card Deck?", cardDeck);
//   now it will be dynamic.... use:
//  const image_url = `url(".{require('../public/diamonds/KD.jpg")`


// ------------------ bidding --------------------

  let buttonElement = document.getElementById('pause');
  let plusButtonElement = document.getElementById('plus');
  let minusButtonElement = document.getElementById('minus');
  let settingsButton = document.getElementById('settings');
  let bid = 25.00;
  let bidding = document.getElementById('bidding');
  let available = document.getElementById('balance');
  var balance = 500; //init balance
  let cashOutButtonElement = document.getElementById('cashOut');
  let dealButton = document.getElementById('gameStats');
  let dealButton2 = document.getElementById('gameStats2');
  let card = "AH.jpg";
  let card2 = "8C.jpg"
  let cardBack = "CB.jpg";
  var TrailCard;
  var FrontCard;

  function setup(){

  bidding.innerHTML = bid;
  dealButton.disabled= "true";
  dealButton2.disabled= "true";
  buttonElement.disabled= "true";
  settingsButton.disabled = "true";
  
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
  balance -= bid;
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
    // findOrCreate();
}

function findOrCreate(){
  let previousCard = document.createElement('div');
  let currentCard = document.createElement('div');
  let cardBack = document.createElement('div');
  let backContainer = document.createElement('div');
  let previousCardArea = document.createElement('div');

  previousCard.id = 'previousCardArea';
  currentCard.id = 'currentCardArea';
  cardBack.id ='cardBackArea';
  backContainer.id = 'currentCard';
  previousCardArea.id = 'previousCard';

  let cardTable = document.getElementById('details_cards');
  setTimeout(() => 2000,);

  cardTable.append(cardBack);
  cardTable.append(currentCard);
  cardTable.append(previousCard);
  // ------------------------------------
let img = document.createElement('img');
const X = Math.floor(Math.random() * 51) + 1
let img2 = document.createElement('img');
let leadCard = cardDeck[X];
img2.src = leadCard.image_url;
img2.value = leadCard.value;
img2.className = "cards";
var imgID = leadCard.card_number;
currentCard.append(previousCardArea);
previousCardArea.append(img2);
TrailCard = Object.assign(img2);

console.log("TrailCard:", TrailCard);

img.src= "./CB.jpg";
img.className= "cards";
img.id = "CurrentDeck";
cardBack.append(backContainer);
backContainer.append(img);

  // -------------------------------------------
  swal("Welcome Back,", {timer: 2000,});
// const X = Math.floor(Math.random() * 51) + 1
console.log("First card:", cardDeck[X].image_url);
setTimeout(() => {swal("Will the next Card be Higher, or Lower?")}, 2000);
let bid_btn = document.getElementById('pause');
bid_btn.disabled = true;
let playButton = document.getElementById('gameStats');
let playButton2 = document.getElementById('gameStats2');

playButton.disabled = false;
playButton2.disabled = false;

// settingsButton.disabled = false;
TrailCard = Object.assign(img2);
console.log("moving Card", TrailCard);
previousCard.append(TrailCard);

};

// --------------------- card draw loop---------------------
var time  = 1;
function changeImageUp(){

if(time === 1){
  const rndInt = Math.floor(Math.random() * 51) + 1;
  console.log("Next Random card:", cardDeck[rndInt]); 
  let LeadCard = cardDeck[rndInt];
 console.log(TrailCard);
  card2 = document.createElement('img');
  setTimeout(() => 2000,);
  card2.src = LeadCard.image_url;
  card2.className = "cards";
  card2.value = LeadCard.value;

  let currentCard = document.getElementById('currentCardArea');
  let currentCardArea = document.getElementById('currentCard');
  setTimeout(() => 2000,);
  // currentCard.append(currentCardArea);
  currentCard.append(card2);
  FrontCard = Object.assign(card2);
  console.log("Attributes:", FrontCard.value); //value set

  console.log("Moved Card", TrailCard);
let buttonDeal = document.getElementById('gameStats');
console.log("target:", buttonDeal);
  // buttonDeal.onClick.disabled = true;
let A = TrailCard.value;
let B = FrontCard.value;

let result = Math.max(A, B);
if(result === A){
  let showResult = document.getElementById('resultsArea');
  let resultsA = document.createElement('div');
  setTimeout(() => 2000,);
  resultsA.id= "winningResult";
  showResult.append(resultsA);
  resultsA.innerHTML = " > ";
  let settingsButton = document.getElementById('settings');
  settingsButton.disabled = false;
}

if(result === B){
  let showResultB = document.getElementById('resultsArea');
  let resultsB = document.createElement('div');
  setTimeout(() => 2000,);
  resultsB.id= "winningResult";
  showResultB.append(resultsB);
  showResultB.innerHTML = "<";
}

console.log(A, B);
}
if(time > 1 ){
  console.log("Card your switching:", TrailCard);
  console.log("Front Card:", FrontCard);

  let previousCardArea = document.getElementById('previousCardArea');
  setTimeout(() => 2000,);
  previousCardArea.removeChild(TrailCard);
  previousCardArea.append(FrontCard);
  console.log(FrontCard.value);
  TrailCard = Object.assign(FrontCard);
  console.log("Now its the Back card:", TrailCard);

  //do a new random card and object assign it to front card

  const  X2 = Math.floor(Math.random() * 51) + 1;
  console.log("Next Random card:", cardDeck[X2]); 
  let LeadCard = cardDeck[X2];

  let card2 = document.createElement('img');
  card2.src = LeadCard.image_url;
  card2.className = "cards";
  card2.value = LeadCard.value;

  let currentCard = document.getElementById('currentCardArea');
  let currentCardArea = document.getElementById('currentCard');
  setTimeout(() => 2000,);

  // currentCard.append(currentCardArea);
  currentCard.append(card2);
  FrontCard = Object.assign(card2);
  
  let A = TrailCard.value;
  let B = FrontCard.value;
  let result = Math.max(A, B);

  if(result === A){

    let resultsA = document.getElementById('winningResult');
    setTimeout(() => 4000,);
    resultsA.innerHTML = ">";

  };

  if(result === B){
    let resultsB = document.getElementById('winningResult');
    setTimeout(() => 4000,);
    resultsB.innerHTML = "<";

  };

}
time+=1;
}

function changeImageDown(){

if(time === 1){
  const rndInt2 = Math.floor(Math.random() * 51) + 1;
  console.log("Next Random card:", cardDeck[rndInt2]); 
  let LeadCard2 = cardDeck[rndInt2];
 console.log(TrailCard);
  let card22 = document.createElement('img');
  setTimeout(() => 2000,);
  card22.src = LeadCard2.image_url;
  card22.className = "cards";
  card22.value = LeadCard2.value;

  let currentCard2 = document.getElementById('currentCardArea');
  let currentCardArea = document.getElementById('currentCard');
  setTimeout(() => 2000,);
  // currentCard.append(currentCardArea);
  currentCard2.append(card22);
  FrontCard = Object.assign(card22);
  console.log("Attributes:", FrontCard.value); //value set

  console.log("Moved Card", TrailCard);
let buttonDeal = document.getElementById('gameStats2');
console.log("target:", buttonDeal);
  // buttonDeal.onClick.disabled = true;
let A2 = TrailCard.value;
let B2 = FrontCard.value;

let result = Math.max(A2, B2);
if(result === A2){
  let showResult2 = document.getElementById('resultsArea');
  let resultsA2 = document.createElement('div');
  setTimeout(() => 2000,);
  resultsA2.id= "winningResult";
  showResult2.append(resultsA2);
  resultsA2.innerHTML = " > ";
  let settingsButton2 = document.getElementById('settings');
  settingsButton2.disabled = false;

}
if(result === B2){
  let showResultB2 = document.getElementById('resultsArea');
  let resultsB2 = document.createElement('div');
  setTimeout(() => 2000,);
  resultsB2.id= "winningResult";
  showResultB2.append(resultsB2);
  showResultB2.innerHTML = "<";
}

console.log(A2, B2);
}
if(time > 1 ){
  console.log("Card your switching:", TrailCard);
  console.log("Front Card:", FrontCard);

  let previousCardArea2 = document.getElementById('previousCardArea');
  setTimeout(() => 2000,);
  previousCardArea2.removeChild(TrailCard);
  previousCardArea2.append(FrontCard);
  console.log(FrontCard.value);
  TrailCard = Object.assign(FrontCard);
  console.log("Now its the Back card:", TrailCard);

  //do a new random card and object assign it to front card

  const  X22 = Math.floor(Math.random() * 51) + 1;
  console.log("Next Random card:", cardDeck[X22]); 
  let LeadCard = cardDeck[X22];

  let card22 = document.createElement('img');
  card22.src = LeadCard.image_url;
  card22.className = "cards";
  card22.value = LeadCard.value;

  let currentCard2 = document.getElementById('currentCardArea');
  let currentCardArea = document.getElementById('currentCard');
  setTimeout(() => 2000,);

  // currentCard.append(currentCardArea);
  currentCard2.append(card22);
  FrontCard = Object.assign(card22);
  
  let A2 = TrailCard.value;
  let B2 = FrontCard.value;
  let result = Math.max(A2, B2);

  if(result === A2){

    let resultsA2 = document.getElementById('winningResult');
    setTimeout(() => 4000,);
    resultsA2.innerHTML = ">";

  };

  if(result === B2){
    let resultsB2 = document.getElementById('winningResult');
    setTimeout(() => 4000,);
    resultsB2.innerHTML = "<";
  };

}
time+=1;
}


function chooseDeck(e){
  e.preventDefault();
  let hideButton12 = document.getElementById('gameStats');
  setTimeout(() => 3000,);
  let hideButton22 = document.getElementById('gameStats2');
  setTimeout(() => 3000,);

  hideButton12.style.visibility = "hidden";
  hideButton22.style.visibility = "hidden";

  let area = document.getElementById('ChooseCardBack');
  setTimeout(() => 3000,);
  area.style.display = "block";
}

function newBlue(){
  let chooser = document.getElementById('ChooseCardBack');
  setTimeout(() => 3000,);
  let decks = document.getElementById('currentCard');
  setTimeout(() => 3000,);
  let OldDeck = document.getElementById('CurrentDeck');
// console.log("Deck to Remove:", OldDeck);

decks.removeChild(OldDeck);
let DeckChoice = document.createElement('img');
setTimeout(() => 3000,);
DeckChoice.src= './BB.jpg';
DeckChoice.className= "cards";
DeckChoice.id = "CurrentDeck";
decks.append(DeckChoice);

}

function newRed(){
  let chooser = document.getElementById('ChooseCardBack');
  setTimeout(() => 3000,);
  let decks = document.getElementById('currentCard');
  setTimeout(() => 3000,);
  let OldDeck = document.getElementById('CurrentDeck');
console.log("Deck to Remove:", OldDeck);

decks.removeChild(OldDeck);
let DeckChoice = document.createElement('img');
setTimeout(() => 3000,);
DeckChoice.src= './RB.jpg';
DeckChoice.className= "cards";
DeckChoice.id = "CurrentDeck";
decks.append(DeckChoice);
}

function DeckChose(){
  let chooser = document.getElementById('ChooseCardBack');
  let hideButton1 = document.getElementById('gameStats');
  let hideButton2 = document.getElementById('gameStats2');
  setTimeout(() => 3000,);
  chooser.style.display = "none";
  hideButton1.style.visibility = "visible";
  hideButton2.style.visibility = "visible";
}
function newChecker(){
  let chooser = document.getElementById('ChooseCardBack');
  setTimeout(() => 3000,);
  let decks = document.getElementById('currentCard');
  setTimeout(() => 3000,);
  let OldDeck = document.getElementById('CurrentDeck');
  setTimeout(() => 3000,);
console.log("Deck to Remove:", OldDeck);

decks.removeChild(OldDeck);
let DeckChoice = document.createElement('img');
setTimeout(() => 3000,);
DeckChoice.src= './CB.jpg';
DeckChoice.className= "cards";
DeckChoice.id = "CurrentDeck";
decks.append(DeckChoice);
}


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
    <button id='pause' onClick={chooseDeck}>Bid</button>
<button id= "cashOut"> Cash Out <i class='far fa-money-bill-alt'></i></button><br/>
<br/>
<span>Your Balance:</span>
<h1 id='balance'>
  
</h1> <br/>


    </div>
    <div id="details_plus">
    <center><div id="resultsArea"></div></center>
    <hr/>
    </div>
    <div id="details_cards">
      <BillBoard/>
      <div id="cardBackArea">
      <div id="currentCard">
      <img alt="RolltideCasino" id="CurrentDeck" className="cards" src={`${process.env.PUBLIC_URL}/${cardBack}`}/>
      </div>
    </div>

    <div id="currentCardArea">
      <div id="currentCard">
      <img alt="RolltideCasino" id="leadingCard" className="cards" src={`${process.env.PUBLIC_URL}/${card}`}/>
      </div>
    </div>
    <div id="previousCardArea">
      <div id="currentCard">
      <img alt="RolltideCasino" id="previousCard" className="cards" src={`${process.env.PUBLIC_URL}/${card2}`}/>
      </div>
    </div>
    <button id="homeButton" onClick={begin}>Let's Play!</button>
    </div>
    <br/> <br/><br/><br/><br/>
    <button id="gameStats" onClick={changeImageUp}>↑</button><br/><br/><br/><br/>
    <button id="gameStats2" onClick={changeImageDown}>↓</button>

    </div>
    <br/>
    <button onClick={chooseDeck} id="settings">S e t t i n g s</button><br/>
    <center><div id="ChooseCardBack">
          <center><div id="">Choose a Deck: <button id="okay" onClick={DeckChose}>≋ ✔</button></div>
          <button><img className="cards" alt="Card Back" src={'./BB.jpg'} onClick={newBlue}/></button>
          <button><img className="cards" alt="Card Back" src={'./RB.jpg'} onClick={newRed}/></button>
          <button><img className="cards" alt= "Card Back" src={'./CB.jpg'} onClick={newChecker}/></button>
          </center>
    </div></center>
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