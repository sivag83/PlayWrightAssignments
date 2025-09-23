// Global constant with let
const browserName = "Chrome";

function getBrowserName(browserName) {
    if (browserName === "Chrome") {
        let browserName = "Firefox"; // shadows the global variable
        console.log("Inside if block:", browserName);
    }
    // var is function-scoped
    console.log("1. Outside block but inside function:", browserName);
}

getBrowserName(browserName);


// Global constant with let
const browName = "Chrome";

function getBrowsersName(browName) {
    if (browserName === "Edge") {
        var browserName = "Opera"; // shadows the global variable
    }
    // var is function-scoped
    
}
console.log("Outside block but inside function:", browserName);
getBrowsersName(browName);