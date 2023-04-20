//Ispisati string, ceo broj, decimalni broj, bool I demonstrirati njihov ispis, undefined I null

let ime = "Ana";
let godine = 28;
let visina = 1.75;
let imaDozvolu = true;
let adresa;

console.log("Moje ime je " + ime);
console.log("Imam " + godine + " godina i visok/a sam " + visina + "m.");
console.log("Imam vozačku dozvolu: " + imaDozvolu);

if (adresa === undefined) {
  console.log("Adresa nije definisana");
}

let boja = null;
console.log("Boja je: " + boja); // ispisuje "null"

//Napraviti objekat Automobil koji sadrži informacije o marki, modelu i godištu automobila.

let Automobil = {
  marka: "",
  model: "",
  godiste: 0,

  setMarka: function (marka) {
    this.marka = marka;
  },

  setModel: function (model) {
    this.model = model;
  },

  setGodiste: function (godiste) {
    this.godiste = godiste;
  },

  getMarka: function () {
    return this.marka;
  },

  getModel: function () {
    return this.model;
  },

  getGodiste: function () {
    return this.godiste;
  },

  ispisi: function () {
    console.log(
      `Automobil: ${this.marka} ${this.model}, ${this.godiste}. godište`
    );
  },
};

let automobil1 = Object.create(Automobil);
automobil1.setMarka("Opel");
automobil1.setModel("Astra");
automobil1.setGodiste(2010);
automobil1.ispisi(); // Ispisuje: Automobil: Opel Astra, 2010. godište

let automobil2 = Object.create(Automobil);
automobil2.setMarka("Toyota");
automobil2.setModel("Corolla");
automobil2.setGodiste(2015);
automobil2.ispisi(); // Ispisuje: Automobil: Toyota Corolla, 2015. godište

//Paran/neparan broj ternarnim izrazom

let number = parseInt(prompt("Unesite broj:"));
let message = number % 2 === 0 ? "Broj je paran." : "Broj je neparan.";
console.log(message);

//Switch ocena

let ocjena = 3;
let opis;

switch (ocjena) {
  case 1:
    opis = "nedovoljan";
    break;
  case 2:
    opis = "dovoljan";
    break;
  case 3:
    opis = "dobar";
    break;
  case 4:
    opis = "vrlo dobar";
    break;
  case 5:
    opis = "odličan";
    break;
  default:
    opis = "nevažeća ocjena";
}

console.log(`Ocena ${ocjena} se prevodi kao ${opis}.`);

//Ispisivanje samo pozitivnih brojeva iz niza:

let niz = [-2, 3, 5, -7, 8];

let pozitivni = niz.filter(function (x) {
  return x > 0;
});

console.log(pozitivni); // [3, 5, 8]
