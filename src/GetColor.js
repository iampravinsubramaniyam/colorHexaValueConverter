import React from 'react';
import "./index.css"


const GetColor = ({color,setColor}) =>{
    return(
        <form action="" onSubmit = {(e)=>{
            e.preventDefault()
        }}
            className = "form"
        >
            <input 
                type="textArea" 
                value = {color}
                onChange = {(e) => setColor(e.target.value)}
                className = 'input'
                autoFocus
                placeholder = "Enter the Color"
                style = {{
                    fontSize: '1.1rem'
                }}
            />

        </form>
    )

}


export default GetColor;