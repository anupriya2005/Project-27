class rope{
    constructor(bodyA, bodyB,offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope1= Constraint.create(options);
        this.rope2= Constraint.create(options);
        this.rope3= Constraint.create(options);
        this.rope4= Constraint.create(options);
        this.rope5= Constraint.create(options);
        World.add(world, this.rope1);
        World.add(world, this.rope2);
        World.add(world, this.rope3);
        World.add(world, this.rope4);
        World.add(world, this.rope5);
    }
    display(){
        //console.log("I'm here");
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }