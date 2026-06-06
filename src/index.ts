import {createServer} from "node:http";
import { sendResponse } from "./utility";


const server = createServer((req,res)=>{

   const url = req.url ?? "/"
   
   if(url === "/"){
    sendResponse(res,{message:"Welcome to my server"},200)
    return
   }

    sendResponse(res,{message:"error 404 not found"},404)
    return
})

server.listen(3000,()=>{
    console.log("server is running port 3000")
})