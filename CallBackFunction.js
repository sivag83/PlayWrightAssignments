let browser = "Chrome";

function checkBrowserVersion(callback){
setTimeout(()=>{
    callback();
 console.log(browser)   
}, 3000)    

}
checkBrowserVersion(function(){

});

