import ArrowIcon from "../icons/ArrowIcon"
import { useCartStore } from "../store/cartStore"
import { Items } from "../types/product"
import { ToastContainer, toast } from "react-toastify";


const ProductListing = ({ item }: { item: Items }) => {


    const setCart = useCartStore((state) => state.setCartData)


    return (
        <div className="group relative">
            <div
                key={item.id}
                className=" mt-4 w-full h-96 cursor-pointer overflow-hidden"
            >
                <img
                    className="w-full h-full object-contain group-hover:scale-110 duration-500"
                    src={item.image}
                    alt=""
                />
                {item.id}
            </div>
            <div className="w-full border-[1px] cursor-pointer px-2 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-titleFont font-bold text-base">
                            {item.title.substring(0, 12)}
                        </h2>
                        <p className="text-base">{item.category}</p>
                    </div>
                    <div className="flex gap-2 justify-end relative overflow-hidden w-28 text-sm">
                        <div className="flex gap-2 z-30 transform  group-hover:translate-x-24 transition-transform duration-500">
                            <p className="font-semibold">$ {item.price}</p>
                        </div>
                        <p
                            onClick={() => {
                                setCart({
                                    id: item.id,
                                    title: item.title,
                                    category: item.category,
                                    description: item.description,
                                    image: item.image,
                                    price: item.price,
                                    rating: item.rating
                                }), toast.success("Added to the Cart", {
                                    position: "top-left",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                })
                            }}
                            className="absolute z-20 w-[300px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform-translate-x-40  group-hover:translate-x-48 transition-transform duration-500 cursor-pointer"
                        >
                            add to Cart <ToastContainer />
                            <span>
                                <ArrowIcon width={24} height={24} color="#000" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing

