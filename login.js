console.log("Login in Module Working");
const login = () => {
    const obj = {username: "user1", password: "pass123"};
    if(obj.username === "user1" && obj.password === "pass123"){
        console.log("Login Successful");
    } else {
        console.log("Login Failed");
    }
}