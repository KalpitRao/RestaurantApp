//If we have a parent div and inside that parent div we have three div's.
//IF we have display:flex in the parent container all of the items(three div's) are going to align in row-horizontally.
//If we have flex direction: column all the items(three div's of that container) are going to align vertically.
//If we type justifyContent:center all of the items are going to be horizontally centered.
//If we type alignItems:center all of the items are going to be vertically centered.
//This is what flexbox is.



import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '../menuapi';
import { Box, Grid } from '@mui/material';
import { flexbox } from '@mui/system';

function MenuItems() {
    return (
        <>
            <Grid container spacing={2} columns={16} style={{display:'flex', justifyContent:"center"}}>
                {Menu.map((currElm) => {
                    return (
                        <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={currElm.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {currElm.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currElm.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                    )
                })}
                
                
            </Grid>
        </>
    )
}

export default MenuItems