import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


function Navbar() {
    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs>
                    <Typography>Breakfast</Typography>
                </Grid>
                <Grid item xs>
                    <Typography>Evening</Typography>
                </Grid>
                <Grid item xs>
                    <Typography>Lunch</Typography>
                </Grid>
                <Grid item xs>
                    <Typography>Dinner</Typography>
                </Grid>
                <Grid item xs>
                    <Typography>All</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar