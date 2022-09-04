import axios from 'axios';
import System from '../interfaces/System';
import User from '../interfaces/User';

export const getSystemsByUser = async (managerUid:string) => {

    try {
        const userByUid = await (await axios.get<User>(`http://localhost:3333/user/${managerUid}`)).data;
        const user_id= (userByUid._id);
        console.log(user_id);
        const getSystemsUser=await (await axios.get<System[]>(`http://localhost:3333/system/${user_id}`)).data;
        console.log(getSystemsUser);
        return getSystemsUser;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}