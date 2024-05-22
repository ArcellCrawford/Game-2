class Gamescene extends Phaser.Scene {
    constructor() {
        super("gameScene");
    }

    init() {
        // variables and settings
        this.ACCELERATION = 400;
        this.DRAG = 300;    // DRAG < ACCELERATION = icy slide
        this.physics.world.gravity.y = 0;
        
    }

    create() {
     
        // Create a layer
       // this.groundLayer = this.map.createLayer("Ground-n-Platforms", this.tileset, 0, 0);
       // this.groundLayer.setScale(2.0);

        // Make it collidable
        // this.groundLayer.setCollisionByProperty({
        //     collides: true
        // });

        // set up player avatar
        my.sprite.player = this.physics.add.sprite(game.config.width/4, game.config.height/1.5, "platformer_characters", "tile_0000.png").setScale(SCALE)
        my.sprite.player.setCollideWorldBounds(true);
        my.sprite.player.flipY = true;


        // Enable collision handling
        this.physics.add.collider(my.sprite.player, this.groundLayer);

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();

        // debug key listener (assigned to D key)
        this.input.keyboard.on('keydown-D', () => {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this);

    }

    update() {
        //The following lines handle player movement
        if(cursors.left.isDown) {
           
            my.sprite.player.body.setAccelerationX(-this.ACCELERATION);
            my.sprite.player.resetFlip();
            my.sprite.player.anims.play('ship', true);
        } else if(cursors.right.isDown) {
            
            my.sprite.player.body.setAccelerationX(this.ACCELERATION);
            //my.sprite.player.setFlip(true, false);
            my.sprite.player.anims.play('ship', true);
            
        } 
        else if(cursors.down.isDown){
            my.sprite.player.body.setAccelerationY(this.ACCELERATION);
            
        }
        else if(cursors.up.isDown){
            my.sprite.player.body.setAccelerationY(-this.ACCELERATION);
           
        }
            else {
          
            my.sprite.player.anims.play('ship');
        }

        if(!my.sprite.player.body.blocked.down) {
            my.sprite.player.anims.play('ship');
        }
        if(my.sprite.player.body.blocked.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
           

        }
    }
}