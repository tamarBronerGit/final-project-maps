import axios from "axios";


export default async function createNewUser(newUser:any){
    try {
    const user= await axios.post('http://localhost:3333/user/', newUser);
    console.log(user.data);
     debugger;
}
catch (error) {
    console.log('error-createUser',error);
}
}
