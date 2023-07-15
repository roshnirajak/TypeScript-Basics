//Class
var Person = /** @class */ (function () {
    function Person(p_name, p_age) {
        this.p_name = p_name;
        this.p_age = p_age;
    }
    Person.prototype.sayHello = function () {
        console.log("hello " + this.p_name + " of " + this.p_age);
    };
    return Person;
}());
var mohan = new Person('Mohan', 22);
mohan.sayHello();
