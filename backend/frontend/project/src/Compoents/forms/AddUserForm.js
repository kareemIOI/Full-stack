import React, { useEffect, useState } from 'react'
import Select from './select'
import './inputs.css'



function AddUserForm() {
    const [FormData, setForm] = useState({ Gender: 'Male', Blood: '+A', Status: 'Teacher', Religon: 'Muslim' })
    // console.log(FormData)
    // const loadFile = function (event) {
    //     var image = document.getElementById('output');
    //     image.src = URL.createObjectURL(event.target.files[0]);
    // }
    // console.log(FormData)

    function RsetInputs(e) {
        e.preventDefault()

        //~ check if user writes any data
        if (Object.keys(FormData).length > 4) {
            const confimationn = window.confirm("are you sure?")
            if (confimationn) {

                // ~ Delete the data from the Form
                let inputs = document.querySelectorAll("input")
                let selects = document.querySelectorAll("select")
                inputs.forEach(input => {
                    input.value = ""
                })
                selects.forEach((select) => {
                    select.value = select.options[0].value
                })
                document.querySelector("textarea").value = ''
                //~ reset The FormData
                setForm({ Gender: 'Male', Blood: '+A', Status: 'Teacher', Religon: 'Muslim' })
            }
        }
    }


    // not showing the joined month and .....
    function formSubmit(e) {
        e.preventDefault()
        if (Object.keys(FormData).length === 14) {
            console.log('final FormData', FormData)
            //~ send the data
            fetch(`http://127.0.0.1:8000/api/addUser/`, {
                method: "POST",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(FormData),
                mode:"cors"
            }
            )
                .then(res => {return res.json()}).then(data => console.table('here is respoing data' , data))
                .catch(error => { console.log(error) })
        }
        else{
            console.log("not all data")
            console.log(Object.keys(FormData).length)
            console.log(FormData)
        }
    }

    return (
        <div className='adduser-form bg-white py-3 px-4'>
            <h4>Add New User</h4>
            <form className='adduser-form d-flex flex-wrap gap-3 mt-5' onSubmit={formSubmit} >
                <div className='admian-add-inputs-container d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-4 mb-3'>

                <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block fs-6'>UserName</label>
                        <input required onChange={(e) => setForm({ ...FormData, Username: e.target.value })} name="first_name" defaultValue={FormData === '' ? '' : FormData.firstname} type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block fs-6'>First Name</label>
                        <input required onChange={(e) => setForm({ ...FormData, FirstName: e.target.value })} name="first_name" defaultValue={FormData === '' ? '' : FormData.firstname} type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block fs-6'>Last Name</label>
                        <input required onChange={(e) =>  setForm({ ...FormData, LastName: e.target.value })} name='last_name' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6'>Email</label>
                        <input required onChange={(e) => setForm({ ...FormData, Email: e.target.value })} name='email' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6'>Password</label>
                        <input required onChange={(e) => setForm({ ...FormData, Password: e.target.value })} name='password' type="password" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6'>Address</label>
                        <input required onChange={(e) => setForm({ ...FormData, Address: e.target.value })} name='address' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6'>Phone</label>
                        <input required onChange={(e) => setForm({ ...FormData, Phone: e.target.value })} name='phone_number' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6'>Father Name</label>
                        <input required onChange={(e) => setForm({ ...FormData, FatherName: e.target.value })} name='father_name' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6'>Mother Name</label>
                        <input required onChange={(e) => setForm({ ...FormData, MotherName: e.target.value })} name='mother_name' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block  fs-6 justify-self-start'>Short Bio</label>
                        <textarea onChange={(e) => setForm({ ...FormData, ShortBio: e.target.value })} name='short_bio'></textarea>
                    </div>

                    <div className='d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-3'>
                        <div className='  d-flex flex-column gap-2 me-4'>
                            <Select title={"Gender"} options={["Male", "Female"]} FormData={FormData} />
                        </div>

                        <div className='  d-flex flex-column gap-2 me-4'>
                            <Select title={"Blood"} options={["A-", "A+", "B-", 'B+', "AB-", "AB+", 'O+', "O-"]} FormData={FormData} />
                        </div>

                        <div className='  d-flex flex-column gap-2 me-4'>
                            <Select title={"Status"} options={["Student", "Teacher", "Parent", 'Admin']} FormData={FormData} />
                        </div>

                        <div className='  d-flex flex-column gap-2 me-4'>
                            <Select title={"Religon"} options={["Muslim", "Christian", 'Jewish']} FormData={FormData} />
                        </div>

                        {/* <div >
                            <p><input type="file" accept="image/*" name="image" id="file" onChange={(ev) => loadFile(ev)} style={{ display: "none" }} /></p>
                            <p><label className='bg-white p-2' htmlFor="file" style={{ cursor: "pointer" }}>Upload Image</label></p>
                            <p><img id="img-Uploaded" alt="229" /></p>
                        </div> */}
                    </div>
                </div>
                <button className='addform-btn px-2 py-1 mb-2 ' >Save</button>
                <button className='addform-btn px-2 py-1' onClick={(e) => { RsetInputs(e) }} >Reset</button>
            </form>
        </div>
    )
}
export default AddUserForm
