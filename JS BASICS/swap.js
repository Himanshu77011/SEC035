let a = 40;
let b = 30;

console.log(`before swap a= ${a}`);
console.log(`before swap a= ${b}`);

// a would be swapped to b and b would be swapped to a
[b, a] = [a, b];

console.log(`after swap a= ${a}`);
console.log(`after swap a= ${b}`);
