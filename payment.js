const payment = (paymenttype,user) =>{
   
    if(paymenttype === "creditcard"){
        return `payment done using ${paymenttype} by ${user}`;
    }
}

payment("creditcard","john");