const app = () =>{

   ["Dancing", "Singing", "Coding"].forEach((hobby) => {
       console.log(hobby);
   })
}

app();

const app1 = () =>{
    const hobbies = ["Dancing", "Singing", "Coding"];
    for (const hobby of hobbies){
        console.log(hobby);
    }
}
app1();
const facilities = {
  wifi: true,
  parking: false,
  pool: true,
  gym: false,
};
const { wifi, parking, pool, gym } = facilities;
console.log(`Facilities:
  Wifi: ${wifi}
  Parking: ${parking}
  Pool: ${pool}
  Gym: ${gym}
`);