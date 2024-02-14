import Logo from "../assets/images/logo1.png"

const tabs = [
    "Home",
    "Films",
    "New & Popular",
    "My List",
    "Browse by Languages"
]
export default function Navbar() {
    return <nav className="w-full fixed z-40">
        <div className="px-16 py-6 flex items-center">
            <img className="h-16" src={Logo} alt="logo" />
            <div className="flex gap-7 ml-8">
                {
                    tabs.map((tab) => (
                        <div key={tab} className="text-white  hover:text-gray-300 cursor-pointer">
                            <p> {tab} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </nav>
}