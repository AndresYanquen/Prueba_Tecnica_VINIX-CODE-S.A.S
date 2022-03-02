import React, { useState } from 'react'
import style from './style.css'


const Modal = ({ id, setOpenCloseModal, deleteAdd, createuser }) => {
    const textDelete = "Aceptar"
    const textAdd = "Agregar"

    const initialValues = {
        "name": "",
        "gender": "",
        "email": "",
        "status": ""
    }

    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }


    return (
        <div  id='background-modal'>

            <div className='container rounded' id='modal-size'>
                <div className='container' style={{ height: '100px' }} >
                    <h3 className='margin-modal'>Operación CRUD</h3>
                </div>
                <div className='container' style={{ height: '200px' }}>
                    {/*  <p style={{ fontSize: '1.6rem' }}>{El usuario con el id {id} se ha eliminado}</p> */}
                    {
                        deleteAdd ?
                            <div>
                                <p style={{ fontSize: '1.6rem' }}>El usuario con el id {id} se ha eliminado</p>

                                <div className='container' style={{ marginTop: "90px" }}>
                                    <button type="button" class="btn btn-success btn-lg" onClick={
                                        () => setOpenCloseModal(false)
                                    }> Aceptar </button>
                                </div>
                            </div>

                            :
                            <div>
                                <p style={{ fontSize: '1.6rem' }}> Agrega los campos correspondientes:</p>

                                <form>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="" class="form-control" id="name" name="name" value={values.name} onChange={handleInputChange} />
                                    </div>
                                    <p>Gender: </p>
                                    <select class="form-select" aria-label="Default select example" id='gender' name='gender' value={values.gender} onChange={handleInputChange}>
                                        <option selected>Open to select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" name="email" value={values.email} onChange={handleInputChange} />
                                    </div>
                                    <p>Status: </p>
                                    <select class="form-select" aria-label="Default select example" id='status' name='status' value={values.status} onChange={handleInputChange}>
                                        <option selected>Open to select</option>
                                        <option selected value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>

                                    <div className='container' style={{ marginTop: "30px" }}>
                                        <button type="submit" class="btn btn-success btn-lg" onClick={
                                            () => {
                                                setOpenCloseModal(false)
                                                createuser(values)
                                                console.log(values)


                                            }
                                        }> Agregar</button>
                                    </div>

                                </form>
                            </div>

                    }
                </div>


            </div>
        </div>
    )
}

export default Modal