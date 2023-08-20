import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDatalayerValue } from '../../Data/DataLayer';



function Sidebar() {
  const [{playlists}, dispatch]= useDatalayerValue()
  console.log(playlists,"playlists")
  return (
    <div className='sidebar'>
      <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify'/>
      <SidebarOption Icon={HomeIcon} title="home"/>
      <SidebarOption Icon={SearchIcon}
      title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

      <br/>
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map((playlist)=>{
        return (
          <SidebarOption  title={playlist.name}/>
        )
      })}
      {/* <SidebarOption  title="home"/>
      <SidebarOption 
      title="Search"/>
      <SidebarOption  title="Your Library"/> */}
    </div>
  )
}

export default Sidebar