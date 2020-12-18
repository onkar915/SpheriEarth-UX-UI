import React, { useState } from "react";
import "./Like.css";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
function Like() {
  const [count, setCount] = useState(1);
//button onClick={() => setCount(0)}>Reset Counter</button>
 //<button onClick={() => setCount(count - 1)}><ThumbDownAltOutlinedIcon /></button>

return (
    <div className="like">
    
      <h2 >{count} Likes</h2>
    
      <button onClick={() => setCount(count + 1)}><FavoriteBorderOutlinedIcon 
     
      /></button>
      
    </div>
  );
}

export default Like;