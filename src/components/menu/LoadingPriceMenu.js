import React from 'react'

export default function LoadingPriceMenu() {
    return (
        <div className="mt-3 w-full">
            <ul className="flex flex-col pl-0 pb-3">
                <div className="bg-gray-100 w-48 h-6 flex mb-3"></div>
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-gray-100 outline-none font-bold bg-white" type="checkbox" />
                    <div className="bg-gray-100 w-44 h-6 flex ml-2"></div>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-gray-100 outline-none font-bold bg-white" type="checkbox" />
                    <div className="bg-gray-100 w-44 h-6 flex ml-2"></div>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-gray-100 outline-none font-bold bg-white" type="checkbox" />
                    <div className="bg-gray-100 w-44 h-6 flex ml-2"></div>
                </label> 
                <label className="checkbox relative flex flex-row items-center mb-4">
                    <input className="h-5 w-5 appearance-none border-2 cursor-pointer border-gray-100 outline-none font-bold bg-white" type="checkbox" />
                    <div className="bg-gray-100 w-44 h-6 flex ml-2"></div>
                </label> 
                
            </ul>
        </div> 
    )
}
