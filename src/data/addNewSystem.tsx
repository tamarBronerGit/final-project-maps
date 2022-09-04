import axios from "axios";
import { System } from "typescript";


export default async function addNewSystem(dataSystem:any ){
    try {     
        const res = await axios.post(`http://localhost:3333/system/`,dataSystem);
        let tempList = await res.data;
        console.log(res.data);
       return (res.data);
        } 
    
    catch (error) { console.log(error); }
}