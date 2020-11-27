import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import GetImages from './GetImages'







function Home(props) {
    return (<div>
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", marginBottom: "10px" }}>

                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/my-bin" >
                        My Bin
                    </Link>

                    <Typography color="primary">Images</Typography>

                    <Link color="inherit" href="/my-posts" >
                        My Posts
                    </Link>
                </Breadcrumbs>

            </div>
            {GetImages()}
        </Container>
    </div>);


}
export default Home;