const payment = (paymenttype,user) =>{
   
    if(paymenttype === "creditcard"){
        return `payment done using ${paymenttype} by ${user}`;
    }
}

payment("creditcard","john");

const RazorpayPayment = (paymenttype,user) =>{
    if(paymenttype === "Razorpay"){
        return `payment done using ${paymenttype} by ${user}`;
    }
}

RazorpayPayment("Razorpay","admin");

const PaypalPayment = (paymenttype,user) =>{
    if(paymenttype === "Paypal"){
        return `payment done using ${paymenttype} by ${user}`;
    }
}

PaypalPayment("Paypal","user");

console.log("Payment Module Working");

const StripePayment =(paymenttype,user)=>{

    if(paymenttype=='card' && user=='user'){

        console.log("Payment is done from card")
    }

}
console.log("Hi")