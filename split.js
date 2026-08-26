//split by space
let sentance="Arry Methods";
let words=sentance.split(" ");
console.log(words);//output=[ 'Arry', 'Methods' ]

//splity by comma
let fruits="Apple,Mango,Orange,Banana";
let fruitslist=fruits.split(",");
console.log(fruitslist);//output=[ 'Apple', 'Mango', 'Orange', 'Banana' ]

//sploit each character
let subjectName="javascript";
let char=subjectName.split("");
console.log(char);//output=['j', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']
   
//split by -
let date="26-08-2026"
let part=date.split("-");
console.log(part);//output=[ '26', '08', '2026' ]

//split by/
let path="home/user/documents";
let parts=path.split("/");
console.log(parts);//output=[ 'home', 'user', 'documents' ]

//split by#
let products = "Laptop#Mouse#Keyboard#Monitor";
let product=products.split("#");
console.log(product);//output=[ 'Laptop', 'Mouse', 'Keyboard', 'Monitor' ]