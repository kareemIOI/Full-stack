import React, { useEffect, useState } from 'react'
import Select from './select'

const JsonObject = {
    firstname: "yamen",
    lastname: "nasri",
    emali: "Yamen.nasdr@ggg.",
    password: "12345",
    address: "syria damascurs",
    phone: "099333",
    shortbio: "hello world how are you today",
    gender: "male",
    blood: "A+",
    status: "Teacher",
    religon: "Muslim"

}
// Make a form one to get data (user) to edit it..... and the other to make a data (user)


function AddUserForm() {
    const [FormData, setForm] = useState(JsonObject)
    // console.log(FormData)
    // const loadFile = function (event) {
    //     var image = document.getElementById('output');
    //     image.src = URL.createObjectURL(event.target.files[0]);
    // }
    function RsetInputs() {
        const confimationn = window.confirm("are you sure?")
        if (confimationn) {
            let inputs = document.querySelectorAll("input")
            let selects = document.querySelectorAll("select")
            inputs.forEach(input => {
                input.value = ""
            })
            selects.forEach((select) => {
                select.value = select.options[0].value
            })
            document.querySelector("textarea").value = ''
        }
    }
    function formSubmit(e) {
        // console.log(e.target)
        e.preventDefault()
    }
    return (
        <div className='adduser-form'>
            <h4>Add New User</h4>
            <form className='adduser-form d-flex flex-wrap gap-3' onSubmit={formSubmit} >
                <div className='admian-add-inputs-container d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-4 mb-3'>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>First Name</label>
                        <input name="FirstName" defaultValue={FormData === '' ? '' : FormData.firstname} type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Last Name</label>
                        <input name='LastName' type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Email</label>
                        <input name='Email' type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Password</label>
                        <input name='Password' type="password" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Address</label>
                        <input name='Address' type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Phone</label>
                        <input name='Phone' type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Father Name</label>
                        <input name='Phone' type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Mother Name</label>
                        <input name='Phone' type="text" className='p-2' />
                    </div>
                    <div className='input-container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Short Bio</label>
                        <textarea name='ShortBio'></textarea>
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
            </form>
            <button className='' onClick={() => { RsetInputs() }} >Reset</button>
        </div>
    )
}
export default AddUserForm