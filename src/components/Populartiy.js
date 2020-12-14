import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import GetPopularImages from './GetPopularImages';
function Popularity() {

    return (
        <div>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", marginBottom: "10px" }}>

                    <Breadcrumbs aria-label="breadcrumb">

                        <Typography color="primary">Popularity</Typography>

                        <Link color="inherit" href="/my-bin" >
                            My Bin
                        </Link>
                        <Link color="inherit" href="/" >
                            Images
                        </Link>
                        <Link color="inherit" href="/my-posts" >
                            My Posts
                        </Link>
                    </Breadcrumbs>

                </div>

                <GetPopularImages></GetPopularImages>
            </Container>

        </div >

    )
}

export default Popularity
