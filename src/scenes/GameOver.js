class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver");
    }
    init(data){
        this.score = data.score || 0;
    }
    create(){
        
        this.background = this.add.tileSprite(0, 0, 1400, 800, 'background').setOrigin(0,0)
//sets up button text and interactivity
        this.text = this.add.text(16 + this.cameras.main.scrollX, this.cameras.main.scrollY, 'Game Over', { fontFamily: 'Arial', fontSize:50, color: '#ffffff' }).setOrigin(-2.1);
        this.add.text(400, 350, 'Score: ' + this.score, { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' }).setOrigin(-2.8,1);

        var button = this.add.rectangle(400, 300, 200, 80, 0x808080).setOrigin(-1);
        var buttonText = this.add.text(400, 340, 'Restart?', {fontFamily: 'Arial',fontSize: 24,color: '#ffffff' }).setOrigin(-2.7);
        button.setInteractive();
        button.on('pointerup', function(){
            this.scene.start("gameScene")
        }, this)
    }
}