class Ball
{
	constructor(x,y,radius)
	{
        var options={
          //isStatic:false,
          restitution:0.5,
          friction:0.5,
          density:1.0
 }
		this.radius=radius
        
		this.ballBody=Bodies.circle(x,y,radius,options)
		World.add(world, this.ballBody)
		//ballBody.scale=0.1
		this.image=loadImage("paper.png")
        
	}
	display()
	{
			var pos=this.ballBody.position;
			
            var angle = this.ballBody.angle;
			
              
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			angleMode(RADIUS);
			imageMode(CENTER);
			fill(255);
			rotate(angle);
			image(this.image, 0,0,this.radius, this.radius)		
		pop()
    }
}