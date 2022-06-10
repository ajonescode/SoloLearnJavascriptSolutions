class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get Area(){
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }
}

const shape = new Rectangle(10,10)

console.log(shape.Area)