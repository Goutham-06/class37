var allplayers
var distance=0
var database,position 
var gamestate=0
var playercount
var form1,player1,game1
var c1,c2,c3,c4,cars

function setup(){
    database=firebase.database()
    createCanvas(displayWidth-20,displayHeight-30);
    game1=new game()
    game1.getstate()
    game1.start()
    
}

function draw(){
    background("white");
    if(playercount==4){
        game1.update(1)
    }
    if(gamestate==1){
        clear()
        game1.play()
    }
    drawSprites();
}

