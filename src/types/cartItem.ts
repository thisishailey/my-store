import IProduct from './productData';

export default interface ICartItem extends IProduct {
    qty: number;
}
