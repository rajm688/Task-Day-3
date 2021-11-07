var arr = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);//for iteration
}
console.log("__________________________");

for(value in arr){
    console.log(arr[value]);
}

console.log("__________________________");

for(value of arr){
    console.log(value);
}

console.log("__________________________");

arr.forEach(value => console.log(value))