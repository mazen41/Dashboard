import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName: "Email", width: 230,
    },
    {
        field: "age", headerName: "Age", width: 100,
    },
    {
        field: "status", headerName: "Status", width: 160, renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]
export const userRows = [
    {
        id: 1,
        username: "Aymen",
        img: "pexels-andrea-piacquadio-712513.jpg",
        status: "active",
        email: 'Aymen1@gmail.com',
        age: 35
    },
    {
        id: 2,
        username: "Mohamed Sayed",
        img: "pexels-andrea-piacquadio-712513.jpg",
        email: "Mohamed22@gmail.com",
        status: "passive",
        age: 42,

    },
    {
        id: 3,
        username: "Karem Mahmoud",
        img: "pexels-andrea-piacquadio-712513.jpg",
        email: "KaremMahmoud99@gmail.com",
        status: "pending",
        age: 24,

    },
    {
        id: 4,
        username: "Mahmoud Sayed",
        img: "pexels-andrea-piacquadio-712513.jpg",
        email: "Mahmoud77@gmail.com",
        status: "passive",
        age: 22,

    },
    {
        id: 5,
        username: "Aballah",
        img: "pexels-andrea-piacquadio-712513.jpg",
        email: "Aballah00@gmail.com",
        status: "pending",
        age: 30,

    },
    {
        id: 6,
        username: "Khaled",
        img: "pexels-andrea-piacquadio-712513.jpg",
        email: "Khaled55@gmail.com",
        status: "passive",
        age: 50,

    },
]