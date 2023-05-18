import React, { useState } from 'react'
import Select from '../../Compoents/forms/select'
import StudentTable from '../../Compoents/Tables/StudentTable'
import EditUserForm from '../../Compoents/forms/EditUserForm'




//~ api urls used : allusers/students/webdev/level1/class1
//~ api urls used : allusers/teachers/webdev/
//~ api urls used : allusers/parents/webdev/level1/class1
//~ api urls used : allusers/admins/webdev/level1/class1


export default function AllUsers() {
    //^ to change UI selects
    let [type, setType] = useState("students")

    //^ data to api to GET good table
    let [data, setData] = useState({ type: "students", filed: "webdev", level: "level1", class: 'class1' })

    //^ dynamic url prepare
    let [url, setUrl] = useState("")

    //^ dynamic url with specific user
    let [editUserUrl, setEditUserUrl] = useState("")


    //^ set defualt values when toggles the UI selects
    function HandleDefaultDataState(type) {
        setType(type)
        switch (type) {
            case 'students':
            case 'parents':
                setData({})
                setData({ type: type, filed: "webdev", level: "level1", class: 'class1' })
                return
            case "teachers":
                setData({})
                setData({ type: type, filed: "webdev" })
                return
            case 'admins':
                setData({})
                setData({ type: type })
                return
            default:
                setData({})
                setData({ type: type, filed: "webdev", level: "level1", class: 'class1' })
                return
        }
    }

    function HandleDataState(_title, value) {
        setData({ ...data, [_title]: value.split(' ').join('').toLowerCase() })
    }



    //^ Change UI selects funtions
    function selects(type) {
        switch (type) {
            case 'students':
            case 'parents':
                return <>
                    <select title="filed" onChange={(e) => HandleDataState(e.target.getAttribute('title'), e.target.value)}
                    >
                        <option>Web Dev</option>
                        <option>Mobile Dev</option>
                        <option>Game Dev</option>
                        <option>security</option>
                    </select>
                    <select title="level" onChange={(e) => HandleDataState(e.target.getAttribute('title'), e.target.value)} >
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                        <option>Level 4</option>
                        <option>Level 5</option>
                    </select>
                    <select title='class' onChange={(e) => HandleDataState(e.target.getAttribute('title'), e.target.value)}>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                    </select>
                </>
            case 'teachers':
                return <>
                    <select title='filed' onChange={(e) => HandleDataState(e.target.getAttribute('title'), e.target.value)}>
                        <option>Web Dev</option>
                        <option>Mobile Dev</option>
                        <option>Game Dev</option>
                        <option>security</option>
                    </select>
                </>
            case 'admins':
                return
            default: return
        }
    }
    function getTableData() {
        let url = `allusers/api/${data.type}/${data?.filed || ''}/${data.level || ''}/${data.class || ''}`
        console.log(url)
        setUrl("")
        setUrl(url)
        // if(url.endsWith('/')){
        // console.log(url)      
        // console.log(url[url.length-1] , url[url.length-2])
        // console.log(url.slice(0,-2))
        // }  
    }
    

    return (
            <div className='all-users bg-white p-4'>
                <section className='students-table-section'>
                    <div className='d-flex gap-2'>
                        <div>
                            <select onChange={(e) => {
                                HandleDefaultDataState(e.target.value)
                            }}>
                                <option>students</option>
                                <option>teachers</option>
                                <option>parents</option>
                                <option>admins</option>
                            </select>
                        </div>
                        <div>
                            {type && selects(type)}
                            <button onClick={getTableData}>show</button>
                        </div>
                    </div>
                    {url && <StudentTable url={url} setEditUserUrl={setEditUserUrl} />}
                    {editUserUrl && <EditUserForm editUserUrl={editUserUrl} setEditUserUrl={setEditUserUrl} />}
                </section >
            </div >
        )
    }
