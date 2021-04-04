var canva;
var contestantCount, database, quiz, question, contestants;
var form;
var gameState = 0;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //game.display();
}
