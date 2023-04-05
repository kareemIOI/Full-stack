import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from "react-router-dom"

function StudentTable() {
    const [data, setData] = useState([])

    const GetUseres = async () => {
        await axios.get("https://randomuser.me/api/?results=20")
            .then(res => setData(res.data.results))
    }
    useEffect(() => {
        GetUseres()
    }, [])

    if (data) {
        var rows = data.map((data, index) => ({
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
            renderCell: (params) => {
                const onClick = (e) => {
                    let confirms = window.confirm("are you sure to Delete")
                    if (confirms) {
                        console.log("deleted account")
                        // we don the fethcing with method delete to some url form the back
                    }
                    // const currentRow = params.row;
                    // return alert(JSON.stringify(currentRow, null, 4));
                };

                return (
                    <>
                        <Link to={`/admain/add`} variant="outlined" style={{ backgroundColor: "purple", color: 'white', marginRight: 10, border: "none", padding: 5, textAlign: "center", width: 50 }} size="small" >Edit</Link>
                        <button variant="outlined" style={{ backgroundColor: "red", color: 'white', border: "none", padding: 5, width: 50 }} size="small" onClick={onClick}>Delete</button>
                    </>
                );
            },
            disableClickEventBubbling: true,
            width: 150,
        },
        // { field: "control", headerName: "Control", },
        // { field: "picture", headerName: "Profile", width:200 , height:100 },
    ]
    return (
        <div className='bg-white py-3 ' style={{ height: 500, }}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowHeight={100}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}

export default StudentTable