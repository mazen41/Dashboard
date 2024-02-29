import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {DarkModeContext} from '../../context/darkModeContext'
const SideBar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">MazenAdmin</span>
            </Link>
        </div>
        <hr></hr>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>DishBoard</span>
                </li>
                <p className="title">LiSTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <AddBusinessIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <AirportShuttleIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                     <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}>

            </div>
            <div className="colorOption" onClick={() => dispatch({type:"DARK"})}>

            </div>
        </div>
    </div>
  )
}

export default SideBar;