class Constant {
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
      }
    
      getCount(){
        var constantCountRef = database.ref('constantCount');
        constantCountRef.on("value",(data)=>{
         contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          contestantCount: count
        });
      }
    
      update(){
        var playerIndex = "contestants/contestant" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          answer:this.answer
        });
      }
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('contestants');
        playerInfoRef.on("value",(data)=>{
          allContestants = data.val();
        })
      }
    }
    