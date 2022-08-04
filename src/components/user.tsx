import React from "react";
import { getAllUsersFromServer } from '../data/api';
import {useEffect, useState} from "react"
import axios from "axios";

interface User{
    _id: string
    name: string
    email: string
    password: string
    _v:number
}

const List=()=>{
    const [users, setUsers] =useState<User[]>([]);

    useEffect(()=>{
       getAllUsers();
    } ,[]);

    const getAllUsers= async () =>{
        const data = await axios.get<User[]>('http://localhost:3333/user');
        console.log(data);
        setUsers(data.data);
    }
    
    const renderUser=(): JSX.Element[]=>{
        return users.map(user=>{
            return(
                <div>
                    <h1>id: {user._id}</h1>  
                    <h1>name: {user.name}</h1>
                    <h1>email: {user.email}</h1>
                    <h1>password: {user.password}</h1>
                    <br/>
                </div>
              
               
            )

        })
    }
   return(
    <ul>
        {renderUser()}
    </ul>
   )
};
export default List;