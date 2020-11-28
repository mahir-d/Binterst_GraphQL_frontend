import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import GetPostedImages from './GetPostedImages'
import CreateNewPost from './CreateNewPost'
import Button from '@material-ui/core/Button';

function MyPosts() {
    // Functions to toggle dialog 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", marginBottom: "10px" }}>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/my-bin" >
                            My Bin
                        </Link>
                        <Link color="inherit" href="/" >
                            Images
                        </Link>
                        <Typography color="primary">My Posts</Typography>
                    </Breadcrumbs>

                </div>
                <Button onClick={handleClickOpen}>Add New Post</Button>
                <CreateNewPost open={open} handleClose={handleClose} ></CreateNewPost>
                <GetPostedImages></GetPostedImages>
            </Container>
        </div>
    )
}

export default MyPosts
