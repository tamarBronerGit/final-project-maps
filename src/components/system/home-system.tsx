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
import EditSystem from "./EditSystem";
import { useNavigate } from 'react-router-dom';
import MenuAppBar from "../BarInMapPage";
import { async } from "@firebase/util";
import { Role, User } from "../user";

interface System {
    _id: string;
    name: string;
    urlImage: string;
    subject: string;
    admin_id: string;
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

    const getSystem=async(managerUid:string)=>{
        const data = await axios.get<System[]>(`http://localhost:3333/system${managerUid}`);
        console.log(data);
        setSystems(data.data);
    }
    // const getUser=async(managerUid:string)=>{
    //     const data = await axios.get<User>(`http://localhost:3333/user${managerUid}`);
    //     console.log(data);
    //     if(await ifManager(data.data)) getSystem(managerUid);
    // }

    // const ifManager=async(user:User)=>{
    //     if(user.role===Role.manager)
    //         return true;
    //     return false;
    // }
    
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
        EditSystem();
    }

    const renderHome=()=>{
        return (<div>
            <MenuAppBar/>
            <FormDialog/>
             <div id="divAllCards"> { systems.map(system => {
                return (
                    <div id="card">
                        <Card sx={{ maxWidth: 340 }}>
                            <CardMedia component="img" height="150" image={system.urlImage} alt="green iguana" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <div>{system.subject}</div>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <div>
                                        <th>id: {system._id}</th>
                                        <tr>admin_id  :{system.admin_id}</tr>           
                                        <tr>name  :{system.name}</tr> 
                                        <br /> 
                                    </div>
                                </Typography>
                            </CardContent>
                            <CardActions>


                                {/* <Button size="small" onClick={()=>ShowDetails(system._id)}>Show details</Button> */}

                                <Button size="small" onClick={()=> navigate(`/ShowSystem/${system.name}/${system._id}`)}>Show system</Button>

                                <Button size="small" onClick={()=>DeleteSystem(system._id)}>Delete this system</Button>
                            </CardActions>
                        </Card>
                        <br/>
                    </div>
                );
            })
        }</div> </div>)
    }

    return (
        <div>
             {renderHome()}
        </div>
    )
}
export default Home;