
    var exam1 = 100;
    var exam2 = 92;
    var exam3 = 55;
    
    
    

class Exams{
    //your code goes here

    
    static average(a,b,c){
        const dx = (a + b + c)/3;
        return Math.round(dx)

    }
}

console.log(Exams.average(exam1,exam2,exam3));