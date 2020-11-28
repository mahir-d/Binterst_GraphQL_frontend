import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import GetBinnedImages from './GetBinnedImages'
function MyBin() {

    return (
        <div>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", marginBottom: "10px" }}>

                    <Breadcrumbs aria-label="breadcrumb">

                        <Typography color="primary">My Bin</Typography>

                        <Link color="inherit" href="/" >
                            Images
                        </Link>
                        <Link color="inherit" href="/my-posts" >
                            My Posts
                        </Link>
                    </Breadcrumbs>

                </div>

                <GetBinnedImages></GetBinnedImages>
            </Container>

        </div >

    )
}

export default MyBin
