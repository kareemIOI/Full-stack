import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

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
        var rows = data.map((data , index) => ({
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
        { field: "name", headerName: "Name",  width: 150 },
        { field: "gender", headerName: "Gender", width: 150 },
        { field: "phone", headerName: "Phone", },
        { field: "email", headerName: "Email", },
        // { field: "picture", headerName: "Profile", width:200 , height:100 },
    ]
    return (
        <div className='bg-white py-3 ' style={{height:500 ,}}>
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