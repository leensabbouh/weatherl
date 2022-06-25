import React from 'react'
import { Avatar } from '@mui/material';
import "../css/SidebarRow.css"
function SidebarRow({src,Icon,title}) {
  return (
    <div className='SidebarRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
     <p>{title}</p>
    </div>
  )
}

export default SidebarRow