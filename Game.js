class Game {
  constructor(){
    this.play = createButton("PLAY");
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
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
      this.play.hide();
    }

  }

  display(){
    console.log(gameState);
    if(gameState === 1){
      this.play.position(displayWidth/2, displayHeight/2+100);
      this.play.show();
      console.log("gameState");
      
    }else if(gameState === 0){
      this.play.hide();
    }

  }

  play(){
    //form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //var display_position = 100;
      //wall1 = createSprite(displayWidth/2, displayHeight/2, 20, 20);
      //wall1.addImage(img, "Screenshot 2020-10-26 at 12.39.10 PM.png");

      wall2 = createSprite(displayWidth/2, displayHeight/2, 20, 20);
      wall2.addImage(img2, "Screenshot 2020-10-26 at 12.34.09 PM.png");

      wall3 = createSprite(displayWidth/2, displayHeight/2, 20, 20);
      wall3.addImage(img3, "Screenshot 2020-10-26 at 12.31.33 PM.png");

      wall4 = createSprite(displayWidth/2, displayHeight/2, 20, 20);
      wall4.addImage(img4, "Screenshot 2020-10-26 at 12.28.06 PM.png");

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        user[index-1].x = x;
        user[index-1].y = y;

        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = user[index-1].y;
        }
       
      }

    }
  }
}  