let nameData = { firstName: "John", lastName: "Smith" };
let personalData = { age: 20, gender: "Male" };

console.log(nameData.firstName);
console.log(personalData.age);

//in es5
let combinedData1 = Object.assign(nameData, personalData);
console.log(combinedData1);

//in es6
let combineData2 = { ...nameData, ...personalData }; //...is called the spread operator
console.log(combineData2);

let oddNumbers=[3,5,7,9,11];
let evenNumbers=[2,4,6,8,10];

let copy=[...oddNumbers,...evenNumbers].sort((a, b) => a - b); //we are comparing the numbers before sorting by using lambda expression
console.log(copy);