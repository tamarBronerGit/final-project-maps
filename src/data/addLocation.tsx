import axios from "axios";

export default async function addLocationMap(dataLocation:any)
{
    try {     
        const res = await axios.post(`http://localhost:3333/location/`,dataLocation);
        let tempList = await res.data;
        console.log(res.data)
        return (tempList);
        
    } catch (error) { console.log(error); }
}