import { rejects } from "node:assert";
import type { Req, Res } from "./types";

export function  sendResponse<T>(res:Res,{message,data,error}:{message:string,data?:T,error?: boolean} ,status=200) {
    res.writeHead(status,{"Content-Type":"application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: data || null,
        
    }))

}

export const extractRequestInfo =(req:Req)=>{
    const params = req.url?.split("/").filter(Boolean) ?? []
    const body = req.method === "POST"||req.method==="PUT"||req.method==="PATCH" ? await parseBody(req) : null
return{
    url:req.url ?? "/",
    params:params
}
}

export const parseBody  = async<T>(req:Req):Promise<T|null>{
    return new Promise((resolve,reject)=>{
        let body =""
        req.on("data",(chunk)=>{
            body+=chunk.toString()
        })
        req.on("end",()=>{
            try{
                 resolve(body as T)
            }catch(error){
                reject(new Error("invalid data"))
            }
        })
    })
}