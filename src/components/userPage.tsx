import React from "react";
import {useEffect, useState} from "react"
import { getAllUsersFromServer } from "../data/getAllUsers";
import User from "../interfaces/User";

const List=()=>{
    
    const [users, setUsers] =useState<User[]>([]);

    useEffect(()=>{
       getAllUsers();
    } ,[]);

    const getAllUsers= async () =>{
        const data = getAllUsersFromServer();
        console.log(data);
        // setUsers(data.data);
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