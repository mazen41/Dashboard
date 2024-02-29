import React, {useState} from 'react'
import './new.scss'
import SideBar from '../../components/sideBar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import image from './no-image-icon-0.jpg';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
// import axios from 'axios';
const New = ({inputs, title}) => {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
        <SideBar />
        <div className="newContainer">
            <NavBar />
            <div className="top">
                <h1 className="">{title}</h1>
            </div>
            <div className="bottom">
                <div className="left">
                  <img src={file ? URL.createObjectURL(file) : image} alt="" className=''/>
                </div>
                <div className="right">
                  <form className="form" action='/users' method='POST'>
                    <div className="formInput">
                      <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                      <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{display: 'none'}}/>
                    </div>
                    {
                      inputs.map((input) => {
                        return(
                          <div className="formInput" key={input.id}>
                            <label htmlFor="">{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder}/>
                          </div>
                        )
                      })
                    }
                    <button className="send">Send</button>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New