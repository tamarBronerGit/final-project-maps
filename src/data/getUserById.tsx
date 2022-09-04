import axios from 'axios';
import User from '../interfaces/User';

export const getUserById = async (uid: string | undefined) => {
    try {
        const data = await (await axios.get<User>(`http://localhost:3333/user/${uid}`)).data;
        console.log(data);
        return (data);
    }
    catch (error) {
        console.log('error-getUserFromServer ',error);
    }
    
    
}

    