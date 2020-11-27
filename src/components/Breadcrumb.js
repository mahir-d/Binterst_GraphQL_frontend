import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import React, { useState } from 'react'




function SimpleBreadcrumbs(props) {

    const [openTab, setOpenTab] = useState(1)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "10px", marginBottom: "10px" }}>

            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/my-bin" >
                    <Typography color="textPrimary">My Posts</Typography>
                </Link>
                <Link color="inherit" href="/" >
                    <Typography color="textPrimary">Images</Typography>
                </Link>
                <Link color="inherit" href="/my-posts" >
                    <Typography color="textPrimary">My Posts</Typography>
                </Link>
            </Breadcrumbs>

        </div>
    );
}


export default SimpleBreadcrumbs;