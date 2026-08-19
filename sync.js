function register(){
    waitfordelay(1000);
    console.log("register here");
}
function login(){
    waitfordelay(2000);
    console.log("login here");
}
function getData(){
    waitfordelay(4000);
    console.log("getData here");
}
function displayData(){
    waitfordelay(6000);
    console.log("displayData here");
}
function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
        
    }
}
register();
login();
getData();
displayData();
console.log("Call Another Application");