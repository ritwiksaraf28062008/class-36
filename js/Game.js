class Game {
  constructor(){}
  
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

play(){

form.hide();
textSize(30)
text("GAME HAS STARTED",80,100);
Player.getplayerinfo();
if(allplayers!== undefined){
var displaypositiony = 130;
for(var i in allplayers){
if(i === "player" +player.index) {
fill("red")
} 
else{fill("black")}
displaypositiony = displaypositiony+50
textSize(20);
text(allplayers[i].name + ":" + allplayers[i].distance,120,displaypositiony)
}

}
if(keyIsDown(UP_ARROW) && player.index!= null){

player.distance = player.distance+50;
player.update();
}
}

}
