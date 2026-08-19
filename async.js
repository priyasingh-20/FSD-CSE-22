function register(){
    setTimeout(()=>{
        console.log('register here')
    },1000)
}
function login(){
    setTimeout(()=>{
        console.log('login here')
    },2000)
}
function getData(){
    setTimeout(()=>{
        console.log('getData here')
    },4000)
}
function displayData(){
    setTimeout(()=>{
        console.log('displayData here')
    },6000)
}

register();
login();
getData();
displayData();
console.log("Call Another Application");