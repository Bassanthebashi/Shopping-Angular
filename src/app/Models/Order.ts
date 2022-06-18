import { OrderItem } from "./OrderItem";

export interface Order {
        id: string,
        user: string,
        approval: boolean,
        orderItems: OrderItem[]
 }