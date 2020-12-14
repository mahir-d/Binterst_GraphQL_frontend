import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Badge, Card, Typography } from '@material-ui/core'
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



function GetPopularImages(props) {
    const [updateF, setUpdateF] = useState(false)
    const updateCalled = () => {
        setUpdateF({ updateF: !updateF })
        console.log('updateCalled')
    }
    useEffect(() => {

        refetch()

    }, [updateF])


    const classes = useStyles();
    const getImageQuery = gql`
    query{
        getTopTenBinnedPosts{
            id
            url
            posterName
            description
            userPosted
            binned
            numBinned
        }
    }
`;



    const { loading, error, data, refetch } = useQuery(getImageQuery);

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
        let imageData = data.getTopTenBinnedPosts
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

                                    <Badge badgeContent={image_obj.numBinned} color="primary">
                                        <Typography variant="button">No of Likes</Typography>
                                    </Badge>

                                </CardContent>
                                <CardActionArea>
                                    <Grid container >
                                        <Grid item>
                                            <BinItButton updateCalled={updateCalled} image_obj={image_obj}></BinItButton>
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

export default GetPopularImages;