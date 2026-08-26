//Remove array elements
let fruits=["Apple","Mango","Orange","Banana"];
console.log(fruits.splice(1,2));//output=["mango","orange"]

//Add elements
let colors=["Red","Blue","Green"];
colors.splice(1, 0, "Yellow");
console.log(colors);//output=["Red","Yellow","Blue","Green"]

//Replace an elements
let animals=["dog","cat","rat"];
animals.splice(1,1,"deer");
console.log(animals);//output=[ 'dog', 'deer', 'rat' ]

//Add multiple elements
let numbers=[20,30,40];
numbers.splice(2,0,35,39);
console .log(numbers);//output=[ 20, 30, 35, 39, 40 ]

//Remove two subjacts
let subjects=["Maths", "Physics", "Chemistry", "Java", "Python"];
console.log(subjects.splice(2,2));//output=[ 'Chemistry', 'Java' ]