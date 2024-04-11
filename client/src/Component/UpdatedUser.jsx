import React, { useState } from 'react'

export default function UpdatedUser({ handleOnSubmit, value, handlechange }) {


    return (
        <>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update Employee Details</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={value.empName} name='empName' onChange={handlechange} className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" value={value.empAge} name='empAge' onChange={handlechange} className="form-control" required/>
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" value={value.empState} name='empState' onChange={handlechange} className="form-control" required/>

                                </div>
                                <div className="form-group">
                                    <label>Phone no.</label>
                                    <input type="tel" value={value.empNo} name='empNo' onChange={handlechange} className="form-control" required/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}
