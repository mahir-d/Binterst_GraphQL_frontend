import React, { useState } from 'react'
import SimpleBreadcrumbs from './Breadcrumb'
import Container from '@material-ui/core/Container';
import GetImages from './GetImages'








function Home(props) {
    return (<div>
        <Container>
            {SimpleBreadcrumbs()}
            {GetImages()}
        </Container>
    </div>);


}
export default Home;