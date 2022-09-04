import { CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";


export default function showLocation() { 
     let l ={
        address: "",
        owner:"",
        communication:"",
        details:"",
        notes:""
     }

     const [location, setLocation] = useState(l);
     const {id,name} =useParams();
    useEffect(() => {
        ShowDetails(id||'');
    }, []);

    const ShowDetails=async (id:string) => {
        var config = {
            method: 'get',
            url: `http://localhost:3333/location/${id}`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setLocation(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
          
     
     }

     return (
     <Card sx={{ maxWidth: 345 }} >
        <CardContent>
        
       <img className='img'
             
                
                loading="lazy" height={"300"} width={"400"}></img>
            <form className='auth-inner'>
                <Typography >Location</Typography>
                <div className="mb-3">
                    <Typography >address:  {location.address}</Typography>
                </div>
                <div className="mb-3">
                    <Typography >owner:   {location.owner}</Typography>
                </div>
                <div className="mb-3">
                    <Typography >communication:   {location.communication}</Typography>
                </div>
                <div className="mb-3">
                    <Typography >details :   {location.details}</Typography>
                </div>
                <div className="mb-3">
                    <Typography >notes:   {location.notes}</Typography>
                </div>
            </form>
        </CardContent>
    </Card>
);
    }