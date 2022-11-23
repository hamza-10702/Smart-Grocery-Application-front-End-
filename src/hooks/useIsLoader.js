import React, {useState } from 'react'
import FullPageLoader from '../components/page-loader'

const useIsLoading = () =>{
    const [isLoading , setIsLoading] = useState(false)
    return [
        isLoading ? <FullPageLoader/> : null, 
        () => setIsLoading(true), // show Loader
        () => setIsLoading(false), // hide Loader
        
    ]


}

export default useIsLoading;