

import React, { useLayoutEffect, useRef } from 'react';
import useCounter from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import "./layaout.css"

const Layaout = () => {

    const{counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {quote} = !!data && data[0];    

    const pTag = useRef();

    useLayoutEffect(() => {
        
        console.log(pTag.current.getBoundingClientRect())
    }, [quote])
    

    return (
        <div>
            <h1>LayaoutEffect</h1>

            <hr/>
            
            <blockquote className="blockquote text-end">
                <p className="" ref={pTag}>{quote}</p>                
            </blockquote>                
                   
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente Quote
            </button>

        </div>
    )
}

export default Layaout
