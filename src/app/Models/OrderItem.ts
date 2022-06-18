import { Product } from "./Product"

export interface OrderItem {

    id: string,
    productId: string,
    productQuantity: number,
    product: Product


}