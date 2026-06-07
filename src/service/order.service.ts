import path from "path";
import type { order } from "../types";
import fs from "fs/promises";
import type { promises } from "fs";

const DB_PATH = path.join(process.cwd(),"db","data.json")

class OrderService{
    // readdata, writedata

    private async readData():Promise<order[]>{
        try{
             const data = await fs.readFile(DB_PATH,"utf-8")
             return JSON.parse(data)
        }catch(error){
             return []
        }

    }

    private async writeData(data:order[]){
        await fs.writeFile(DB_PATH,JSON.stringify(data,null,2))
    }

    // get

    async get(){
        const data = await this.readData()
        return data
    }

    // get by id

     async getbyId(id:string){
        const data = await this.readData()
        return data.find(order=>order.id===id) || null

        
    }



    async create(order: Omit<order, "id">) {
    const data = await this.readData(); 

    const newOrder = {
        ...order,
        id: Date.now().toString()
    };

    data.push(newOrder);

    await this.writeData(data);

    
} 
// update
   async update(id:string,updates: Partial<Omit<order,"id">>):Promise<order| null>{
          const data = await this.readData()

          const i = data.findIndex(order=>order.id === id)

          if(i===-1) return null

          data[i] = {...data[i], ...updates} as order

          await this.writeData(data)

          return data[i]
   }
   async Delete(id:string){
     const data = await this.readData()

     const i = data.findIndex(order=>order.id === id)

          if(i===-1) return false

          data.splice(i,1)

          await this.writeData(data)
          return true


   }
}


export const orderService = new OrderService()


