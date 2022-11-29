import React from 'react'

export default function BoxColor(props) {
    const {red, green, blue} = props;
    // Store props into a array
    const arrayColor = [red,green,blue];

    const rgbToHex = (red, green, blue) => '#' + arrayColor.map(color => {
        const hexCode =  color.toString(16);
        console.log(hexCode.length);
        // each hex color contain RGB split and 2 mark.
        return hexCode.length === 1 ? '0' + hexCode : hexCode;
      }).join('')
      
    return (
        <div className='boxColor' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`   }}>
            <span>{rgbToHex(red,green,blue)}</span>
        </div>     
  )
}
