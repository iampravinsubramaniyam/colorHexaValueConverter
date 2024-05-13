import React from 'react'

const Toggle = ({handleClick}) =>{
    return(
        <button 
            className = "toggleButton"
            onClick ={handleClick}
        >
            Toggle Text Color
        </button>
    )
}


export default Toggle;