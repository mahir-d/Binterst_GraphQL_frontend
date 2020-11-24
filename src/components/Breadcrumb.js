import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function SimpleBreadcrumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                My Bin
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Images
            </Link>
            <Typography color="textPrimary">My Posts</Typography>
        </Breadcrumbs>
    );
}


export default SimpleBreadcrumbs;