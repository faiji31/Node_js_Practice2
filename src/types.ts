import { ServerResponse,IncomingMessage} from "http";


export type Res = ServerResponse
export type Req = IncomingMessage

export type Method = "GET"|"DELETE"|"POST"|"PUT";


export interface order{
    id: string
    customerName: string
    quantity:number
    FoodName:string
    price:number

}