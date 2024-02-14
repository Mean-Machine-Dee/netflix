import BG from "../assets/images/bg.jpeg"
export default function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
        <img className="w-full h-full" src={BG} alt="" />
        <div className="absolute h-full w-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-white font-bold text-5xl">
                    Unlimited movies, TV shows, and more
                </h1>
                <p className="text-white text-3xl mt-3">
                    Watch anywhere, Cancel anytime
                </p>
                <div className="mt-8">
                    <a  className="bg-red-700 mt-8 text-white p-4 px-16 text-lg rounded" href="/login">Sign up</a>
                </div>
            </div>
        </div>
    </div>
  )
}
