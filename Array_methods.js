const students = [
    {
        id: 101,
        name: "Arun",
        age: 20,
        department: "IT",
        marks: 85,
        skills: ["HTML", "CSS"]
    },
    {
        id: 102,
        name: "Vijay",
        age: 21,
        department: "CSE",
        marks: 72,
        skills: ["JavaScript", "React"]
    },
    {
        id: 103,
        name: "Kumar",
        age: 20,
        department: "IT",
        marks: 91,
        skills: ["JavaScript", "MongoDB"]
    },
    {
        id: 104,
        name: "Priya",
        age: 19,
        department: "ECE",
        marks: 68,
        skills: ["Python", "SQL"]
    },
    {
        id: 105,
        name: "Divya",
        age: 21,
        department: "CSE",
        marks: 88,
        skills: ["Java", "SQL"]
    }
];

// push 
const usePush = () =>{
     students.push({
        id: 106,
        name: "Ravi",
        age: 20,
        department: "IT",
        marks: 79,
        skills: ["HTML", "JavaScript"]});
};
usePush();
console.log(students);
console.log("---------------------------------");
const usePop = () =>{
  students.pop();
  console.log(students);
}
usePop();
console.log("---------------------------------");

const useunShift = () =>{
    students.unshift({
        id: 107,
        name: "Suresh",
        age: 20,
        department: "IT",
        marks: 82,
        skills: ["CSS", "JavaScript"]
    })
}
useunShift();
console.log(students);
console.log("---------------------------------");

const useShift = () =>{
    students.shift()
}
useShift();
console.log(students);
console.log("---------------------------------");

const useSplice = () => {
    students.splice(2,1);
}
useSplice();
console.log(students);
const useFind = () => {
    const student =students.find(student => {return student.id == 104});
    console.log(student);
};
useFind();



const useMap = () => {
 const names =  students.map(student => student.name);
 console.log(names);
}
useMap();

const useForEach = () => {
    students.forEach(student =>{console.log(student.name)});
   
};
useForEach();

const useMapJoin = () => {
    const names =  students.map(student => student.name);
     const studentsname = names.join("-");
    console.log(studentsname)
   }
   useMapJoin();

const useLength = () => {
    const res = students.length;
    console.log(res);
};
useLength();

const useFilter = () => {
     const mark = students.filter(student => student.marks > 80);
     console.log(mark);
};
useFilter();