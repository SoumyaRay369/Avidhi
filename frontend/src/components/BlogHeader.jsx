import { Link, Outlet } from "react-router-dom"
export const BlogHeader = () => {
    return (
        <>
            <div className="text-white mt-6 flex relative pr-2 sm:pr-6 mb-8">
                <div className="text-center font-playfair text-2xl absolute left-1/2 transform -translate-x-1/2">
                    Blogs
                </div>

                <div className="ml-auto">
                    <Link to='/Signup'>
                        <button className="rounded-md p-2 bg-slate-500 font-playfair text-sm sm:text-lg">
                            Contribute Articles
                        </button>
                    </Link>
                </div>
            </div>
            
            <Outlet></Outlet>
        </>
    )
}