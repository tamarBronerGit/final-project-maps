import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSystemsByUser } from "../../data/getSystemsByUser";
import Home from "./home-system";


export default function showSystemFromUser(uid: string | undefined){
   if(uid) 
    getSystemsByUser(uid);
    else
    console.log("User not found");
    // var config = {
    //     method: 'get',
    //     url: `http://localhost:3333/user/${uid}`,
    //     headers: { }
    //   };
    //   axios(config)
    //   .then(function (response) {
    //     console.log((response.data));
    //     const userIn= (response.data._id);
    //     console.log(userIn);
    //     getSystemsUser(userIn);
    // })       
    //   .catch(function (error) {
    //     console.log(error);
    // });
  
    // const getSystemsUser=(_id:string)=>{
    //     var config = {
    //         method: 'get',
    //         url: `http://localhost:3333/system/${_id}`,
    //         headers: { }
    //       };
    //       axios(config)
    //       .then(function (response) {console.log((response.data));
    //     })
    //       .catch(function (error) {
    //         console.log(error);
    //     });
    // }
} 
