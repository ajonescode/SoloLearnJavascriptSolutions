// What is the output of the following code?
function magic(...nums) {
  let sum = 0;
  nums.filter(n => n % 2 == 0).map(x => sum+= x);
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));