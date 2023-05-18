import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom"
import EditUserForm from '../forms/EditUserForm'

function StudentTable({ url, setEditUserUrl }) {


    let [users, setUsers] = useState([])
    let [isloading, setisLoading] = useState(true.w-50)

    useEffect(() => {
        GetUseres()
    }, [])




    const GetUseres = async () => {
        await axios.get("https://randomuser.me/api/?results=5")
            // await axios.get(url)
            .then(res => {
                setUsers(res.data.results)
                setisLoading(false)
            })
            .then(() => console.log(users))
    }


    if (users) {
        var rows = users.map((data, index) => ({
            id: index + 1,
            name: data.name.first,
            gender: data.gender,
            phone: data.phone,
            email: data.email,
            // picture:data.medium
        })
        )
    }
    // console.log(data)
    // console.log(rows)
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "gender", headerName: "Gender", width: 150 },
        { field: "phone", headerName: "Phone", },
        { field: "email", headerName: "Email", },
        {
            field: "control",
            // ^ params are the data of the row
            renderCell: (params) => {
                const onClick = () => {
                    let confirms = window.confirm("are you sure to Delete")
                    if (confirms) {
                        console.log("deleted account")
                        // we don the fethcing with method delete to some url form the back
                    }
                    // const currentRow = params.row;
                    // return alert(JSON.stringify(currentRow, null, 4));
                };
                function EidtUserUrl() {
                    setEditUserUrl(`https://randomuser.me/api/?results=4/${params.id}`)
                    console.log(`"https://randomuser.me/api/?results=4/${params.id}"`)
                }

                return (
                    <>
                        <button onClick={EidtUserUrl} variant="outlined" style={{ backgroundColor: "purple", color: 'white', marginRight: 10, border: "none", padding: 5, textAlign: "center", width: 50 }} size="small" >Edit</button>
                        <button variant="outlined" style={{ backgroundColor: "red", color: 'white', border: "none", padding: 5, width: 50 }} size="small" onClick={onClick}>Delete</button>
                    </>
                );
            },
            disableClickEventBubbling: true,
            width: 150,
        },
        {
            field: "Profile",
            renderCell: () => {

                return (
                    <>
                        <h4>user img</h4>
                    </>
                )
            },
            width: 100,
        }
        // { field: "control", headerName: "Control", },
        // { field: "picture", headerName: "Profile", width:200 , height:100 },
    ]
    return (
        <div className='bg-white py-3 ' style={{ height: 500, }}>
            {isloading ? (
                <div className='loading-cirlce' >
                    <span className='circle circle1'>
                        <span className='circle circle2'>
                            <span className='circle circle3'></span>
                        </span>
                    </span>
                </div>
            ) :
                (<DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={100}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />)
            }
            {/* <EditUserForm /> */}
        </div>

    )
}

export default StudentTable



// fix the nav bar of the admin 
// clean the edituserform functions