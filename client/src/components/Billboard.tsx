import CaptainFall from "../assets/videos/captain_fall.mp4"
import BillBoardButton from "./BillBoardButton"
export default function Billboard() {
  return (
    <div className="relative h-screen">
        <video src={ CaptainFall} className="w-full h-full object-cover brightness-[60%] transition duration-500"
         autoPlay muted 
        //loop
        ></video>

        <div className="absolute ml-16 top-[40%]">
            <p className="text-white mt-8 mb-5 drop-shadow-x text-7xl">Captain Fall</p>
            <div className="flex items-center mt-4 gap-3" >
                <BillBoardButton text="Play" theme="light"/>
                <BillBoardButton text="More Info" theme="dark"/>
            </div>
        </div>
    </div>
  )
}
