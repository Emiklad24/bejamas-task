import React from 'react'
import CategoryMenu from './CategoryMenu'
import PriceMenu from './PriceMenu'

export default function SideMenu() {
    return (
        <div className="hidden md:block w-0 md:w-1/4 flex flex-col ">
                {/* <!--Category Menu--> */}
                <CategoryMenu title="category" />

                {/* <!--Price Filter--> */}
                <PriceMenu />
            </div> 
    )
}
