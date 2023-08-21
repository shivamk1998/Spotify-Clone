import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './Header.css'
import { useDatalayerValue } from '../../Data/DataLayer';

function Header() {
  const [{user}, dispatch]= useDatalayerValue()
  return (
    <div className='header'>
      <div className="header_left">
        <SearchIcon/> 
        <input type='text' placeholder="Search for Artists, Songs, Album, or Podcasts. "/>
      </div>
      <div className="header_right">
<Avatar src={user?.images[0]?.url} alt="{user?.display_name}"/>
<h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header