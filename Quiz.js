class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
            contestants = new Constant();
          var playerCountRef = await database.ref('constantCount').once("value");
          if(playerCountRef.exists()){
            contestantCount = playerCountRef.val();
            contestants.getCount();
          }
          form = new Question();
          form.display();
}

//question = new Quiz()
//question.display();
      }
      play(){
        form.hide();
        background("Yellow");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340, 50);
        text("----------------------------",320, 65);
        constant.getPlayerInfo();
        if(allContestants !== undefined){
          debugger;
          var display_Answers = 230;
          fill("Blue");
          textSize(20);
          text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    
          for(var plr in allContestants){
            debugger;
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer)
              fill("Green")
            else
              fill("red");
    
            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
          }
        }
      }
    }