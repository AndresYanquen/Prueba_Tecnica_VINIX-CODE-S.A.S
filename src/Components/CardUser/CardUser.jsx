import React from 'react'
import style from './style.css';
import {AiOutlineMinusCircle} from 'react-icons/ai'

const CardUser = ({ userInfo, deleteUser,getUserInfo}) => {
  
  return (
    <div className='container' style={{marginTop:'30px'}}>
      <div className="card text-white bg-secondary mb-3" style={{maxWidth:'20rem'}}>
        <div className="card-header d-flex justify-content-between">
          <p>{userInfo.name}</p>
          <button className='btn-close' onClick={(e)=>{
            deleteUser(userInfo.id,e)
            
            }}></button>
          
          </div>
        <div className="card-body">
          <h5 className="card-title">ID: {userInfo.id}</h5>
          <p className="card-text">{userInfo.email}</p>
          <p className="card-text"> Status: {userInfo.status}</p>
          <p className="card-text"> Gender: {userInfo.gender}</p>
        </div>
      </div>
    </div>
  )
}

export default CardUser;