import Blogs from "./Blogs"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useState } from "react"
export const Home = () => {
    const [sliderState, setSliderState] = useState(false)
    const renderSlider = () => {
        return (
            <>
                <div className="h-[calc(100vh-6rem)] overflow-y-auto bg-slate-400 w-1/2 rounded-md fixed top- left-0 z-50 flex flex-col gap-y-3 font-playfair items-center p-2">
                    
                        <Link to='/About'>About</Link>
                        <div>Contact Us</div>
                        <div>X</div>
                        <div>Book Recommendations</div>
                        <div>Donate</div>
                        <div>YT Channel</div>
                        <div className="mt-auto"> Free Markets Win! </div>
                    
                    
                </div>
            </>
        )
    }
    return (
        <>
            <div className="h-screen overflow-y-auto bg-black">
                <div className="relative flex items-center font-playfair  h-24 bg-slate-500 rounded-md px-6">
                    <div className="absolute left-1/2 transfrom -translate-x-1/2 text-xl md:text-2xl">
                        AVIDHI : The Capitalist Utopia
                    </div>
                    <div className="md:hidden mr-auto">
                        <button onClick={() => setSliderState(prev => !prev)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>  
                        </button>
                        
                    </div>
                    <div className="hidden md:flex flex-row gap-x-3 text-sm lg:text-lg ml-auto">
                        <Link to='/About'>About</Link>
                        <div>Books</div>
                        <div>X</div>
                        <div>Contact Us</div>
                        <div>Donate</div>
                    </div>


                </div>
                {sliderState && renderSlider()}
                <Blogs></Blogs>
            </div>
            <Outlet></Outlet>
        </>
    )
}