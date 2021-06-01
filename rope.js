class rope{
    constructor(body1,body2,Xoffset){
       
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:Xoffset,y:0}
        }
        this.rope=Constraint.create(options);
        this.Xoffset=Xoffset;
        World.add(world,this.rope);
    }
    display(){
        var ptA=this.rope.bodyA.position, ptB=this.rope.bodyB.position;
        line (ptA.x, ptA.y, ptB.x+this.Xoffset, ptB.y);
    }
}