class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
  }
  hide(){
   this.button.hide()
   this.input.hide();
  }

  display(){
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });
}
}
