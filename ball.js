class Ball{

constructor(x,y,radius){
    var options ={
    }

    
    this.body = Matter.Bodies.circle(x, y, radius);
    this.radius =radius;
    World.add(world,this.body);
}


display(){
    var pos =this.body.position;
    ellipse(pos.x,pos.y,this.radius,this.radius)



}
}