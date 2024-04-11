import React, { useRef, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';



export default function AddUser() {
    const [value, setValue] = useState({
        empName: '',
        empAge: '',
        empState: '',
        empNo: ''
    })
    const handleOnchange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    };


    const CloseRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const adduser = await axios.post('http://localhost:8000/api/create', value)
            const response = adduser.data
            if (response.success) {
                toast.success(response.message)
                CloseRef.current.click()

            }
            console.log(response)
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <>


            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ref={CloseRef}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" placeholder='Enter employee name' value={value.empName} name='empName' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Age </label>
                                    <input type="number" placeholder='Enter employee age' value={value.empAge} name='empAge' onChange={handleOnchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" placeholder='Enter employee residence state' value={value.empState} name='empState' onChange={handleOnchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Phone No.</label>
                                    <input type="tel" placeholder='Enter employee phone no.' value={value.empNo} name='empNo' onChange={handleOnchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
