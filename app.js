// function doSomeThing(data){
//     console.log(data);
// }

// var a  = doSomeThing("Hello Test");
// console.log(a);


/// Hoisting /// 

// console.log(a);
// var a = "Test hoisting"; 

function doSomeWork(callback) {
    // working ... async is going in this line 
    callback("Hello World");
}

var a = doSomeWork(function(data){
    console.log(data);
})

console.log("after function");