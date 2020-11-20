class Paper{
        constructor(x, y,radius2) {
            var  options={isStatic:true}
          this.body = Matter.Bodies.circle(x, y, radius2,options);
         
          this.body.radius=radius2;
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red");
     circle(0,0,this.body.radius)
      pop();
          
        }
        
    
    
    }

