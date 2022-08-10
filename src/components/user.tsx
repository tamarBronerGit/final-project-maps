import React from "react";
import { getAllUsersFromServer } from '../data/api';
import {useEffect, useState} from "react"
import axios from "axios";

interface User{
    _id: string
    uid:string;
    role: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
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
                    <th>id: {user._id}</th>  
                    <tr>firstName: {user.firstName}</tr>
                    <tr>lastName: {user.lastName}</tr>
                    <tr>email: {user.email}</tr>
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