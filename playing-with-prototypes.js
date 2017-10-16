function Person() {
    this.person = "person"
}

function Employee() {
    this.employee = 'employee'
    Person.call(this);
}

//Employee.prototype = Person.prototype;
console.log('Employee prototype', Employee.prototype)

var reference = Person.prototype;
Person.prototype = {
    name : function () {
        return this.person
    },

    version: 11.2,
    constructor: Person.prototype.constructor
}
console.log('reference to Person.prototype')
//Employee.prototype = Person.prototype;
console.log('2', Employee.prototype)

var person = new Employee();
var test = new Person();


console.log(test)
console.log(person)
console.log(person.name)
console.log(Employee.prototype)
