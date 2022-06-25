import React from 'react'
import "../../css/story.css"
import { Avatar } from '@mui/material';

function Story({image ,profilephoto ,profilename}) {
  return (
    
     <div className='story' style={{backgroundImage:`url(${image})`}}>
     <Avatar className='story_avatar' src={profilephoto} />
     <h4>{profilename}</h4>             
      
 </div>             
  )
}

export default Story