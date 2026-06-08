import { ServerResponse,IncomingMessage} from "http";


export type Res = ServerResponse
export type Req = IncomingMessage &{
    method:Method
}

export type Method = "GET"|"DELETE"|"POST"|"PUT"|"PATCH";


export interface order{
    id: string
    customerName: string
    quantity:number
    FoodName:string
    price:number

}