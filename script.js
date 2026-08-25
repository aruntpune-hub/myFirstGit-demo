
class Factorial{
    constructor(num){
        this.num = num;
    }
    getFact(){
        if(this.num<=1){
            return 1;
        }
        else{
            let fact = 1;
            for(let i=2;i<=this.num;i++){
                fact *= i;
            }
            return fact;
        }
    }
}

let facto1 = new Factorial(5);
console.log(facto1.getFact())