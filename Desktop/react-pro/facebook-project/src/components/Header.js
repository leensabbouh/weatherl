import React, { useState } from 'react'
import "../css/header.css"
import "../css/responsive.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; 
import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Avatar,IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';
function Header() {

   const [{user},dispatch]=useStateValue();
  
  return (
    <div className='header'>
         <div className='header_left'>
          <img alt="img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'/>
          <div className='header_search'>
            <SearchIcon />
            <input type="text" placeholder="search facebook"/>

          </div>
         </div>
         <div className='header_middle'>
            <div className='header_option active'>
               <HomeIcon fontSize='large'/>
            </div>
            <div className='header_option'>
               <OndemandVideoIcon fontSize='large' />
               </div>
            <div className='header_option'>
               <SupervisedUserCircleIcon fontSize='large'/>
               </div>
            <div className='header_option'>
               <SportsEsportsIcon fontSize='large' />
            </div>

         </div>
         
         <div className='header_right'>
            <div className='header_info'>
               <Avatar src={user.photoURL} />
               <h5>{user.displayName}</h5>
            </div>

            <IconButton className='right_icon' >
            <AddIcon />
            </IconButton>
            <IconButton className='right_icon' >
            <AppsIcon />
            </IconButton>
            <IconButton className='right_icon' >
            <ForumIcon />
            </IconButton>
            <IconButton className='right_icon' >
            <NotificationsActiveIcon />
            </IconButton>
            <IconButton className='right_icon' >
            <ArrowDropDownIcon />
            </IconButton>
            

         </div>
    </div>
  )
}

export default Header