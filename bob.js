class Bob{
    constructor(x,y,radius){
    var options = {
        isStatic : false,
        restitution:1,
        friction:0,
        density:0.8
    }
    this.x=x;
	this.y=y;
    this.radius = radius;
    
    this.body = Bodies.circle(x,y,radius/2,options);
    
    
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    fill(255,0,255);
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius,this.radius);
}
    
}