import React from 'react'
import './Body.css'
import Header  from '../Header/Header'
import {useDatalayerValue} from '../../Data/DataLayer'
function Body({spotify}) {

  const [{discover_weekly}, dispatch]= useDatalayerValue()

  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <div className="body_info">
        <img src={discover_weekly?.images[0]?.url} alt=""/>
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

    </div>
  )
}

export default Body