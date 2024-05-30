class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }
    create(){
        
        this.background = this.add.tileSprite(0, 0, 1400, 800, 'background').setOrigin(0,0)
//sets up button text and interactivity
        this.text = this.add.text(16 + this.cameras.main.scrollX, this.cameras.main.scrollY, 'Space Fighters', { fontFamily: 'Arial', fontSize:50, color: '#ffffff' }).setOrigin(-1.5);
        var button = this.add.rectangle(400, 300, 200, 80, 0x808080).setOrigin(-1);
        var buttonText = this.add.text(400, 340, 'Press Me', {fontFamily: 'Arial',fontSize: 24,color: '#ffffff' }).setOrigin(-2.5);
        button.setInteractive();
        button.on('pointerup', function(){
            this.scene.start("gameScene")
        }, this)
    }
}