const getGreeting = (isLoggedIn, username) => {
  console.log(
    isLoggedIn && username ? "wecome back" + username : "welcome guest"
  );
};
getGreeting(true, "jagan");

let cart = { items: 0, discountCode: null };
const getDiscountCode = (cart) => {
  console.log(cart.discountCode);
  console.log((cart.discountCode ??= "SUMMER25"));
};
getDiscountCode(cart);

const users = [
  { name: "Alice", age: 17, isVIP: false },
  { name: "Bob", age: 22, isVIP: true },
  { name: "Charlie", age: 15, isVIP: false },
  { name: "Diana", age: 30, isVIP: true },
];

const disPalyAge = (user) => {
  const Age = user.filter((user) => user.age >= 18);
  console.log(Age);
};
disPalyAge(users);

function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}
calculate(5, 6, function (res) {
  console.log(`The Result is ${res}`);
});

function processNames(namesArray, callback) {
  for (let i = 0; i < namesArray.length; i++) {
    callback(namesArray[i]);
  }
}
processNames(["alice", "bob", "charlie"], function (name) {
  console.log(name.toUpperCase());
});

const getWeather = (city, temperature, callback) => {
  callback(city, temperature);
};
getWeather("dindigul", 40, (city, temperature) => {
  console.log(`${city} temperature is ${temperature}°C`);
});
