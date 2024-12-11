import CrossIcon from "../icons/CrossIcon"
import { CartItem, useCartStore } from "../store/cartStore"


const CartItems = () => {

    const { removeItem, decrementQuantity, incrementQuantity, cartData, clearCart } = useCartStore((state) => state)

    return (
        <div className='w-2/3 pr-10'>
            <div className='w-full '>
                <h2 className='font-titleFont text-2xl'>Shooping Cart</h2>
            </div>
            <div>
                {
                    cartData?.map((item: CartItem) => (

                        <div key={item?.id} className='flex items-center justify-between gap-6 mt-6'>
                            <div className='flex items-center gap-2'>
                                <CrossIcon onClick={() => removeItem(item.id)} width={24} height={24} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                                <img className='w-32 h-32 object-contain' src={item.image} alt="Product Image" />
                            </div>
                            <h2 className='w-52'>{item.title}</h2>
                            <p className='w-10'> ${item.price}</p>
                            <div>
                                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                                    <p>Quantity</p>
                                    <div className='flex items-center gap-4 text-sm font-semibold'>
                                        <button onClick={() => decrementQuantity(item.id)} >-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    )
                }
                <span className="underline text-red-500 cursor-pointer" onClick={() => clearCart()}>Clear Cart ?</span>
                {
                    cartData.length === 0 && <div>Nothing in the Cart</div>
                }
            </div>

        </div>
    )
}

export default CartItems