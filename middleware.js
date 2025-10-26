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
console.log("This is for testing")
