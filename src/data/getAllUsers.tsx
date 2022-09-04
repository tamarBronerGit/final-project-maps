import axios from 'axios';
import User from '../interfaces/User';

export const getAllUsersFromServer = async () => {
    try {
        const data = await axios.get<User[]>('http://localhost:3333/user');
        console.log(data.data);
        return data.data;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}