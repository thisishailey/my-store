import Wrap from '@/components/common/template/Wrap';
import CartTable from '@/components/_cart/CartTable';

export default function CartPage() {
    return (
        <Wrap>
            <h2 className="text-2xl sm:text-3xl font-semibold w-full my-6 sm:m-6 py-4 px-1">
                Shopping Cart
            </h2>
            <CartTable />
        </Wrap>
    );
}
