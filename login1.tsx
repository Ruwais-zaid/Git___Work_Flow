enum role {
    ADMIN = "admin",
    USER = "user"
}

type user = {
    name: string;
    role: role;
} 

const getUser = (): Promise<user> => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name: "John", role: role.ADMIN})
        }, 1000);
    })
}


getUser().then((user) => console.log(user.role)).catch((err) => console.log(err));