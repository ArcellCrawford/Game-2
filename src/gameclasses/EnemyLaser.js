class EnemyLaserGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
        
		// Initialize the group
        // this.lasers = [];
		this.createMultiple({
			classType: EnemyLaser, // This is the class we create just below
			frameQuantity: 100, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'laser',
            // runChildUpdate: true
		})
    
	}
    // clearAllLasers(){
    //     for (let laser of this.lasers) {
    //         laser.destroy(); // Destroy each laser
    //     }
    //     this.lasers = []; // Clear the array
    // }
    print(){
        console.log('whatever')
    }
    fireLaser(x, y) {
		// Get the first available sprite in the group
       
		const laser = this.getFirstDead(false);
		if (laser) {
           
              laser.fire(x, y);
            //   this.lasers.push(laser);
		}  
}

}
 
class EnemyLaser extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'ship_characters', 'laserBlue01.png');
	}
    //fire method for laser 
    fire(x, y) {
        if(y>= 180){
        this.body.reset(x+ 45, y+70);
        setTimeout(() => {

            this.setActive(true);
        }, "1000");
            this.setVisible(true);
     
            this.setVelocityY(+900); }      
	}

    
    preUpdate(time, delta) {
		super.preUpdate(time, delta);
 
		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}} 
}

