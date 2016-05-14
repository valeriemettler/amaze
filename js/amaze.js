//an array with 10 random numbers

var num;
var arr = [];

var random_number_generator = function(){
    num = Math.floor(Math.random() * 100) + 1;
    console.log("num", num);
    return num;
};
var b = random_number_generator();
console.log("b", b);




var random_array_generator = function() {
    for (var i=0, n=10; i<n; i++) {
    arr.push(Math.round(Math.random()* n));
   }
}
random_array_generator();
console.log("arr", arr);


//generates a random whole number between 1 and 100
// var rand_num = Math.floor(Math.random() * 100) + 1;
// console.log(rand_num);

//generates 0s and 1s
// var maze_generator =  (Math.floor(Math.random() * 9) % 2);
// console.log(maze_generator);