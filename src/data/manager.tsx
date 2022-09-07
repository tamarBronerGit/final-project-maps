import axios from "axios";
import { makeAutoObservable } from 'mobx';
import Manager from "../interfaces/Manager";

export const getManager = async (managerId:string) => {

    try {
        const res= await axios.get(`http://localhost:3333/manager/${managerId}`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export const createManager = async (manager:Manager) => {

    try {
        const res= await axios.post(`http://localhost:3333/manager`,manager);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

class Store{

    manager:Manager|any=null;
    constructor(){
        makeAutoObservable(this);
    }
    async getManager(managerId:string):Promise<Manager>{
        this.manager = await getManager(managerId);
        return this.manager;
    }
    async createManager(manager:Manager):Promise<Manager>{
        this.manager = await createManager(manager);
        return this.manager;
    }

}

const managerStore = new Store();
export default managerStore;