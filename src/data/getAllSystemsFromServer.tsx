import axios from 'axios';
import System from '../interfaces/System';

export const getAllSystemFromServer = async () => {
    try {
        const data = await (await axios.get<System[]>('http://localhost:3333/system')).data;
        // console.log(data);
        
        return data;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}