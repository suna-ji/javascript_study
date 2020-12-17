'use strict';
// Object-oriented programming
// class : template
// object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        this.name = name; // fiedls
        this.age = age; // fiedls
    }
    // method
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age); // -1이 아닌 0

// 3. Fields (public, private)
// Too soon!

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too Soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color; 
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        console.log(`area = ${this.width * this.height}`);
    }
}

class Rectangle extends Shape{

}

class Triangle extends Shape{
    draw(){
        super.draw(); // 상속받은 클래스의 draw 메서드 사용
        console.log('🐰🔺🐰');
    }
    getArea(){
        console.log(`area = ${this.width * this.height / 2}`);
    }// override
    toString(){
        return `Triangle : color: ${this.color}`;
    }
}

const rectangle = new Rectangle(10, 20, 'white');
rectangle.draw();
rectangle.getArea();
const triangle = new Triangle(10, 20, 'red');
triangle.draw();
triangle.getArea();


// 6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);


let obj = {value : 4};
function change(value){
    value.value = 7; // 객체를 받아서 객체의 필드값을 변경
}
change(obj);
console.log(obj);









