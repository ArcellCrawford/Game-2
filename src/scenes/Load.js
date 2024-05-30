class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./Assets/kenney_space-shooter-redux");

        // Load characters spritesheet
        this.load.atlasXML("ship_characters", "Spritesheet/sheet.png","Spritesheet/sheet.xml");

        // Load tilemap information
        this.load.image("background", "Backgrounds/black.png");   
        this.load.image("Enemy", "PNG/Enemies/enemyBlack1.png");                      
       
    }

    create() {
        // normal ship animation
        this.anims.create({
            key: 'ship',
            frames: this.anims.generateFrameNames('ship_characters', {
                prefix: "cockpitBlue_",
                start: 0,
                end: 1,
                suffix: ".png",
                
            }),
            frameRate: 15,
            repeat: -1
        });
        //shooting animation
        this.anims.create({
            key: 'ship-shoot',
            frames: this.anims.generateFrameNames('ship_characters', {
                prefix: "laserBlue",
                start: 1,
                end: 2,
                suffix: ".png",
                zeroPad: 2
            }),
            frameRate: 15,
            repeat: -1
        });


         // ...and pass to the next Scene
         //this.scene.start("gameScene");
         this.scene.start("mainMenu");
        //this.scene.start("gameOver");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}