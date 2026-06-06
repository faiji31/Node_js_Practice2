import { ServerResponse,IncomingMessage} from "http";


export type Res = ServerResponse
export type Req = IncomingMessage


export interface order{
    id: string
    customerName: string
    quantity:number
    FoodName:string
    price:number

}