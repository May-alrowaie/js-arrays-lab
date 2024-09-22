/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

//const foods = []

//console.log("Exercise 1 result:", foods)

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

//console.log('Exercise 2 result:', foods);

// Initialize the foods array
let foods = []

// Add 'pizza' and 'cheeseburger' to the foods array
foods.unshift("pizza", "cheeseburger")

// Log the result
console.log("Exercise 2 result:", foods) // Should output: ['pizza', 'cheeseburger']

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

//console.log("Exercise 3 result:", foods)

// Assuming the foods array is already defined and contains items
let foodss = ["pizza", "cheeseburger"]

// Insert 'taco' at the beginning of the foods array
foodss.unshift("taco")

// Log the result
console.log("Exercise 3 result:", foodss) // Should output: ['taco', 'pizza', 'cheeseburger']

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

//console.log("Exercise 4 result:", favFood)

// Assuming the foods array is already defined

let foodsss = ["taco", "pizza", "cheeseburger"]

// Access the 'pizza' string by its index and assign it to favFood
let favFood = foodsss[1] // 'pizza' is at index 1

// Log the result
console.log("Exercise 4 result:", favFood) // Should output: 'pizza'

/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item0)
splice(start, deleteCount, item0, item1)
//splice(start, deleteCount, item0, item1, ) 
*/

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

//console.log('Exercise 5 result:', foods);
// Assuming the foods array is already defined
let foods3 = ["taco", "pizza", "cheeseburger"]

// Insert 'tofu' between 'pizza' and 'cheeseburger'
foods3.splice(2, 0, "tofu") // 2 is the index where 'tofu' will be inserted

// Log the result
console.log("Exercise 5 result:", foods3) // Should output: ['taco', 'pizza', 'tofu', 'cheeseburger']

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

//console.log('Exercise 6 result:', foods);

// Assuming the foods array is already defined
let foods6 = ["taco", "pizza", "tofu", "cheeseburger"]

// Replace 'pizza' with 'sushi' and 'cupcake'
foods6.splice(1, 1, "sushi", "cupcake") // 1 is the index of 'pizza', 1 indicates removing one element

// Log the result
console.log("Exercise 6 result:", foods6) // Should output: ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
//console.log("Exercise 7 result:", yummy)

// Assuming the foods array is already defined
let foods7 = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"]

// Use the slice() method to create a new array with 'sushi' and 'cupcake'
let yummy = foods7.slice(1, 3) // 1 is the start index, 3 is the end index (exclusive)

// Log the result
console.log("Exercise 7 result:", yummy) // Should output: ['sushi', 'cupcake']

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods8` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
//console.log('Exercise 8 result:', soyIdx);

// Assuming the foods array is already defined
let foods8 = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"]

// Use indexOf() to find the index of 'tofu'
let soyIdx = foods8.indexOf("tofu")

// Log the result
console.log("Exercise 8 result:", soyIdx) // Should output: 3

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
//console.log('Exercise 9 result:', allFoods);

// Assuming the foods array is already defined
let foods9 = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"]

// Use join() to concatenate the strings in the foods array, separated by ' -> '
let allFoods = foods9.join(" -> ")

// Log the result
console.log("Exercise 9 result:", allFoods) // Should output: 'taco -> sushi -> cupcake -> tofu -> cheeseburger'

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
//console.log('Exercise 10 result:', hasSoup);
// Assuming the foods array is already defined
let foods10 = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"]

// Use includes() to check if the array contains 'soup'
let hasSoup = foods10.includes("soup")

// Log the result
console.log("Exercise 10 result:", hasSoup) // Should output: false
/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

//console.log('Exercise 11 result:', odds);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]

// Initialize an empty array to hold odd numbers
let odds = []

// Use forEach to iterate through the nums array
nums.forEach((num) => {
  // Check if the number is odd
  if (num % 2 !== 0) {
    // Push the odd number to the odds array
    odds.push(num)
  }
})

// Log the result
console.log("Exercise 11 result:", odds) // Should output: [5, 23, 15, 21, 9, 45, 7, 81]

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
//console.log("Exercise 12 Results:")
//console.log("  fizz:", fizz)
//console.log("  buzz:", buzz)
//console.log("  fizzbuzz:", fizzbuzz)

const nums1 = [3, 5, 15, 18, 20, 30, 33, 45, 50, 60]

// Initialize empty arrays for fizz, buzz, and fizzbuzz
let fizz = []
let buzz = []
let fizzbuzz = []

// Use forEach to iterate through the nums array
nums1.forEach((num) => {
  if (num % 3 === 0) {
    fizz.push(num) // Push to fizz if divisible by 3
  }
  if (num % 5 === 0) {
    buzz.push(num) // Push to buzz if divisible by 5
  }
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num) // Push to fizzbuzz if divisible by both 3 and 5
  }
})

// Log the results
console.log("Exercise 12 Results:")
console.log("  fizz:", fizz) // Contains numbers divisible by 3 //fizz: (7) [3, 15, 18, 30, 33, 45, 60]
console.log("  buzz:", buzz) // Contains numbers divisible by 5 //buzz: (7) [5, 15, 20, 30, 45, 50, 60]
console.log("  fizzbuzz:", fizzbuzz) // Contains numbers divisible by both 3 and 5 //fizzbuzz: (4) [15, 30, 45, 60]

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

/*const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
]
*/
//console.log("Exercise 13 result:", numList)

const numArrays1 = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
]

// Assign the last nested array to numList
const numList = numArrays1[numArrays1.length - 1]

// Log the result
console.log("Exercise 13 result:", numList) // Should output: [7, 81, 90]

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
//console.log('Exercise 14 result:', num);

const numArrays2 = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
]

// Retrieve the number 66 from the numArrays array
const num = numArrays2[2][1] // Access the third nested array and the second element

// Log the result
console.log("Exercise 14 result:", num) // Should output: 66

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
//console.log('Exercise 15 result:\n', total);

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
]

// Initialize the total variable to 0
let total = 0

// Use nested forEach to iterate through the numArrays
numArrays.forEach((innerArray) => {
  innerArray.forEach((num) => {
    total += num // Add each number to the total
  })
})

// Log the result
console.log("Exercise 15 result:\n", total) // Should output the sum of all numbers
//Exercise 15 result:534
// the End :)
