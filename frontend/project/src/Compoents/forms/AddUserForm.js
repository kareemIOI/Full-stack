import React from 'react'
import Select from './select'

function AddUserForm() {
    // const loadFile = function (event) {
    //     var image = document.getElementById('output');
    //     image.src = URL.createObjectURL(event.target.files[0]);
    // }
    return (
        <div className='adduser-form'>
            <h4>Add New User</h4>

            <form className='adduser-form d-flex flex-wrap gap-3'>

                <div className='admian-add-inputs-container d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-4 mb-3'>


                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>First Name</label>
                        <input type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Last Name</label>
                        <input type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Email</label>
                        <input type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Password</label>
                        <input type="password" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Address</label>
                        <input type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Phone</label>
                        <input type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Short Bio</label>
                        <textarea></textarea>
                    </div>


                    <div className='d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-3'>
                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Gender"} options={["Male", "Female"]} />
                        </div>
                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Blood Group"} options={["A-", "A+", "B-", 'B+', "AB-", "AB+", 'O+', "O-"]} />
                        </div>
                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Status"} options={["Student", "Teacher", "Parent", 'Admain']} />
                        </div>
                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Relgion"} options={["Muslim", "Chritian", 'Jewish']} />
                        </div>
                        {/* <div >
                            <p><input type="file" accept="image/*" name="image" id="file" onChange={(ev) => loadFile(ev)} style={{ display: "none" }} /></p>
                            <p><label className='bg-white p-2' htmlFor="file" style={{ cursor: "pointer" }}>Upload Image</label></p>
                            <p><img id="img-Uploaded" alt="229" /></p>
                        </div> */}
                    </div>
                </div>
                <button className=''>Save</button>
                <button className=''>Reset</button>
            </form>
        </div>
    )
}

export default AddUserForm