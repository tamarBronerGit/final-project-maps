import axios from 'axios';
import User from '../components/user';

export const getAllUsersFromServer = async () => {
    try {
        const data = await axios.get('http://localhost:3333/user');
        console.log(data);
        return data;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}