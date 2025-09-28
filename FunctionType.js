//Task 1: Function Declaration
function userProfile(name){
    console.log("hello "+name+"!")
}

userProfile("sivaganesh")

//Task 2: Arrow Function
const double =(num)=>num *2;
console.log(double(10));

//Task 3: Anonymous Function
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
})

//Task 4: Callback Function
function getUserData(name, callback)
{
    
    setTimeout(()=>{
        console.log("Hi"+ name)
        callback();
    }, 3000);
}

// Calling the getUserData Function
getUserData("Siva called",function (){
    console.log("CallBack Function")
});
