import React from 'react'
import LoadingTopNav from './LoadingTopNav'
import LoadingImage from './LoadingImage'
import LoadingSideMenu from '../menu/LoadingSideMenu'

export default function LoadingGallery() {
    return (
        <section className="container relative">
            {/* Top Navigation */}
            <LoadingTopNav />
            <div className="flex flex-row" >
                <LoadingSideMenu />
                {/* <!--GALLERY IMAGES--> */}
                <div className="w-full flex flex-col items-center md:w-3/4">
                    {/* <!--ROW ONE--> */}
                    <div className="w-full gap-x-5 grid justify-center grid-rows-6 md:grid-rows-3 xl:grid-rows-2 grid-flow-col">
                            <LoadingImage />
                            <LoadingImage />
                            <LoadingImage />
                            <LoadingImage />
                            <LoadingImage />
                            <LoadingImage />
                            
                            
                        </div>
                        {/* <!--ROW TWO--> */}
                        
                    </div>
                </div>
                
            </section> 
    )
}
