import { useState } from "react"
import CartIcon from "../icons/CartIcon"
import HamburgerIcon from "../icons/HamburgerIcon"
import CrossIcon from "../icons/CrossIcon"
import { useCartStore } from "../store/cartStore"
import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const [activeSideBar, setActiveSideBar] = useState<boolean>(false)
    const [activeCartBar, setActiveCartBar] = useState<boolean>(false)

    const cartData = useCartStore((state) => state.cartData)
    console.log("🚀 ~ Navbar ~ cartData:", cartData)

    const navigate = useNavigate()

    return (
        <div className="w-full sticky bg-black h-[70px] flex items-center justify-between px-8">
            <span onClick={() => navigate('/')} className="text-white text-2xl cursor-pointer font-semibold">Navbar</span>
            <div className="hidden md:block lg:block lg:items-center lg:space-x-6 md:items-center md:space-x-4">
                <span className="text-white font-semibold cursor-pointer">Home</span>
                <span className="text-white font-semibold cursor-pointer">About</span>
                <span className="text-white font-semibold cursor-pointer">Services</span>
                <span className="text-white font-semibold cursor-pointer">Contact</span>
            </div>
            <div className="flex items-center gap-6">
                <div
                    className="relative flex items-center justify-center"
                >
                    <CartIcon onClick={() => navigate('/cart')} color="#fff" width={24} height={24} className="cursor-pointer" />
                    {cartData && cartData.length > 0 && (
                        <div className=" bg-red-500 absolute -top-4 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">
                                {cartData.length ? cartData.length : 0}
                            </p>
                        </div>
                    )}
                </div>
                <HamburgerIcon onClick={() => setActiveSideBar(!activeSideBar)} width={24} height={24} color="#fff" className="cursor-pointer block md:hidden lg:hidden" />
            </div>
            {activeSideBar && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="bg-black opacity-50 flex-1"
                        onClick={() => setActiveSideBar(false)}
                    ></div>
                    <div className="relative bg-slate-400 w-[250px] h-full p-4">
                        <button
                            className="text-black text-lg  absolute top-2 right-4"
                            onClick={() => setActiveSideBar(false)}
                        >
                            <CrossIcon width={24} height={24} />
                        </button>
                        <ul className="space-y-4 mt-8">
                            <li className="text-black cursor-pointer text-semibold">Home</li>
                            <li className="text-black cursor-pointer text-semibold">About</li>
                            <li className="text-black cursor-pointer text-semibold">Services</li>
                            <li className="text-black cursor-pointer text-semibold">Contact</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar 