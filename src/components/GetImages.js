import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
// import RenderImageList from './RenderImageList'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root1: {
        justifyContent: 'center'
    },
}));
function GetImages(props) {
    const [pageNum, setPageNum] = useState(4)
    const classes = useStyles();
    const getImageQuery = gql`
    query{
        unSplashImages(pageNum: ${pageNum}){
            id
            url
            posterName
            description
            userPosted
            binned
        }
    }
`;
    useEffect(() => { }, [pageNum])


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
        let imageData = data.unSplashImages
        return (
            < div >
                <GridList cellHeight={500} className={classes.gridList} cols={1}>
                    {imageData.map((image) => (
                        <GridListTile key={image.id} cols={1}>
                            <img src={image.url} alt={image.description} />
                        </GridListTile>
                    ))}
                </GridList>
                <br></br>
                <Grid container xs={12} className={classes.root1}>
                    <Button color="default" onClick={() => setPageNum(pageNum + 1)} >Load More</Button>
                </Grid>
                <br></br>
            </div >)
    }
    else {
        return null
    }
}

export default GetImages;