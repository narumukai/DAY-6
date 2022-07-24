
//1.Class - Movie
class Movie{

    constructor(title,studio,rating){

        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
    getPG(args){
        var arr=[];
        for(var i=0;i<arr.length;i++){

            if(arr[i].rating=="PG"){
                arr.push(arr[i]);
            }
        }
        return arr;


    }
}
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

let mov=new Movie("Casino Royale","Eon Productions","PG­13");


console.log(mov.getPG());






//2. write a person class to hold all the details

class Person{

    constructor(num,num1){ 
        this.num=num;
        this.num1=num1;      
    }
    get(){
        return this.num+this.num1;
    }

}

let obj1=new Person(5,6);

console.log("Sum of two numbers: "+obj1.get());


//3.write a class to calculate the uber price

class Ubercalculation{

    constructor(distance,velocity){
        this.distance=distance;
        this.velocity=velocity;

    }
    calculation(){
        let time=this.distance/this.velocity;
        return time.toFixed(2)+" hours";

    }
}

let obj2=new Ubercalculation(200,60);

console.log(obj2.calculation());