const greet = () => {
    console.log("Hello");
};

const start = (callback) => {
    callback();
};

start(greet);
console.log("₹₹₹₹₹₹₹₹₹₹₹₹₹₹₹₹₹₹₹₹");
const calculateMarks = (mark1, mark2, mark3, callback) => {
    const total = mark1 + mark2 + mark3;

    callback(total);
};

const showResult = (total) => {
    console.log(`Total marks: ${total}`);
};

calculateMarks(80, 75, 90, showResult);

// promise 
const myPromise = new Promise((resolve, reject) => {
    const admission = true;

    if (admission) {
        resolve("Admission successful");
    } else {
        reject("Admission failed");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });