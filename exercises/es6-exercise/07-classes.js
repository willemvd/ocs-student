/* Use an ES6 Class to construct a Person instance.
 * */

class Person {

  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

console.log(john); // Person { fname: 'John', lname: 'Doe' }
console.log(john.fname); // John
