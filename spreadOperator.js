const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(...arr1)
console.log(arr3)

// output
// $ node spreadOperator.js
// 1 2 3
// [ 1, 2, 3, 4, 5, 6 ]

const user1 = {
   name: "Dave",
   age: 30,
   city: "Somewhere",
   country: "USA"
}

const user2 = {
   ...user1,
   name: "Bob"
}

console.log(user1, user2);