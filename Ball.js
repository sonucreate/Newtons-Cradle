class Ball{
    constructor(x,y,radius2){
        var options = {
            isStatic: false,
            'restituition':1,
            'friction':0,
            'density':0.8,
        }
        this.body=Bodies.circle(x,y,radius2,options);
        this.radius=radius2;
        this.postionX=x;
        this.positionY=y;
        World.add(world,this.body);

    }
    display(){
        fill("pink");
        circle(this.postionX,this.positionY,this.radius);
    }
}