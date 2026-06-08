import { orderService } from "../service/order.service";
import type { order, Req, Res } from "../types";
import { extractRequestInfo, sendResponse } from "../utility";

export const orderRoute=async (req:Req,res:Res)=>{

    const {url,params} =await extractRequestInfo<Omit<order,"id">>(req)
    const orderId = params[1]
    if(req.method ==="GET" && !orderId ){
        const orders = await orderService.get()
        sendResponse(res,{message:"orders are retrived",data:orders},200)
        return
    }
   
     if(req.method ==="GET"&& orderId ){
        const orders = await orderService.getbyId(orderId)
        sendResponse(res,{message:"orders are retrived",data:orders,error:orders ? false : true},orders?200:404)
        return
    }

    if(req.method ==="DELETE"&& orderId ){
        const deleted = await orderService.Delete(orderId)
        sendResponse(res,{message:"orders are deleted",data:deleted,error:deleted ? false : true},deleted?200:404)
        return
    }
    if(req.method === "POST")
}