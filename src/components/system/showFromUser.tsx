import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./home-system";


export default function showSystemFromUser(uid: string | undefined){
    
    var config = {
        method: 'get',
        url: `http://localhost:3333/system/${uid}`,
        headers: { }
      };
      axios(config)
      .then(function (response) {
        console.log((response.data[0].managerUid));
        const userIn= getUser(response.data[0].managerUid);
        console.log(userIn);

    })
        
      .catch(function (error) {
        console.log(error);
    });
    
    const getUser=(uid:string)=>{
        var config = {
            method: 'get',
            url: `http://localhost:3333/user/${uid}`,
            headers: { }
          };
          axios(config)
          .then(function (response) {console.log((response.data));
        })
          .catch(function (error) {
            console.log(error);
        });
    }

}