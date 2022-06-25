 import React, { useState } from 'react'
import "../../css/post.css"
import { Avatar} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

function Posts({ photoURL,image,username,timestamp,message}) {
      const [like,setLike]=useState(false);
     
      const handlelike=()=>{
         setLike(!like)
      }
     

  return (
    
    <div className='post'>
       <div className='post_top'>
          <div className='post_top_left'>
            <Avatar src={photoURL}/>
            <div className='postinfo'>
               <h4>{username}</h4>
               <p>{new Date(timestamp?.toDate()).toUTCString()}<PublicIcon /></p>
            </div>
          </div>
          
          <MoreHorizIcon />
          
       </div>
       <div className='post_middle'>
         <p>{message}</p>
         {image && <img alt="img" src={image}/>}
       </div>
       <div className='post_bottom'>
           {like? <div className='post_bottom_options likeit' onClick={handlelike}>
         <ThumbUpIcon/> <p >Like</p>  </div>: <div className='post_bottom_options' onClick={handlelike}>
         <ThumbUpIcon/> <p >Like</p> 
            
          </div>} 
         
          <div className='post_bottom_options' >
             <ChatBubbleOutlineIcon /> <p>Comment</p>
          </div>
          <div className='post_bottom_options'>
             <ShareIcon /> <p>Share</p>
          </div>
       </div>
    </div>
  )
}

export default Posts