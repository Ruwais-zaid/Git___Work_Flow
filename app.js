const app=() =>{
    const  s = "Lewis Hamilton";
    const ans = s.split(" ")[0]
    console.log(ans);
}

app()

function app2(){

    var a = 10;
    var b = 20;
    return a + b;
}

const ans1 = app2();
console.log(ans1);

function app3(){

    const [a,b] = [1,2,3]
    console.log(a);
    console.log(b)
}

app3()