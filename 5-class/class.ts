//Class
class Person{
    p_name:string;
    p_age:number;

    constructor (p_name:string, p_age:number){
        this.p_name=p_name;
        this.p_age=p_age;
    }
    sayHello():void{
        console.log("hello "+this.p_name+" of "+ this.p_age);
    }
};
let Mohan= new Person('Mohan', 22);
Mohan.sayHello();