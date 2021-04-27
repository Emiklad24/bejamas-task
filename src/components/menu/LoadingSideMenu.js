import React from 'react'
import LoadingCategoryMenu from './LoadingCategoryMenu'
import LoadingPriceMenu from './LoadingPriceMenu'

export default function LoadingSideMenu() {
    return (
        <div className="hidden md:block w-0 md:w-1/4 flex flex-col ">
            <LoadingCategoryMenu /> 
           <LoadingPriceMenu />
        </div>
    )
}
