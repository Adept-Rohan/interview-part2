import { useState } from "react"
import CrossIcon from "../icons/CrossIcon"
import { CartItem, useCartStore } from "../store/cartStore"


const CartItems = () => {

    const { removeItem, decrementQuantity, incrementQuantity, cartData, clearCart } = useCartStore((state) => state)

    const [selectedCategory, setSelectedCategory] = useState<string>("")


    const categories = [...new Set(cartData.map((item) => item.category))]

    const filteredCartData = cartData.filter((item: CartItem) => {
        return selectedCategory ? item.category === selectedCategory : true
    })

    return (
        <div className='w-2/3 pr-10'>
            <div className='w-full '>
                <h2 className='font-titleFont text-2xl'>Shooping Cart</h2>
                <div className='my-4'>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='p-2 border border-gray-300 rounded'
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                {
                    filteredCartData?.map((item: CartItem) => (

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
                    filteredCartData.length === 0 && <div>Nothing in the Cart</div>
                }
            </div>

        </div>
    )
}

export default CartItems