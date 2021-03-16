class Game {
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

    update(state){
      database.ref('/').update({
        hi: state
      });
    }
  
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }

    }
  
    play(){
      form.hide()
    Player.getPlayerInfo();
      State = 1;
      down = 1

      intro()

  
      clear()
      }
      

    play1(){
      clear()
      
    }
  }