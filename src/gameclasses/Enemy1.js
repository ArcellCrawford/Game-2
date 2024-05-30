class Enemy1 extends Phaser.Physics.Arcade.Sprite{
    constructor (scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame)
        //add object to existing scene 
        scene.add.existing(this)// add to existing scene
        this.points = pointValue // store point value
        this.moveSpeed = 1.8 //heart speed in piexels/frame
        this.initialY = this.y // initial y cord used for reset 
        this.move = false
        
    }
    update(){
   // enemy movement stops enemy at 200 pixels on y axis
        if(this.y >=200 ){
            //checks the x value against x value to determine direction it
            //needs to go also check this.move
            if(this.x>= game.config.width - 100 && this.move == false){
                this.move = true
              
            }
            //checks this move and sets it to false if x is less than 100
            //moving it in the other direction
            else if(this.move == true ){
                if(this.x < 0){
                    this.move = false
                }
                this.x -= this.moveSpeed   
            }
            else if(this.move == false){
                this.x += this.moveSpeed    
               }
        } 
        else{
            this.y += this.moveSpeed
        }
        
    
    }
   
}