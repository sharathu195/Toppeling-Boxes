class box {
    constructor(x,y,width,height){
        var options ={
            restitution: 0.6,
            friction: 0.3,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        var angle = this.body.angle;
        push();
        translate(posi.x, posi.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
