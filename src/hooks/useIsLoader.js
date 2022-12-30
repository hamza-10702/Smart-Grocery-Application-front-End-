import React, {useState } from 'react'
import Loader from '../components/Loader/loader'

const useIsLoading = () =>{
    const [isLoading , setIsLoading] = useState(false)
    return [
        isLoading ? <Loader/> : null, 
        () => setIsLoading(true), // show Loader
        () => setIsLoading(false), // hide Loader
        
    ]


}

export default useIsLoading;