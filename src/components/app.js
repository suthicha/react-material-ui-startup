import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { colors } from 'material-ui/styles';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.blue500
  },
  appBar: {
    height:90
  }
});

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  position: 'relative',
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(){this.setState({open: !this.state.open});}
  
  handleClose(){this.setState({open: false});}

  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <div>
        <AppBar 
          title="My AppBar" 
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <div>
          <Paper style={style} zDepth={3} rounded={false} />
          <Paper style={style} zDepth={3} rounded={false} />
          <Paper style={style} zDepth={3} rounded={false} />
        </div>
        <Drawer
          docked= {false}
          open={this.state.open} 
          onRequestChange={this.handleClose}>
          <MenuItem onClick={this.handleClose}>Menu Item#1</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item#2</MenuItem>
        </Drawer>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default App;