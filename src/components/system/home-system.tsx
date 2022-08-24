import React from "react";
import { useEffect, useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { FormDialog } from "./addSystem";
import '../../css/app.css'
import showSystem from "./showSystem";
import { useNavigate } from 'react-router-dom';



interface System {
    _id: string;
    uid: string;
    topic: string;
    urlName: string;
    urlImage: string;
    objectName: string;
    managerUid: string;
    description: string;
    communicationDetails: object;
    _v: number
}
const Home = () => {
    const navigate = useNavigate();

    const [systems, setSystems] = useState<System[]>([]);

    useEffect(() => {
        getAllSystem();
    }, []);

    const getAllSystem = async () => {
        const data = await axios.get<System[]>('http://localhost:3333/system');
        console.log(data);
        setSystems(data.data);
    }
    
    const DeleteSystem= async (id:string) => {
        var config = {
          method: 'delete',
          url: `http://localhost:3333/system/${id}`,
          headers: { }
        };

        axios(config)
        .then(function (response) {
            console.log("delete successful")
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    const ShowDetails= async (id:string) => {
        // navigate(`/ShowSystem/hello/${systems.urlName}/${systems._id}`)
        showSystem();
    }

    const renderHome=()=>{
        return (
             <div id="divAllCards"> { systems.map(system => {
                return (
                    <div>
                        <Card sx={{ maxWidth: 340 }}>
                            <CardMedia component="img" height="150" image={system.urlImage} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <div>{system.topic}</div>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>
                                        <th>id: {system._id}</th>
                                        <tr>topic       :{system.topic}</tr>           
                                        <tr>ObjectName  :{system.objectName}</tr> 
                                        <br /> 
                                    </div>
                                </Typography>
                            </CardContent>
                            <CardActions>
<<<<<<< HEAD
                                {/* <Button size="small" onClick={()=>ShowDetails(system._id)}>Show details</Button> */}
=======
                                <Button size="small" onClick={()=> navigate(`/ShowSystem/${system.urlName}/${system._id}`)}>Show system</Button>
>>>>>>> 83641428192533be7b1593d7585f681209a375f4
                                <Button size="small" onClick={()=>DeleteSystem(system._id)}>Delete this system</Button>
                            </CardActions>
                        </Card>
                        <br/>
                    </div>
                );
            })
        }</div> )
    }

    return (
        <div>
            <FormDialog/>
             {renderHome()}
        </div>
    )
}
export default Home;