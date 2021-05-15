class Dustbin {
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }
        this.bodyb = Bodies.rectangle(700,500,10,10,options );
        World.add(world, this.bodyb);
        this.bodyl= Bodies.rectangle(600,400,10,10);
        World.add(world, this.bodyl);
        this.bodyr= Bodies.rectangle(750,400,10,10);
        World.add(world, this.bodyr);
        
    }
    display(){
        fill("white");
        rect(this.bodyb.position,this.bodyb.position.y,this.bodyb.width,this.bodyb.height);
        rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height/2)));
        rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y+(this.bodyb.height/2)));
    }
}