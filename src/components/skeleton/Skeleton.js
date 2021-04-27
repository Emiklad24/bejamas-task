import React from 'react'
import LoadingNavBar from '../navbar/LoadingNavBar'
import LoadingHero from '../hero/LoadingHero'
import LoadingGallery from '../gallery/LoadingGallery'
import LoadingPagination from '../pagination/LoadingPagination'

export default function Skeleton() {
    return (
        <>
           <LoadingNavBar />
           <LoadingHero />
           <LoadingGallery /> 
           <LoadingPagination />
        </>
    )
}
