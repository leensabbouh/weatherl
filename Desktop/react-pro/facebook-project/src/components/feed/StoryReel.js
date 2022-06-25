import React, { useState ,useEffect, useRef} from 'react'
import Story from './Story';
import "../../css/storyreel.css"
import { useStateValue } from '../StateProvider';
import { db, storage } from '../firebase';
import { IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {motion} from "framer-motion";
import firebase from "firebase"

function StoryReel() {
  const [{user},dispatch]=useStateValue();
  const [imagestory,setImagestory]=useState("");
  const [opens,setOpens]=useState(false);
  const [width,setWidth]=useState(0);
  const [stories,setStories]=useState([]);
  const [progressStory,setProgressStory]=useState(0);

  const carousel=useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
    
    db.collection("stories").onSnapshot(snapshot=>{
      setStories(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data(),
       })))
     })
  },[]);

  const handleChangestory=(s)=>{
    if (s.target.files[0])
    {
      setImagestory(s.target.files[0]);
      
      setOpens(true);
    }
    }
    
  const uploadFilestory=()=>{
    document.getElementById("imageFileStory").click();
    
    
    }
    const handlestory=(s)=>{
      
    s.preventDefault();
    if(imagestory===""){
      alert("add your photo")
    }
    else{
     const uploadTaskStory=storage.ref(`images/${imagestory.name}`).put(imagestory);
     uploadTaskStory.on(
       "state_changed",
       (snapshot)=>{
        const progressStory=Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
        setProgressStory(progressStory);
     },
     (error)=>{
       alert(error.message);
     },
      
       ()=>{
         storage.ref("images").child(imagestory.name).getDownloadURL().then(url=>{
          db.collection("stories").add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilename:user.displayName,
            profilephoto:user.photoURL,
            image:url,
            
           

          });
          
          setProgressStory(0);
          setImagestory("");
         })
       }
     )
    }
    setOpens(false);
    }
  
  return (<div className='storyreel'>
    <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className='carousel'>
      
    
    <motion.div drag="x" dragConstraints={{right:0 ,left:-width}} className='inner'>
                    <div className='input_story' >
                      <img src={user.photoURL===""? "https://www.miscarriageassociation.org.uk/wp-content/uploads/2019/10/Facebook-Logo.png" : user.photoURL} alt="img"/>
                      <button onClick={uploadFilestory}>+
                      <input type="file" id="imageFileStory" style={{display:"none"}} onChange={handleChangestory}/>
                      </button>
                      <h2>create story</h2>
                       {
              progressStory!=="" && <progress value={progressStory} max="100" style={{"width":"100%" ,"marginBottom":"20px" ,}}/>
            }
                      {opens===true? <IconButton  onClick={handlestory}> 
                      <SendIcon style={{color:"white"}}/>
                  </IconButton>:" "}
                      
                       
                      
                    </div>
                    {
          stories.map((story)=>{
           return(  <Story
           key={story.id}
           image={story.data.image}
           profilephoto={story.data.profilephoto}
           profilename={story.data.profilename} />  )
          })
        }

    </motion.div>
    </motion.div>
    </div>
  )
}

export default StoryReel