function register(cb){
    setTimeout(()=>{
        console.log('register here')
        cb();
    },1000)
}
function login(cb){
    setTimeout(()=>{
        console.log('login here')
        cb();
    },2000)
}
function getData(cb){
    setTimeout(()=>{
        console.log('getData here')
        cb();
    },4000)
}
function displayData(){
    setTimeout(()=>{
        console.log('displayData here')
    },6000)
}
//callback Hell problem
register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    }
                )
            }
        )
    }
);

console.log("Call Another Application");