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

    const [systems, setSystems] = useState<System[]>([]);

    useEffect(() => {
        getAllSystem();
    }, []);

    const getAllSystem = async () => {
        const data = await axios.get<System[]>('http://localhost:3333/system');
        console.log(data);
        setSystems(data.data);
    }

    const renderHome = (): JSX.Element[] => {
        return systems.map(system => {
            return (
                <div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={system.urlImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <div>{system.topic}</div>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <div>
                                    <th>id: {system._id}</th>
                                    <tr>managerUid: {system.managerUid}</tr>
                                    <tr>objectName: {system.objectName}</tr>
                                    <tr>description:{system.description}</tr>
                                    <br />
                                </div>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show user</Button>

                        </CardActions>
                    </Card>
                </div>
               
                </div>
            );
        });
    }

    return (
        <div>
            <ul>
                <FormDialog/>
             {renderHome()}
            </ul>
            
        </div>
        
    )
}

export default Home;