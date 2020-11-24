class Polygon{
    constructor(){
        var options={
            
            
             isStatic:false
        }
        
        this.body = Matter.Bodies.circle(170,350,20,options);
        World.add(world,this.body)
        Matter.Body.setDensity(this.body,8);
        
        this.image = loadImage("polygon.png");
    }
    display(){     
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}