import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';


function MyPosts() {
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
                {/* {GetImages()} */}
            </Container>
        </div>
    )
}

export default MyPosts
