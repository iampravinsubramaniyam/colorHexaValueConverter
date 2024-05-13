import React from 'react';
import chroma from 'chroma-js';


class ColorGenerator extends React.Component{
        render(){

        const color = this.props.color;
        const textColor = this.props.textColor;
        let output = "";

        const outputStyle = {
            width: '200px',
            height: '200px',
            boxShadow: '1px 2px 5px black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }



        try{
            const newcolour = chroma(`${color}`).hex();
            output = newcolour;
            outputStyle.backgroundColor = output;
        }catch{
            output = 'invalid Color'
        }



        return(
            <div style = {outputStyle} className = "colorGenerator">
                {(!color)?(
                    <p>Empty Value</p>
                ):(
                    <div className = "outputs">
                        <p style = {{color:textColor}}>{color}</p>
                        <p style = {{color:textColor}}>{output}</p>
                    </div>
                )}

            </div>
        )
    }
};


export default ColorGenerator;