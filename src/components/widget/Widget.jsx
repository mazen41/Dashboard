import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const Widget = ({type}) => {
  let data;
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
        data = {
            title: "USERS",
            isMoney: false,
            link: "See All Users",
            icon: <PersonOutlineOutlinedIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}}/>
        };
        break;
        case "order":
        data = {
            title: "ORDER",
            isMoney: false,
            link: "View All Order",
            icon: <AirportShuttleIcon className='icon' style={{color: "goldenrod", backgroundColor: "rgba(218, 165, 32 , 0.2)"}}/>,
        };
        break;

        case "earnings":
        data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnOutlinedIcon className='icon' style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)"}}/>
        };
        break;
        case "balance":
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See Details",
            icon: <CreditCardIcon className='icon' style={{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)"}}/>
        };
        default:
            break;
  }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget