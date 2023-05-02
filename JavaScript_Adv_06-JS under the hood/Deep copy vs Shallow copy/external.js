//shallow copy-deep copy
//spread operator, za manje nizove sa primitivnim vrednostima
// let obj = { a: 1 };
// console.log(obj);
// let numbers = [obj, 2, 3];
// let numbersCopy = [...numbers];
// let numbersDeep = JSON.parse(JSON.stringify(numbers)); //deep copy
// let numbersDeep2 = { a: obj.a }; //deep copy
// obj.a = 5;
// console.log(obj);
// console.log(numbers);
// console.log(numbersCopy);
// console.log(numbersDeep);
// console.log(numbersDeep2);

//spread objekata - obj2.b prepisuje obj1.b, b nije vise 2 vec 3
// let obj1 = { a: 1, b: 2 };
// console.log(obj1)
// let obj2 = { b: 3, d: 4 };
// console.log(obj2)
// let rez = { ...obj1, ...obj2 };
// console.log(rez);

// //Object.assign kopira samo ako objekat/niz sadrzi vrednosti primitivnog tipa
// //object.assign ima prvi argument prazan {} da se ne bi menjao objekat
// let originalObject = { name: "apple", numbers: [1, 2, 3] };
// let clonedObject = Object.assign({}, originalObject);
// originalObject.name = "orange";
// originalObject.numbers[0] = 0;
// console.log(originalObject);
// console.log(clonedObject);

// //slice() i Array.from() odlican za plitku kopiju nizova
// let originalArr = [1, 2, 3, 4, 5];
// let clonedArrSlice = originalArr.slice();
// clonedArrSlice.push(6);
// console.log(originalArr);
// console.log(clonedArrSlice);

// //set uklanja sva ponavljanja iz niza
// let set = new Set(["a", "b", "c", "b"]);
// let clonedArrArrayFrom = Array.from(set);
// clonedArrArrayFrom.push("d");
// console.log(set);
// console.log(clonedArrArrayFrom);

// //concat() spajanje dva ili vise nizova - brzi je od spread op, bolji izbor za velike nizove
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [5, 6, 7, 8];
// const number12 = numbers1.concat(numbers2);
// console.log(number12);

// //primitivi su nepromenljivi, objekti jesu
// //svi primitivi se prenose po vrednosti a neprimitivi po referenci
