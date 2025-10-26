console.log("Login in Module Working");

const user_auth = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === "admin" && password === "admin") {
        resolve("User authenticated successfully");
    } else {
        reject("Authentication failed");
    }
    });
};

user_auth("admin", "admin")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
user_auth("user", "pass")
    .then((message) => {
        console.log(message);  
    })
    .catch((error) => {
        console.error(error);
    });