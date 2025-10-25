function app1(){
    const ans = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("App1 Resolved");
        }, 2000);
    })
    console.log(ans);
}

function app2(){

    var a = 10;
    var b = 20;
    return a + b;
}

const ans1 = app2();
console.log(ans1);
