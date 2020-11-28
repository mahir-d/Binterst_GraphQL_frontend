import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Card, Typography } from '@material-ui/core'
import { CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import BinItButton from './BinItButton'
const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20
    },
    media: {
        height: 500,
    },
    root1: {
        justifyContent: 'center'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },

}));



function GetPostedImages(props) {

    const classes = useStyles();
    const getImageQuery = gql`
    query{
       userPostedImages{
            id
            url
            posterName
            description
            userPosted
            binned
        }
    }
`;



    const { loading, error, data } = useQuery(getImageQuery);

    if (loading) {
        return (<CircularProgress />)
    }
    else if (error) {
        <div>
            <p>
                error
            </p>
        </div>
    }

    else if (data) {
        let imageData = data.userPostedImages
        console.log(data)
        return (
            < div >

                <Grid container spacing={3} className={classes.root1}>
                    {imageData.map((image_obj) => (
                        <Grid item key={image_obj.id} xs={12}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={image_obj.url}
                                    title={image_obj.posterName}>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" align='center' component="h2">
                                        {image_obj.posterName}
                                    </Typography>
                                    <Typography variant="body1" align='left' color="textPrimary" component="p">
                                        {image_obj.description}
                                    </Typography>
                                </CardContent>
                                <CardActionArea>
                                    <Grid container className={classes.root1}>
                                        <Grid item>
                                            <BinItButton image_obj={image_obj}></BinItButton>
                                        </Grid>
                                    </Grid>

                                </CardActionArea>
                            </Card>
                        </Grid>

                    ))}
                </Grid>
            </div >)
    }
    else {
        return null
    }
}

export default GetPostedImages;