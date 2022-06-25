import React, { useEffect, useState } from 'react';
import {db} from "../firebase";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Posts from './Posts';
import "../../css/feed.css";
import "../../css/responsive.css";

function Feed() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
     db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
       setPosts(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
       })))
     })
  },[]); 
  return ( 
    <div className='feed' id="ff">
       <StoryReel  />
       <MessageSender />
        {
          posts.map((post)=>{
           return(  <Posts
           key={post.id}
           photoURL={post.data.photoURL}
           image={post.data.image}
           username={post.data.username}
           timestamp={post.data.timestamp}
           message={post.data.message} />  )
          })
        }
                 
    </div>
  )
}

export default Feed