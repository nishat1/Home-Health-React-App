import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';

/* Styles for Header pulled from MaterialUI header demo */
/* flexGrow: defines ability of flex item to grow if necessary */
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {

  state = {
    drawerOpen: false
  }

  toggleDrawer = (openBool) => {
    this.setState({
      drawerOpen: openBool
    });
  }
  
  render() {
    return (
      <div className={this.props.classes.root}>

        {/* Creates header object: position-fixed keeps header visible during scroll */}
        <AppBar 
          position="static"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "none"
          }}>

          <Toolbar>

            {/* 
                Adds title in header. 
                Reloads page if title is clicked
            */}
            <IconButton
              aria-label="Home Icon"
              onClick={() => window.location.reload()}
            >
              <Home />
            </IconButton>
            <Typography 
              variant="title" 
              color="default"
              className={this.props.classes.flex} 
              onClick={() => window.location.reload()}
            >
              Home Health
            </Typography>
            

          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);