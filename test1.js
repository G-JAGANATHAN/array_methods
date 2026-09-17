const cars = [
  {
    carId: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    features: ["Bluetooth", "Backup Camera"],
    maintenance: { "2024-05-10": true, "2024-05-11": false },
    specs: { engine: ["I4"], transmission: ["Automatic", "CVT"] },
  },
  {
    carId: 2,
    make: "Ford",
    model: "Mustang",
    year: 2022,
    features: ["Sunroof", "Bluetooth", "Leather Seats"],
    maintenance: { "2024-06-01": true },
    specs: { engine: ["V8", "supercharged"], transmission: ["Manual"] },
  },
  {
    carId: 3,
    make: "Honda",
    model: "Civic",
    year: 2021,
    features: ["Apple CarPlay"],
    maintenance: { "2024-04-20": false },
    specs: { engine: ["I4"], transmission: ["Automatic"] },
  },
  {
    carId: 4,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    features: ["Autopilot", "Bluetooth"],
    maintenance: {},
    specs: {
      engine: ["Dual Motor", "Electric"],
      transmission: ["Single-speed"],
    },
  },
];

 const swapFirst = (make) => {
  const foundCar = cars.find((car) => car.make === make);
  if (foundCar) {
    cars.unshift(foundCar);
  }
   
  const index = cars.findLastIndex((car) => car.make === make);
  cars.splice(index,1);
  console.log(cars);
};
swapFirst("Tesla");
const findMaintenance = () => {
  return cars.map (car => {
    return {[car.make]:car.maintenance}});
 
};
console.log(findMaintenance());


//jion method

const displayFeatures=(cars)=>{
   for(car of cars){
    console.log(car.features.join(","));
   }
}
displayFeatures(cars);
console.log("===============================");
const dispalyTransmission = (cars) => {
      for(car of cars){
        console.log(car.specs.transmission.join(","));
      }
}
dispalyTransmission(cars)
console.log("===============================");

const dispalyEngine=(cars)=>{
  for(car of cars){
    console.log(car.specs.engine.join("'"));
  }
}
dispalyEngine(cars);
console.log("===============================");

const customerCarSelection=(cars)=>{
  const carNames=[];
  for(car of cars){
    carNames.push(car.make + ":" + car.model);
  }
  return carNames.join("|")
}
console.log(customerCarSelection(cars));
console.log("===============================");
 
const displayFeatures = (car)=>{
  for (car of cars){
  console.log(car.features.join(","));}
}
displayFeatures(cars);
console.log("===============================");
// Length methods
const getFeatures = (car) => {
  const length=[];
  for(car of cars){
    length.push(car.features.length);
  }
  return length;
}
console.log(getFeatures(cars));
console.log("===============================");


const DispalyEachCarTransmission = (car) => {
  const transmissionLength =[];
  for(car of cars){
   transmissionLength.push(car.specs.transmission.length);
  }
  return transmissionLength;
}
console.log(DispalyEachCarTransmission(cars));
console.log("===============================");

const DispalyEachCarEngine = (car) => {
  const engineLength =[];
  for(car of cars){
   engineLength.push(car.specs.engine.length);
  }
  return engineLength;
}
console.log(DispalyEachCarEngine(cars));

const totalNumberOfCars = (car) =>{
  
    const total =(cars.length);
    return total;
  
}
console.log(totalNumberOfCars(cars));
console.log("===============================");

const checkFeatures = (car) =>{
 for(car of cars) 
  if(car.features.length > 0){
    return "Features available";
  } else{
   return "No features available";
  }
}
console.log(checkFeatures(cars));
console.log("===============================");
//find carid 3 to splice method use to remove cardId 
const findPosition = (carId) => {
  const index = cars.findIndex(car =>car.carId == carId);
  cars.splice(index,1);
  console.log(cars);
}
findPosition(3);
console.log("===============================");

const findToyota =(cars,model,features) =>{
  const car = cars.find(car => car.model == model);
  if(car){
   const finds =car.features.findIndex(item => item === features);
   if(finds !==-1){
     car.features.splice(finds,1);
   }
  }
 return car;
}
console.log(findToyota(cars,"Corolla","Bluetooth"));

const addNewFeatures = (cars,model,features) =>{
  const car = cars.find(car => car.model == model);
  if(car){
    car.features.splice(0,0,features);
  }
  return car;
}
console.log(addNewFeatures(cars,"Civic","Sunroof"));

const getCarFeatures =(features)=>{
  return features.split(",")
}
console.log(getCarFeatures("Bluetooth, Backup Camera, Sunroof"));

const splitDate =(date)=>{
  return date.split("-");
}
console.log(splitDate("2024-05-10"));

const splitEngine = (engine) =>{
  return engine.split(" ");
}
console.log(splitEngine("V8 supercharged"));
// unshift method
const useUnshift = (cars,model,feature) => {
  const car =cars.find(car => car.model == model);
  car.features.unshift(feature);
  return cars;
}
console.log(useUnshift(cars,"Model 3","360 Camera"));

const findCorolla = (cars,model,engine) => {
  const car =cars.find(car => car.model === model);
  if(car){
    car.specs.engine.unshift(engine);
  }
  return car;
}
console.log(findCorolla(cars,"Corolla","Hybrid"));
// remove first  feature
const removeFeatures= (cars,model)=>{
  const car =cars.find(car => car.model == model)
  car.features.shift();
  return car;
}

console.log(removeFeatures(cars,"Mustang"));

const removeSpecsEngine= (cars,model)=>{
  const car =cars.find(car => car.model == model)
  car.specs.engine.shift();
  return car;
}

console.log(removeSpecsEngine(cars,"Mustang"));

const removeTransmission= (cars,model)=>{
  const car =cars.find(car => car.model == model)
  car.specs.transmission.shift();
  return car;
}

console.log(removeTransmission(cars,"Corolla"));
//foreach mrthod
 
const findModels =(cars)=>{
 cars.forEach(car => {console.log(car.model)});
 
}
console.log(findModels(cars));

const findSpecs =(cars)=>{
  cars.forEach(car => {console.log(car.specs)});
};
console.log(findSpecs(cars));

const dispalyYear =(cars)=>{
  cars.forEach(car =>{console.log(car.year)});
}
console.log(dispalyYear(cars));

const getCar =(car)=>{
  return car?.specs?.engine;
  
}
console.log(getCar(cars[0]));