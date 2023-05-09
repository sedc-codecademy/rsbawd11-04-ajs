//Operator this u JavaScriptu koristi se za referenciranje trenutnog objekta u kojem se nalazi
//funkcija. Kada funkcija poziva this, vrijednost ovog operatora ovisi o konteksta u kojem se
//ta funkcija izvršava.
//Najčešće se this koristi u objektno-orijentisanom programiranju u JavaScriptu kako bi se
//pristupilo svojstvima i metodama objekta. U tom slučaju, this referencira na instancu objekta.

console.log(this); // -> window

function whatIsThis() {
  console.log(this); // -> window
}

whatIsThis();

let obj = {
  whatIsThis: this,
};

console.log(obj.whatIsThis);

let obj1 = {
  whatIsThis: this,
  whatIsThisMethod: function () {
    console.log(whatIsThis);
  },
  whatIsThisMethodArrow: () => console.log(this),
};

console.log(obj1.whatIsThis); // -> window
obj1.whatIsThisMethod(); // -> obj1
obj1.whatIsThisMethodArrow();

function Template() {
  console.log(this);
  this.whatIsThis = this;
  this.whatIsThisFunc = function () {
    console.log(this);
  };
  this.whatIsThisFuncArrow = () => console.log(this);
}

let template = new Template();
console.log(template.whatIsThis);
template.whatIsThisFunc();
template.whatIsThisFuncArrow();

//U sl primeru, this referencira na globalni objekat, što je u ovom slučaju window.
//Funkcija greeting koristi varijablu age koja je definisana u globalnom kontekstu.
console.log(this === window); // true
console.log(this.innerWidth);
var age = 25;
function greeting() {
  console.log(`I'm ${this.age} years old.`);
}
greeting(); // I'm 25 years old.

//U sl primeru, this referencira na novostvorenu instancu objekta Person.
//Svojstva name i age postavljaju se na vrednosti koje se prosleđuju konstruktoru,
//a funkcija greeting dodaje se kao metoda na novostvorenu instancu.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}
let person1 = new Person("John", 25);
person1.greeting(); // Hi, my name is John and I'm 25 years old.

//Slican primer, this referencira na objekat person,
//a funkcija greeting pristupa svojstvima name i age tog objekta.
let person = {
  name: "John",
  age: 25,
  greeting: function () {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

person.greeting(); // Hi, my name is John and I'm 25 years old.
