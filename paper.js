class Paper {
    constructor(){
        var options ={
            isStatic:false,
            restitution:1,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(200,400,30,options);
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        fill(95,9,521);
        ellipseMode(RADIUS)

        ellipse(pos.x,pos.y,30,30);
    }

}