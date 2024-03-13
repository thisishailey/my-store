import Wrap from '@/components/common/template/Wrap';
import OrderCompleteSummary from '@/components/_checkout/OrderCompleteSummary';

export default function CheckoutSuccessPage() {
    return (
        <Wrap>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-10">
                <div className="w-full md:m-6">
                    <span className="font-medium text-blue-600">
                        Payment successful
                    </span>
                    <h2 className="mt-2 mb-6 text-3xl font-semibold">
                        Thanks for ordering
                    </h2>
                    <p>
                        We appreciate your order, we’re currently processing it.
                        So hang tight and we’ll send you confirmation very soon!
                    </p>
                </div>
                <div className="flex justify-center m-6">
                    <OrderCompleteSummary />
                </div>
            </div>
        </Wrap>
    );
}
