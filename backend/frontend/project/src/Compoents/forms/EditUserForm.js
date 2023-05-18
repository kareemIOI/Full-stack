import React, { useEffect, useState } from 'react'



function EditUserForm({ editUserUrl, setEditUserUrl }) {

    let [userdata, setUserData] = useState({})
    let [isloading, setisLoading] = useState(true)
    useEffect(() => {
        getUserData()
    }, [])

    async function getUserData() {
        document.body.style.overflow = "hidden"
        let data = await fetch(editUserUrl).then(res => {
            return res.json();
        });
        //console.log(data);
        setUserData(data.results[0]);
        setisLoading(false)
        // console.log(userdata);
    }



    function closeEditUserForm() {
        setUserData({})
        setEditUserUrl('')
        document.body.style.overflow = "auto"
    }
    console.log(`new number here`, userdata)
    // console.log(userdata[0])




    return (<div> {isloading ? (
        <div className='loading-cirlce' >
            <span className='circle circle1'>
                <span className='circle circle2'>
                    <span className='circle circle3'></span>
                </span>
            </span>
        </div>) : (
        <div div className='EditUserForm'>
            <div className='backkground-layer' onClick={closeEditUserForm}></div>
            <div className='edit-user-container bg-white py-5 px-3'>
                <p className='edit-user-bar py-2 '>{userdata.name.first || ''}  </p>
                <button className='edit-user-close' onClick={closeEditUserForm}>X</button>
                <form>
                    <input placeholder='UserName' />
                    <input placeholder='FirstName' />
                    <input placeholder='LastName' />
                    <input placeholder='Email' />
                    <input placeholder='password' />
                    <input placeholder='Address' />
                    <input placeholder='Phone' />
                    <input placeholder='FatherName' />
                    <input placeholder='MotherName' />
                    <input placeholder='Field' />
                    <input placeholder='Level' />
                    <input placeholder='Class' />
                    <input placeholder='' />
                    <img width="100" alt='userimg' />
                    <button>save</button>
                </form>
            </div>
        </div>)}
    </div>
    )

}

export default EditUserForm