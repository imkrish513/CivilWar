function intro(){
    if(gameState === 0){
        textSize(50)
        fill("white")
       // text("Welcome To World War 3",500,400)
       // text("Press Space To Start",500,700)
       title1.visible = true;
       inst.visible = true;
        //title1.scale = 40
       }
       
       if(mousePressedOver(inst)){
        State = instructions
        down1 = 1
       }
    if(State === instructions && down1 === 1){
        fill("white")
        textSize(35)
        text("There are 2 players, to move use the arrow keys, to attack click anywhere on the screen",50,350)
        text("There are going to be many obstacles, once both players are ready push the start button",50,450)
       textSize(50)
        text("Good Luck :)", 600,600)
        title1.visible = false;
        inst.visible = false;
    }
    
    
       if (keyDown("space")&& down1 === 1){
        State = 1
        down = 1
    }
    if(State === 1 && down === 1){
        background(backgroundimg2)
        textSize(30)
        fill("white")
        text("The year is 2077, and World War 3 has just started",50,400)
        text("Your town, Millstone has been captured by the enemy country Pangea",50,450)
        text("You, and your brother have been captured the by the pangean army and are stuck in a prision camp",50,500)
        text("Find a way out and try and stop the war",50,550)
        text("(Press space to continue)",100,600)
        title1.visible = false;
        inst.visible = false;
        drawSprites()
    title1.visible = false;
    person.visible = false;
    guy.visible = false;
        
    
        
    
    }
    
    
    
    if(player.index === 1){
    character = 1
    }
    
    
    if(player.index === 2){
    character = 2
    }
    
    if(keyDown("space")&& State === 1 && down === 1){
      down = 2
      down2 = 2
      State = 2
      gameState = 2
    
    }
    
    if(character === 1 && gameState === 2 && down === 2 && down2 ===2& selection === 0){
      textSize(35)
    guy.visible = true;
    
      fill("white")
      fill("black")
      text("Your Character",575,200)
      
      text("Jeff",700,400)
      fill("white")
      text("Tap to see your abilites",550,700)
      //text("Bob",500,400)
    person.scale = 5.5
    //guy.scale = 1.1
    
    if(mousePressedOver(guy)){
      selection = 2
      person.visible = false;
    }
    }
    if(character === 1 && State === 2 && down === 2 && down2 ===2& selection === 1){
      if(keyDown("Esc")){
        gameState = 2
         down = 2
         down2 =2
        selection = 2
      }
      guy.visible = false;
      person.visible = true;
      textSize(25)
      fill("white")
      text("Bob",700,400)
      fill("black")
      text("Your partner's character",575,200)
      fill("white")
      text("Hero Abiliites:",900,400)
      text("Weapon: Sword",900,450)
      text("Health: 100",900,500)
      text("Damage: 100",900,550)
      text("Press Space to continue",900,600)
      text("Press escape to see your character",900,650)
    
    }
    
    if(character === 1 &&State === 2 && down === 2 && down2 ===2 & selection === 2){
      person.visible = false;
      textSize(25)
      guy.visible = true;
      fill("white")
      text("Jeff",700,400)
      fill("black")
      textSize(35)
      text("Your character",600,200)
      fill("white")
      textSize(25)
      text("Hero Abiliites:",900,400)
      text("Weapon: Bow",900,450)
      text("Health: 125",900,500)
      text("Damage: 100",900,550)
      text("Press Space to continue",900,600)
      text("Press shift to to see your partner's abilites",900,650)
      if(keyDown("shift")){
        State = 2
         down = 2
         down2 =2
        selection = 1
      }
    
    
    
    }
    
    
    
    
    
    
    
    
    if(character === 2 && gameState === 2 && down === 2 && down2 ===2&& selection === 0){
      textSize(35)
    person.visible = true;
    
      fill("white")
      fill("black")
      text("Your Character",575,200)
      
      text("Bob",700,400)
      fill("white")
      text("Tap to see your abilites",550,700)
      //text("Bob",500,400)
    person.scale = 5.5
    //guy.scale = 1.1
    
    
    if(mousePressedOver(person)){
      selection = 1
      person.visible = true;
    }
    }
    if(character === 2 && State === 2 && down === 2 && down2 ===2& selection === 1){
      if(keyDown("Esc")){
        gameState = 2
         down = 2
         down2 =2
        selection = 2
      }
      guy.visible = false;
      person.visible = true;
      textSize(25)
      fill("white")
      //text("Jeff",700,400)
      fill("black")
      textSize(35)
      text("Your Character",600,200)
      fill("white")
      textSize(25)
      text("Bob",700,400)
      text("Hero Abiliites:",900,400)
      text("Weapon: Sword",900,450)
      text("Health: 100",900,500)
      text("Damage: 100",900,550)
      text("Press Space to continue",900,600)
      text("Press escape to see your partner's character",900,650)
    
    }
    
    if(character === 2 && State === 2 && down === 2 && down2 ===2 & selection === 2){
      person.visible = false;
      textSize(25)
      guy.visible = true;
      fill("white")
      text("Jeff",700,400)
      fill("black")
      textSize(35)
      text("Your Partner's character",600,200)
      fill("white")
      textSize(25)
      text("Hero Abiliites:",900,400)
      text("Weapon: Bow",900,450)
      text("Health: 125",900,500)
      text("Damage: 100",900,550)
      text("Press Space to continue",900,600)
      text("Press shift to to see your abilites",900,650)
      
      if(keyDown("shift")){
        character = 1
        State = 2
         down = 2
         down2 =2
        selection = 1
      }
      if(keyDown("space")){
        database.ref('/').update({
          gameState : 2
        });
      
    
    }
    
    }
}