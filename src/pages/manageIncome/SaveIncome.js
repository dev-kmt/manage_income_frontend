import React, { useEffect, useState } from 'react';
import { getIncome } from '../../API/api';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const SaveIncome = () =>{
    const [incomes, setIncomes] = useState([]);
    useEffect(() => {
      getIncome().then(res =>{
        res?.status === 200 && setIncomes(res.data);
      });
    }, [])
    
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>Income List</h1>
                </div>
                <div className="col text-end">
                    <Link to="create" className='text-decoration-none'>
                        <Button variant="contained" color="success">
                            Create
                        </Button>
                    </Link>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incomes.length > 0 &&
                        incomes.map((income,index)=>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{income.amount}</td>
                                    <td>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
                </table>
        </div>
    )
}
export default SaveIncome;