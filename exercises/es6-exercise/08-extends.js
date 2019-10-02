/* Use ES6 class `extends` syntax to construct a Developer class with 
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */


class Person {

  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}


class Developer extends Person {
  constructor(fname, lname, preferredLanguage) {
    super(fname, lname);
    this.preferredLanguage = preferredLanguage;
  }
}


var jen = new Developer('Jen', 'Maker', 'Javascript');

console.log(jen.fname); // 'Jen'
console.log(jen.preferredLanguage); // 'Javascript'
