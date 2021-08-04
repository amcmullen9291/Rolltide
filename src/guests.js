var cardsLeft = Array.from({length: 52}, (_, index) => index + 1);
var numCardsLeft = cardsLeft.length

var value1; 
var value2;
var value3;


function dealCards(){
  let  dealButton = document.createElement('button');
  let  statsButton = document.createElement('button');
  let previousCard = document.createElement('div');
  let currentCard = document.createElement('div');

  previousCard.id = 'previousCardArea';
  currentCard.id = 'currentCardArea';
  dealButton.id = "cardDealer";
  dealButton.innerHTML = "Deal!";
  statsButton.id = "gameStats";
  statsButton.innerHTML = "stats";

  let bottomNav1 = document.getElementById("guestStats");
  let bottomNav2 = document.getElementById("guestInfo");
  let cardTable = document.getElementById('details_cards');

  cardTable.append(currentCard);
  cardTable.append(previousCard);
  

  dealButton.addEventListener('click', function firstPass(){
    // swal("Just a Placeholder For Now.");  
    buttonElement.disabled = false;
    // -----card shuffle -----------
    let i = Math.floor(Math.random() * numCardsLeft ) + 1;
    let cardGame = document.getElementById('details_cards');

    var img = document.createElement("img");
    img.class = "cards"
    img.id = cardsObject["data"][i].attributes["card_number"]
    img.value = cardsObject["data"][i].attributes["value"]
    var value1 = cardsObject["data"][i].attributes["value"];
    img.style.width = '83px';
    img.style.height = '150px';
    img.style.marginTop = '10%';
        img.setAttribute("src", cardsObject["data"][i].attributes["image_url"]);
        currentCard.appendChild(img);
        cardsLeft.splice(i, 1);
    this.removeEventListener('click', firstPass);
      dealButton.disabled = true
      swal("Place A Bet")

    dealButton.addEventListener('click', function secondPass(){
      buttonElement.disabled = false;
      let i = Math.floor(Math.random() * numCardsLeft ) + 1;
      // alert("on the right track now")
      var img2 = document.createElement("img");
      img2.class = "cards"
      img2.id = cardsObject["data"][i].attributes["card_number"]
      img2.value = cardsObject["data"][i].attributes["value"]
      var value2 = cardsObject["data"][i].attributes["value"];
      console.log("===========");
      console.log(value1);
      console.log(value2);
      img2.style.width = '83px';
      img2.style.height = '150px';
      img2.style.marginTop = '10%';
          img2.setAttribute("src", cardsObject["data"][i].attributes["image_url"]);
          currentCard.replaceChild(img2, img);
          cardsLeft.splice(i, 1);
      previousCardArea.append(img)
      let available = document.getElementById("balance");
      available.innerHTML = "$" + balance + ".00";
      pGenerate("control");
      swal("Will the next Card be Higher, or Lower?", {timer: 1900});
      this.removeEventListener('click', secondPass);
      dealButton.addEventListener('click', function thirdPass(){
        buttonElement.disabled = false;

        // swal("Disco!", "now we program...")
        let i = Math.floor(Math.random() * numCardsLeft ) + 1;
        var img3 = document.createElement("img");
        img3.class = "cards"
        img3.id = cardsObject["data"][i].attributes["card_number"]
        img3.value = cardsObject["data"][i].attributes["value"]
        var value3 = cardsObject["data"][i].attributes["value"]
        console.log("================");
        console.log(value2)
        console.log(value3);
        // ------------ moved to compute()-----------
        compute();
        img3.style.width = '83px';
        img3.style.height = '150px';
        img3.style.marginTop = '10%';
            img3.setAttribute("src", cardsObject["data"][i].attributes["image_url"]);
            currentCard.replaceChild(img3, img2);
            previousCard.replaceChild(img2, img);
            value3 = Object.keys(value2 = value3)
            cardsLeft.splice(i, 1); 
            img = Object.assign(img2)
            img2 = Object.assign(img3)
      });
    });
  });
  bottomNav1.append(dealButton);

  statsButton.addEventListener('click', function (event) {
    wonGames =  guestObject["data"][0].attributes["won_games"];
    lostGames =  guestObject["data"][0].attributes["lost_games"];
    totalGames = guestObject["data"][0].attributes["total_played"] || 0;
     percent = ((wonGames / totalGames) * 100).toFixed(2);
     percentage = (isNaN(percent) ? 100 : percent);
    swal ("Total Played: " + totalGames +" Rounds", "Winning " + percentage + "% Of the Time.");
  });
  
  bottomNav2.append(statsButton);
}; 

function guestWon(){
  let availableBalance = balance
  let wonGames = (guestObject["data"][0].attributes["won_games"]);
  newWonGamesTotal = (wonGames += 1);
  let totalGames = (guestObject["data"][0].attributes["total_played"]);
  newTotalGames = (totalGames += 1);

  let data = { 
won_games: newWonGamesTotal,
total_played: newTotalGames,
balance: availableBalance, };
fetch('http://[::1]:3000/api/guests/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

function guestLost(){
  let availableBalance = balance
  let lostGames = (guestObject["data"][0].attributes["lost_games"]);
  newLostGamesTotal = (lostGames += 1);
  let totalGames = (guestObject["data"][0].attributes["total_played"]);
  let newTotalGames = (totalGames +=1);
  let data = { 
lost_games: newLostGamesTotal,
total_played: newTotalGames,
balance: availableBalance, };
fetch('http://[::1]:3000/api/guests/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

}

//   let button5 = document.createElement('button');
// button5.class = "likeButton"

// button5.addEventListener('click', function (event) {
//   let likes = 0
//   console.log(likes);
// });

// }



function compute() {
  // ------------setting argument for pGenerate---------
  let higher = document.getElementById("higher");
  if(higher.checked == false){
    result = Math.max(value2, value3);
    if(result == value2){
      pGenerate("won")
      let available = document.getElementById("balance");
      balance += bid;
      available.innerHTML = "$" + balance + ".00"; 
      guestWon();
      // likedRounds(); 

    }
    else{
      pGenerate("lost")
      let available = document.getElementById("balance");
      balance -= bid;
      available.innerHTML = "$" + balance + ".00";
      guestLost();
    }
  };
  if(higher.checked == true){
    result = Math.max(value2, value3);
    if(result == value2){
      pGenerate("lost")

      let available = document.getElementById("balance");
      balance -= bid;
      available.innerHTML = "$" + balance + ".00";
      guestLost();
    }
    else{
      pGenerate("won")
      let available = document.getElementById("balance");
      balance += bid;
      available.innerHTML = "$" + balance + ".00";
      guestWon();
    }
  }

}