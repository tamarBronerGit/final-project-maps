import React from "react";
import {useEffect, useState} from "react"

import axios from "axios";

interface System{
    _id: string;
    uid: string;
    topic: string;
    urlName: string;
    objectName: string;
    managerUid: string;
    description: string;
    communicationDetails: object;
    _v:number
}
const Home=()=>{

    const [systems, setSystems] = useState<System[]>([]);
    
    useEffect(()=>{
        getAllSystem();
     } ,[]);
 
     const getAllSystem= async () =>{
         const data = await axios.get<System[]>('http://localhost:3333/system');
         console.log(data);
         setSystems(data.data);
     }

    const renderHome=(): JSX.Element[]=>{
        return systems.map(system=>{
            return(
                <div>
                        <ul>id: {system._id}</ul>  
                        <li>firstName: {system.managerUid}</li>
                        <li>lastName: {system.objectName}</li>
                        <li>email: {system.topic}</li>
                        <br/>
                </div>
            )
        })
    }
   return(
    <ul>
        {renderHome()}
    </ul>
   )
}

export default Home;