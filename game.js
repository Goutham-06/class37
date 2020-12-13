class game{
    constructor(){

    }
    getstate(){
    var gamestateref=database.ref('gamestate')
    gamestateref.on("value",function(data){
        gamestate=data.val()
    })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate==0){
            player1=new player () 
            var playercountref=await database.ref('playercount').once("value")
            if(playercountref.exists()){
                playercount=playercountref.val()
                player1.getcount()
            }
                  
             form1=new form()
             form1.display()
         
        }
        c1=createSprite(100,200)
        c2=createSprite(300,200)
        c3=createSprite(500,200)
        c4=createSprite(700,200)
        cars=[c1,c2,c3,c4]
    }
    play(){
        form1.hide()
        textSize(30)
        text("Game Starts",120,100)
    player.getplayerinfo()
    if(allplayers!=undefined){
        var index=0
        var x=0
        var y
        
        for(var plr in allplayers){
        index=index+1
        x=x+200
        y=displayHeight-allplayers[plr].distance
        cars [index-1].x=x
        cars [index-1].y=y
        if(index==player1.index){
            cars[index-1].shapeColor="red"
            camera.position .x=displayWidth/2
            camera.position.y=cars[index-1].y
        }
          
    }
    }
 if (keyIsDown(UP_ARROW)&&player1.index!=null){
     player1.distance+=50
     player1.update() }
     drawSprites()
 }
}