import { queryHook } from "../api/queryHook"
import { Items } from "../types/product";
import ProductListing from "./ProductListing"

const Product = () => {

    const { data, isLoading, isError, error } = queryHook();


    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {(error as Error).message}</div>;

    return (
        <div className='mt-8 text-center'>
            <h1 className="text-black font-semibold">Our Products</h1>
            <div className='mx-[5%] py-10 grid grid-cols-1 gap-10 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-6'>
                {
                    data?.map((product: Items) => {
                        return (
                            <>
                                <ProductListing item={product} />

                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Product