import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 6,
    },
    appbar: {
        alignItems: 'center',
    }
}));
export default function NavBar() {


    const classes = useStyles();
    return (<div>
        <AppBar position="static" className={classes.appbar}>

            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    BinInterest
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}