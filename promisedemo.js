function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('register here')
        reject("Failed to register");
    },1000)
    })
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('login here')
        reject("Failed to login");
    },2000)
    })
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('getData here')
        resolve();
    },4000)
    })
}
function displayData(){
        setTimeout(()=>{
        console.log('displayData here')
    },6000)
}
// register().
// then(login).
// then(getData).
// then(displayData).
// catch((err)=>{
//     console.log("Error:",err)
// });

async function test(){
    try{
        await register();
        await getData();
        await regiter();
        displayData();
    }
    catch(err){
        console.log("Error :",err);
    }
}
test();

console.log("Call Another Application");