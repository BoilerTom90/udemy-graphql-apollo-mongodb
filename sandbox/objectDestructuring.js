const obj = {
    name1: "me",
    age: 22,
    city: "here",
    country: "USA"
}

// const name = obj.name;
// const age = obj.age;

const { name1, age } = obj;
console.log(name1, age);

// array destructurig
const myArr = [1, 2, 3, 4];
const i0 = myArr[0];
const i1 = myArr[1];

const [el0, el1, el2, el3] = myArr;
console.log(el0, el1, el2, el3);
