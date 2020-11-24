import React, { useState } from 'react'
import SimpleBreadcrumbs from './Breadcrumb'
import Container from '@material-ui/core/Container';
import GetImages from './GetImages'
import NavBar from './NavBar'







function Home(props) {
    return (<div>
        <Container>
            {<NavBar></NavBar>}
            {SimpleBreadcrumbs()}
            {GetImages()}
        </Container>
    </div>);


}
export default Home;