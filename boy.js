class boy {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.6,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("sprites/boy.png")
        this.image.scale = 5
        World.add(world,this.body)
    }
    display(){
        
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        strokeWeight(6)
        stroke("red")
        image(this.image,0,0,200,200)
        pop()
    }
}