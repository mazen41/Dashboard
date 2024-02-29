import React from 'react'
import './single.scss'
import SideBar from '../../components/sideBar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import image from './pexels-andrea-piacquadio-712513.jpg';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
            <div className="left">
              <div className="editButton">
                Edit
              </div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src={image} alt="" className="itemImg" />
                <div className="details">
                  <h2 className="itemTitle">Mohamed Ahmed</h2>
                  <div className="detailsItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">MohamedAhmed22@gmail.com</span>
                  </div>
                  <div className="detailsItem">
                    <span className="itemKey">phone:</span>
                    <span className="itemValue">01152879755</span>
                  </div>
                  <div className="detailsItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                  </div>
                  <div className="detailsItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
            </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single;