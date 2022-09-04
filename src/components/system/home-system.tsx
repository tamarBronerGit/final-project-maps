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
import '../../css/app.css'
import EditSystem from "./EditSystem";
import { useNavigate } from 'react-router-dom';
import MenuAppBar from "../BarInMapPage";
import FormDialog from "./addSystem";
import { async } from "@firebase/util";
import System from "../../interfaces/System";
import { observer } from "mobx-react";
import systemStore from "../../data/system";

const Home = () => {
    const navigate = useNavigate();

    const [systems, setSystems] = useState<System[]>([]);

    useEffect(() => {
        //if manager/customer
        getAllSystem();
        
    }, []);

    const getAllSystem = async () => {
        const data = await systemStore.getAllSystemFromServer();
        console.log(data);
        if(data) setSystems(data);
    }

    const getSystem=async(managerUid:string)=>{
        const data=await systemStore.getSystemsByUser(managerUid);
        console.log(data);
        if(data) setSystems(data);
    }
    
    
    const DeleteSystem= async (id:string) => {
        
        systemStore.DeleteSystemFromServer(id);
    }

    const ShowDetails= async (id:string) => {
        // navigate(`/ShowSystem/hello/${systems.urlName}/${systems._id}`)
        EditSystem();
    }

    const renderHome=()=>{
        return (<div>
            <MenuAppBar/>
            <FormDialog/>
             <div id="divAllCards"> {systems.map(system => {
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
                                        <tr>manager_id  :{system.manager_id}</tr>           
                                        <tr>subject  :{system.subject}</tr> 
                                        <br /> 
                                    </div>
                                </Typography>
                            </CardContent>
                            <CardActions>


                                {/* <Button size="small" onClick={()=>ShowDetails(system._id)}>Show details</Button> */}

                                <Button size="small" onClick={()=> navigate(`/EditSystem/${system.subject}/${system._id}`)}>Show system</Button>

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
export default observer(Home) ;