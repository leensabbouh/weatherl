import React from 'react'
import "../css/right.css"
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvider';
function RightSidebar() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className='rightsidebar'>
      <div className='rightsidebar_header'>
         <div className='rightsidebar_header_left'>
           <h4>Your Pages</h4>
         </div>
         <MoreHorizIcon />
      </div>
      <div className='rightsidebar_body'>
        <div className='rightsidebar_body_options ml10'>
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <div className='rightsidebar_body_options ml10'>
          <NotificationsNoneIcon />
          <p>1 Notification</p>
        </div>
        <div className='rightsidebar_body_options ml10'>
          <VolumeUpIcon />
          <p>Create Pronotions</p>
        </div>
      </div>
      <hr/><br/>
      <div className='rightsidebar_header'>
         <div className='rightsidebar_header_left'>
           <h4>Contact</h4>
         </div>
         <div className='rightsidebar_header_right'>
            <VideocamIcon />
            <SearchIcon />
            <MoreHorizIcon />

         </div> 
      </div>
      <div className='rightsidebar_body'>
        <div className='rightsidebar_body_options ml10'>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRxmgxww4JjwO7IGq2LpSgEtebUMlrhpOZKFnPpup-CNVUoo38X8Hr9CXXujfh8qs288&usqp=CAU"/>
          <h4>Aya Kk</h4>
        </div>
        <div className='rightsidebar_body_options ml10'>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdyRfwVhIr0_D5riAOa9WlrZ1MC57Up_bdpTFgW2ZQnLZZkthGcLWNDioBZg0rgkH0E0&usqp=CAU"/>
          <h4>Ahmad Lh</h4>
        </div>
        <div className='rightsidebar_body_options ml10'>
          <Avatar src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80" />
          <h4>Ali Nh</h4>
        </div>
        <div className='rightsidebar_body_options ml10'>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wTboZWYGaIiCL1tKKlCgzUqLz-gJxI8XcjdMg-vARsOF-4EcJVUavFJjTEtzkR1cp28&usqp=CAU" />
          <h4>Roro Gt</h4>
        </div>
        <div className='rightsidebar_body_options ml10'>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK99_poQRcR7Vedynq8BpriO3ajxi1sK_Z4iKb1BYtu_-Hc7G6dklpn0LpQ62sUlKXteY&usqp=CAU" />
          <h4>Farah Dd</h4>
        </div>
      </div>  
    </div>
  )
}

export default RightSidebar