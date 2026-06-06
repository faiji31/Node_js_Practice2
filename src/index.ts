import {createServer} from "node:http";

const server = createServer((req,res)=>{

   const url = req.url ?? "/"
   
   if(url === "/"){
     res.writeHead(200,{"Content-Type":"application/json"})
 return res.end(JSON.stringify({message:"This is json"}))
   }

    res.writeHead(404,{"Content-Type":"application/json"})
 res.end(JSON.stringify({message:"Message not found"}))
})

server.listen(3000,()=>{
    console.log("server is running port 3000")
})