import { async } from '@firebase/util';
import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import System from '../interfaces/System';
import User from '../interfaces/User';

export const deleteSystem=async(id:string)=>
{
    try {     
        console.log('delete system',id);
        return await axios.delete(`http://localhost:3333/system/${id}`)
    } 
    catch (error) { 
        console.log(error);}
}
export const addSystem=async(dataSystem:System )=>
{
    try {     
        const res = await axios.post(`http://localhost:3333/system/`,dataSystem);
        console.log(res.data);
        return res.data;
    }
    catch (error) { console.log(error); }
}
export const getAllSystem=async()=>
{
    try {
        const systems = await axios.get('http://localhost:3333/system');
        return systems.data;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}
export const getSystems=async(managerUid:string)=>
{
    try {
        const userByUid = await axios.get(`http://localhost:3333/user/${managerUid}`);
        const user_id= (userByUid.data._id);
        console.log(user_id);
        const getSystemsUser=await axios.get(`http://localhost:3333/system/${user_id}`);
        console.log(getSystemsUser.data);
        return getSystemsUser.data;
    }
    catch (error) {
        console.log('error-getUserFromServer ');
    }
}
export const getSystemsByUrlName = async (urlName: string) => {
debugger
    try {
        debugger
        const system = await axios.get(`http://localhost:3333/system/getSystemByUrlName/${urlName}`)
        return system.data;
    } catch (error) {
        console.error(error);
    }

}




class Store{
    system:System | any=null;
    systems:System[]= [];

    constructor(){
        makeAutoObservable(this);
    }
    async getAllSystemFromServer():Promise<System[]>
    {
        this.systems=await getAllSystem();
        return this.systems;
    }
    async getSystems(managerUid:string):Promise<System[]>
    {
        this.systems=await getSystems(managerUid);
        return this.systems;
    }
    async getSystemsByUrlName(urlName: string): Promise<System> {
        this.system = await getSystemsByUrlName(urlName);
        return this.system;
    }
    async addNewSystem(dataSystem:any ):Promise<System>
    {
        this.system=await addSystem(dataSystem);
        return this.system;
    }
    async DeleteSystemFromServer(id:string):Promise<System>
    {
        this.system=await deleteSystem(id);
        return this.system;
    }

}

const systemStore = new Store();
export default systemStore;