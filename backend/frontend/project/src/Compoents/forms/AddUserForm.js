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
    const [FormData, setForm] = useState({gender:'male' , blood:'+A' , status:'teacher' , relgion:'muslim', joined: Date.UTC()})
    // console.log(FormData)
    // const loadFile = function (event) {
    //     var image = document.getElementById('output');
    //     image.src = URL.createObjectURL(event.target.files[0]);
    // }
    //! api/register


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
        e.preventDefault()
        setForm({...FormData , "joined" : "mama"})
        console.log(Object.keys(FormData).length)
        if(Object.keys(FormData).length === 14){
            console.log("success")
            fetch(`http://127.0.0.1:8000/api/register`,{
                method:"POST",
                headers:{'Accept': 'application/json','Content-Type': 'application/json'},
                body:JSON.stringify(FormData)
            }
            )
            .then((res) => console.log(res.json())).then(res => console.log(res))
            .catch(error => {console.log(error)})
        }

    }

    return (
        <div className='adduser-form'>
            <h4>Add New User</h4>
            <form className='adduser-form d-flex flex-wrap gap-3' onSubmit={formSubmit} >
                <div className='admian-add-inputs-container d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-4 mb-3'>


                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>First Name</label>
                        <input required onChange={(e) => setForm({...FormData , firstname:e.target.value})} name="FirstName" defaultValue={FormData === '' ? '' : FormData.firstname} type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Last Name</label>
                        <input required onChange={(e) => setForm({...FormData , lastname:e.target.value})} name='LastName' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Email</label>
                        <input required onChange={(e) => setForm({...FormData , email:e.target.value})} name='Email' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Password</label>
                        <input required onChange={(e) => setForm({...FormData , password:e.target.value})} name='Password' type="password" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Address</label>
                        <input required onChange={(e) => setForm({...FormData , address:e.target.value})} name='Address' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Phone</label>
                        <input required onChange={(e) => setForm({...FormData , phone:e.target.value})} name='Phone' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Father Name</label>
                        <input required onChange={(e) => setForm({...FormData , father:e.target.value})} name='Phone' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Mother Name</label>
                        <input required onChange={(e) => setForm({...FormData , mother:e.target.value})} name='Phone' type="text" className='p-2' />
                    </div>

                    <div className='Input-Container  d-flex flex-column gap-2'>
                        <label className='d-block text-black-50 fs-6'>Short Bio</label>
                        <textarea onChange={(e) => setForm({... FormData , bio:e.target.value})} name='ShortBio'></textarea>
                    </div>

                    <div className='d-flex justify-content-sm-start justify-content-xsm-center flex-wrap gap-3'>
                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Gender"} options={["Male", "Female"]} FormData={FormData} />
                        </div>

                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Blood"} options={["A-", "A+", "B-", 'B+', "AB-", "AB+", 'O+', "O-"]} FormData={FormData} />
                        </div>

                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Status"} options={["Student", "Teacher", "Parent", 'Admain']} FormData={FormData} />
                        </div>

                        <div className='  d-flex flex-column gap-2'>
                            <Select title={"Relgion"} options={["Muslim", "Chritian", 'Jewish']} FormData={FormData} />
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



// notes: you can use the state deep to many childes compesonts ...but not in deep ... this process called drilling ...not a good way