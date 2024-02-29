import React from 'react'
import './list.scss'
import SideBar from '../../components/sideBar/SideBar';
import NavBar from '../../components/navbar/NavBar' 
import Datatable from '../../components/datatable/Datatable'
const list = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Datatable />
      </div>
    </div>
  )
}

export default list