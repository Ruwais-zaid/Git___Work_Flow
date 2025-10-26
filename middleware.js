const app = () => {

    const autbearer = "Bearerabc123xyz456";
    const token = (autbearer.split(" ")[0]).substring(6);
    console.log(token);
    if(!token){
        console.log("No token found");
    } else {
        console.log("Token found:", token);

}
}
app();
const app1 = () =>{
    
    const user = {name:"admin123",role:"admin"};
    if(user?.name){
        console.log("User name is:", user.name);
    } else {
        console.log("No user name found");
    }
}