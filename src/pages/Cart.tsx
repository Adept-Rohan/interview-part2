import { CartItem, useCartStore } from "../store/cartStore"
import CartItems from '../components/CartItem'

const Cart = () => {

    const cartData = useCartStore((state) => state.cartData)

    const getTotalPrice = () => {
        let totalPrice = 0
        cartData.forEach((item: CartItem) => {
            totalPrice += item.price * item.quantity
        })
        return totalPrice
    }


    return (
        <>
            <div className="text-center mt-4">
                <h1 className='text-2xl font-bold text-black'>Welcome To The Cart Page.</h1>
            </div>
            <div className="mx-[5%] py-20 flex">
                <CartItems />
                <div className="w-1/3 h-[300px] bg-[#fafafa] py-6 px-4">
                    <div className="flex flex-col gap-6 border-b-[1px] pb-6 border-b-gray-400">
                        <h2 className="text-2xl font-medium">Cart Total</h2>

                        <p className="flex items-center gap-4 text-base">
                            Shippng
                            <span className="font-titleFont font-bold text-lg">
                                Gwarko-17 , Lalitpur
                            </span>
                        </p>
                        <p className="flex justify-between item-center mt-6 text-base">
                            Total Price{" "}
                            <span className="font-titleFont font-bold text-lg">
                                $ {getTotalPrice()}
                            </span>
                        </p>
                    </div>
                    <button className="w-[340px] mt-4 h-[32px] bg-black hover:bg-slate-700 hover:text-slate-950 text-white">
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cart 