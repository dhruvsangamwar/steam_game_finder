import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const container = document.getElementById("target");
const root = createRoot(container);

root.render(<React.Fragment>
    <h1><span className="title">
    Find a steam game</span></h1>
    
    <TextField id="outlined-basic" sx={{ m: 1, width: '25ch' }} size="small" label="username" variant="outlined" />
    <TextField id="outlined-basic" sx={{ m: 1, width: '25ch' }} size="small" label="password" variant="outlined" />
    <Button variant="contained" sx={{ m: 1, width: '25ch' }} size="medium">Find Game</Button>

    
    </React.Fragment>);