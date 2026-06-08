import {createServer} from "node:http";
import { sendResponse } from "./utility";
import { orderRoute } from "./routes/order.route";
import type { Req } from "./types";


const server = createServer((req,res)=>{

   const url = req.url ?? "/"
   
   if(url === "/"){
    sendResponse(res,{message:"Welcome to our Foodi server"},200)
    return
   }
   if(url.startsWith("/orders")){
    orderRoute(req as Req,res)
    return
   }

    sendResponse(res,{message:"error 404 not found"},404)
    return
})

server.listen(3000,()=>{
    console.log("server is running port 3000")
})