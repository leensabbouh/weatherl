import React from 'react'
import SidebarRow from './SidebarRow'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import "../css/Sidebar.css"
import "../css/responsive.css"
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className='sidebar'>
       <SidebarRow  src={user.photoURL} title={user.displayName}/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Friends"/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" title="Saved Items"/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups"/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch"/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" title="Memories"/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" title="Pages"/>
       <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png" title="Events"/>
       <SidebarRow Icon={ExpandMoreIcon} title="See More"/>

    </div>
  )
}

export default Sidebar