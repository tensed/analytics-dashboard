import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { mainMenuItems, supportItems } from './components/DrawerItems';
import BarGraph from './components/BarGraph';
import CustomerAnalytics from './components/CustomerAnalytics';
import { Avatar } from '@material-ui/core';
import picture from './static/avatar.png';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  profile:
  {
    paddingTop: 20,
    marginLeft: -19,
  },
  profilelink:
  {
    marginTop: theme.spacing(3),
    marginLeft:-5,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 420,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={open}
      >
        <Container style={{padding: '25px 50px 75px 100px'}} maxWidth="sm">
        <Avatar style={{ height: '50px', width: '50px' }} src={picture} />
        <Typography align="left" color="textPrimary" className={classes.profile}>
        Bruce Wayne 
      </Typography>
      <div className={classes.profilelink}>
        <Link color="primary" href="#">
         My Profile
        </Link>
      </div>
        </Container>
        <Divider variant="middle" />
        <Typography style={{paddingLeft: '25px',paddingTop:'20px', fontWeight: 'bold'}} align="left" color="textPrimary">
        Menu
      </Typography>
        <List style={{paddingLeft: '25px'}}>{mainMenuItems}</List>
        <Divider variant="middle" />
        <List style={{paddingLeft: '25px', paddingTop:'70px'}}>{supportItems}</List>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Bar Graph */}
            <Grid item xs={11}>
              <Paper className={fixedHeightPaper}>
                <BarGraph />
              </Paper>
            </Grid>
            <Grid item xs={11}>
              <Paper className={classes.paper}>
              <CustomerAnalytics />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}