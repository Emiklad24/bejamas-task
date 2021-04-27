import React from 'react'

export default function LoadingNavBar() {
    return (
        <nav>
            <div className="container border-b-4 border-b-gray-300 relative">
                <div className="flex flex-row justify-between py-3 ">
                    <a href="index.html" className="h-8">
                        <div className="w-56 bg-gray-100 h-8"></div>
                    </a>
                    <button className="relative text-gray-100">
                        <span className="material-icons-outlined">
                            shopping_cart
                            </span>
                    </button>
                </div>
                {/* <Cart /> */}
            </div>
        </nav>
    )
}
