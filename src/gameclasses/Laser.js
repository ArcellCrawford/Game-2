class LaserGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
 
		// Initialize the group
		this.createMultiple({
			classType: Laser, // This is the class we create just below
			frameQuantity: 30, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'laser'
		})
        
	}

    fireLaser(x, y) {
		// Get the first available sprite in the group
       
		const laser = this.getFirstDead(false);
		if (laser) {
           
              laser.fire(x, y);
		}
       
}}
 
class Laser extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'ship_characters', 'laserBlue01.png');
	}
    //fire method for laser 
    fire(x, y) {
        this.body.reset(x, y-50);
        setTimeout(() => {

            this.setActive(true);
        }, "300");
            this.setVisible(true);
     
            this.setVelocityY(-900);
       

          
	}

    
    preUpdate(time, delta) {
		super.preUpdate(time, delta);
 
		if (this.y <= 0) {
			this.setActive(false);
			this.setVisible(false);
		}} 
}

