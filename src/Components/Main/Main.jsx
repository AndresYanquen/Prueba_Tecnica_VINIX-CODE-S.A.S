import React, { useEffect, useState } from 'react'
import CardUser from '../CardUser/CardUser'
import style from './style.css'
import requestData from '../requestData'
import Modal from '../Modal/Modal'

export const Main = ({ baseUrl }) => {


  
  const [userInfo, setUserInfo] = useState([])
  const [render, setRender] = useState(true);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [generalModal, setGeneralModal] = useState(true); 
  const [idUser, setIdUser] = useState(0)
  const [deleteAdd, setdeleteAdd] = useState(false)
  
  //true delete -- false add

  const getUserInfo = async () => {
    const url = `${baseUrl}users`
    const response = await fetch(url).then(response => response.json())
    console.log(response)
    let users = response.map(item => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        status: item.status,
        gender: item.gender
      }
    })



    setUserInfo(users)
  }

  const createuser = async(data) =>{
    const url = `${baseUrl}users`
    console.log(JSON.stringify(data)); 
    console.log(url)
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ff101e8a38f18fcc11dc7006f0fa039fb7e57b89b3e3ddecc18ab095e4766dc3'
      },
      body: JSON.stringify(data)
    })


  }


  const deleteUser = async (id) => {
    const url = `${baseUrl}users/${id}`
    let response = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ff101e8a38f18fcc11dc7006f0fa039fb7e57b89b3e3ddecc18ab095e4766dc3'
      }
    })
    getUserInfo()
    setdeleteAdd(true)
    setOpenCloseModal(true)
    setIdUser(id)

    /* console.log(`User with id: ${id} deleted`) */
  }


  useEffect(() => {
    getUserInfo()

  }, [])


  return (
    <main className='container-fluid'>
      { openCloseModal ?
        <Modal id={idUser} setOpenCloseModal={setOpenCloseModal} deleteAdd={deleteAdd} createuser={createuser}></Modal> 
        : ''
      }

      <div className="container d-flex justify-content-center align-items-center">
      <button type="button" class="btn btn-success btn-lg" onClick={
        ()=>{
          setdeleteAdd(false)
          setOpenCloseModal(true);
        }
        
      }> 
      Agregar Usuario</button>
      </div>
      <section className='container-fluid'>
        <div className='row'>
          {
            userInfo.map(users => (
              <div className='col-xs-6 col-sm-5 col-md-4' key={userInfo.id}>
                <CardUser userInfo={users} deleteUser={deleteUser} getUserInfo={getUserInfo} key={userInfo.id}></CardUser>
              </div>

            ))



          }
          


        </div>
        
      </section>
      
    </main>
  )
}
