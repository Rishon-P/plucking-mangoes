class tree{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("sprites/tree.png")
        World.add(world, this.body);
        
    }
    display(){
        image(this.image,550,430)

        var pos = this.body.position
        rectMode(CENTER);
        fill("red")
        line(pos.x,pos.y,this.width,this.height)
    }
}