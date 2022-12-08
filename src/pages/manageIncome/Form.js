import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () =>{
    const [editMode, setEditMode] = useState(false);
    const [amount, setAmount] = useState(0);
    const amountChange = (e) =>{
        setAmount(e.target.value);
    }
    const saveAmount = () =>{
        console.log('amount',amount)
    }
    return(
        <>
            <h1>Form Income</h1>
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={amount}
                onChange={amountChange}
                />
            <br/>
            <Button variant="contained" className="mt-2" onClick={saveAmount}>Save</Button>
        </>
    )
}
export default Form;