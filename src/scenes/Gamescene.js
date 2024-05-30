class Gamescene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    init() {
        // variables and settings
        this.ACCELERATION = 400;
        this.DRAG = 300;    // DRAG < ACCELERATION = icy slide
        this.physics.world.gravity.y = 0;
        this.score = 0
        this.text = this.add.text(16 + this.cameras.main.scrollX, this.cameras.main.scrollY, 'Score:' + this.score, { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        this.isDestroyed = false
       
    }

    create() {
        this.physics.world.setBounds(0,0,1440,800);
        //laser group for player and enemy
        this.PlayerlaserGroup = new LaserGroup(this);
        this.EnemylaserGroup = new EnemyLaserGroup(this);
        // Create a layer
       // this.groundLayer = this.map.createLayer("Ground-n-Platforms", this.tileset, 0, 0);
       // this.groundLayer.setScale(2.0);

        // Make it collidable
        // this.groundLayer.setCollisionByProperty({
        //     collides: true
        // });
        //max and mins for location placement
        this.max = 800 
        this.min = 200

        this.max1 = 700 
        this.min1 = 300
        // set up player avatar
        my.sprite.player = this.physics.add.sprite(game.config.width/4, game.config.height , "ship_characters", "cockpitBlue_0.png").setScale(SCALE)
        my.sprite.player.setCollideWorldBounds(true);
        my.sprite.player.flipY = true;
        my.sprite.player.health = 1
        // set up enemy
        this.enemy1 = new Enemy1(this,Math.floor(Math.random() * (this.max1 - this.min + 1)) + this.min, -200,"Enemy", 0,30).setOrigin(0,0)
        this.physics.add.existing(this.enemy1)
        // Enable collision handling
        this.physics.add.collider(my.sprite.player, this.groundLayer);
        this.physics.add.collider(my.sprite.player, this.EnemylaserGroup,this.PlayerCollision);
        this.physics.add.collider(this.enemy1, this.PlayerlaserGroup,this.EnemyCollision);
        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();

        // debug key listener (assigned to D key)
        this.input.keyboard.on('keydown-D', () => {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this);

    }

//handles collision between enemy laser and player
    PlayerCollision(player,laser){
       my.sprite.player.health -=1 
       console.log(my.sprite.player.health)
       if(my.sprite.player.health <= 0){
        console.log('Game Over')
       }         
    }

//enemy collision destroy enemy, set isDestroyed to true then creates more instances
    EnemyCollision = (enemy, laser1) =>{
     enemy.destroy()
     this.isDestroyed = true         
     
    }

//player shoots laser
    shootLaser() {
        this.PlayerlaserGroup.fireLaser(my.sprite.player.x, my.sprite.player.y - 20); 
    }
//enemy shooting
    shootLaserEnemy(en) {
        
        if(this.isDestroyed == false){
        this.EnemylaserGroup.fireLaser(en.x,en.y - 20);}
        else{
            
        } 
    }

    createInstance(){
        if (this.isDestroyed == true) {
            // Create a new instance of the enemy class
            this.enemy1 = new Enemy1(this, Math.floor(Math.random() * (this.max1 - this.min + 1)) + this.min, -200, "Enemy", 0, 30).setOrigin(0, 0);
            this.physics.add.existing(this.enemy1);
            this.physics.add.collider(this.enemy1, this.PlayerlaserGroup,this.EnemyCollision);

    
            // Reset the flag
            this.isDestroyed = false;
        }
    }

    //update loop
    update() {
          // updates enemy position
       
        
       this.enemy1.update() 
         // handles enemy shooting
         this.shootLaserEnemy(this.enemy1)

         this.createInstance();

       
         
        //The following lines handle player movement
        if(cursors.left.isDown) {
           
            my.sprite.player.body.setAccelerationX(-this.ACCELERATION);
            
            my.sprite.player.anims.play('ship', true);
        } else if(cursors.right.isDown) {
            
            my.sprite.player.body.setAccelerationX(this.ACCELERATION);
            //my.sprite.player.setFlip(true, false);
            my.sprite.player.anims.play('ship', true);
            
        } 
      
            else {
          
            my.sprite.player.anims.play('ship');
        }

        if(!my.sprite.player.body.blocked.down) {
            my.sprite.player.anims.play('ship');
        }
      
        //player shooting
        if(cursors.space.isDown) {
           this.shootLaser();
          
        }
        // The following lines handle shooting

    }
}