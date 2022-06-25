import React, { useState } from 'react'
import { Avatar,Modal,IconButton} from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import CloseIcon from '@mui/icons-material/Close';
import '../../css/messagesender.css';
import '../../css/responsive.css';
import { useStateValue } from '../StateProvider';
import { db, storage } from '../firebase';
import firebase from "firebase"

function MessageSender() {
  const [{user},dispatch]=useStateValue();
  const [open,setOpen]=useState(false);
  const [image,setImage]=useState("");
  const [message,setMessage]=useState("");
  const [progress,setProgress]=useState(0);

  const handelClose=()=>{
    setOpen(false)
  }
  const handelOpen=()=>{
    setOpen(true);
  }
  const uploadFile=()=>{
  document.getElementById("imageFile").click();
  }
  const handleChange=(e)=>{
  if(e.target.files[0])
  {
    setImage(e.target.files[0]);
    
  }
  }
  const handleUpload=(e)=>{
  e.preventDefault(); 
  if(image===""){
    db.collection("posts").add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:message,
      username:user.displayName,
      photoURL:user.photoURL
    })
  }
  else{
   const uploadTask=storage.ref(`images/${image.name}`).put(image);
   uploadTask.on(
     "state_changed",
     (snapshot)=>{
        const progress=Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
        setProgress(progress);
     },
     (error)=>{
       alert(error.message);
     },
     ()=>{
       storage.ref("images").child(image.name).getDownloadURL().then(url=>{
        db.collection("posts").add({
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          message:message,
          username:user.displayName,
          photoURL:user.photoURL,
          image:url,
        });
        handelClose();
        setMessage("");
        setImage("");
        setProgress(0);
       })
     }
   )
  }
   
  }
  return (<>
    <Modal open={open} onClose={handelClose} >
      <div className='modal_pop'>
        <form>
            <div className='modal_heading'>
               <h3>Create Post</h3>
               <IconButton onClick={handelClose}>
                 <CloseIcon />
               </IconButton>
            </div>
            <div className='modal_header'>
              <Avatar src={user.photoURL}/>
              <h5>{user.displayName}</h5>
            </div>
            <div className='modal_body'>
               <textarea rows="5" placeholder={`What's on your mind ${user.displayName}? `} onChange={e=>setMessage(e.target.value)}>{message}</textarea>
            </div>
            <div className='modal_footer'>
               <div className='modal_footerLeft'>
                  <h4>Add to your post</h4>
               </div>
               <div className='modal_footerRight'>
                  <IconButton onClick={uploadFile}>
                  <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize='large'/>
                  </IconButton>
                  <input type="file" id="imageFile" style={{display:"none"}} onChange={handleChange}/>
                  <IconButton>
                  <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                  </IconButton>
                  <IconButton>
                  <MoodIcon style={{color:'#ffb100'}} fontSize='large'/>
                  </IconButton>
               </div>
            </div>
            {
              image!=="" && <h2 style={{"fontSize":"15px" , "marginBottom":"20px","color":"green"}}>Image is uploaded ,click on post</h2>
            }
            {
              progress!=="" && <progress value={progress} max="100" style={{"width":"100%" ,"marginBottom":"20px" ,}}/>
            }
            
            <input type="submit" className="post_submit" value="Post" onClick={handleUpload} />
        </form>
      </div>
     
    </Modal>
    <div className='messagesender'>
       <div className='messagesender_top'>
         <Avatar src={user.photoURL} />
         <form>
                <input type="text" placeholder={`What's on your mind ${user.displayName}? `}  onClick={handelOpen}/>         
         </form>
       </div>
       <div className='messagesender_bottom' id="bottom">
         <div className='messangeroptions'>
                <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                <p>Live Video</p>         
         </div>
         <div className='messangeroptions'>
                <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize='large'/>
                <p>Photo/Video</p>         
         </div>
         <div className='messangeroptions'>
                <MoodIcon style={{color:'#ffb100'}} fontSize='large'/>
                <p>Feeling/Activity</p>         
         </div>
       </div>
    </div>
    </>
  )
}

export default MessageSender