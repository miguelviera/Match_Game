const imgBack = document.querySelector('.imgBack');
const match1 = document.querySelectorAll('button.match1');
const start = document.querySelector('#start');
let colors = ["blue", "red", "green", "yellow", "brown","blue", "red", "green", "yellow", "brown"];

start.addEventListener("click", function(){
    colors = shuffle(colors);
    for(let i = 0 ;i < colors.length; i++){
        match1[i].style.backgroundColor = colors[i];
    }
    console.log(match1[2].style.backgroundColor)
})





imgBack.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    
})



function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }



