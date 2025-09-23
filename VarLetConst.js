// Global constant
const browserName = "Chrome";

function getBrowserName() {
    if (browserName === "Chrome") {
        let browserName = "Firefox"; // shadows the global variable
        console.log("Inside if block:", browserName);
    }
    // var is function-scoped
    console.log("Outside block but inside function:", browserName);
}

getBrowserName();
