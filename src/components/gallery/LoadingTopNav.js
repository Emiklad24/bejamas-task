import React from 'react'

export default function LoadingTopNav() {
    return (
        <nav className="w-full flex flex-row justify-between py-5">
            <div className="w-56 bg-gray-100 h-8"></div>
            <div className="flex">
                <div className="hidden md:block  w-8 bg-gray-100 h-8 mx-2" ></div>
                <div className="hidden md:block  w-16 bg-gray-100 h-8 mx-2" ></div>
                <div className="hidden md:block  w-16 bg-gray-100 h-8 mx-2" ></div>
                <button className=" md:hidden flex flex-row items-center text-2xl text-black">
                    <div className="w-8 bg-gray-100 h-8"></div>
                </button>
            </div>
            
        </nav>  
    )
}
