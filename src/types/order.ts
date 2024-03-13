import type ICartItem from './cartItem';

export default interface IOrder {
    orderId: string;
    orderItems: ICartItem[];
}
