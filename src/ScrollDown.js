import React from 'react'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import './ScrollDown.css'

function ScrollDown() {
         
 const ScrollBottom = () =>window.scrollTo( {
top:document.documentElement.scrollHeight,
behavior:"smooth"
 })
  
    return (
<div className="scroll_down">
 

        
             <ArrowDropDownCircleOutlinedIcon style={{ fontSize: 50}} onClick={ScrollBottom}/>
        </div>
    )
}

export default ScrollDown;
