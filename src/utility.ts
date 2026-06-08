import type { Req, Res } from "./types";

export function  sendResponse<T>(res:Res,{message,data,error}:{message:string,data?:T,error?: boolean} ,status=200) {
    res.writeHead(status,{"Content-Type":"application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: data || null
    }))

}

export const extractRequestInfo =(req:Req)=>{
    const params = req.url?.split("/").filter(Boolean) ?? []
return{
    url:req.url ?? "/",
    params:params
}
}