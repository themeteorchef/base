import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Snackbar from 'material-ui/Snackbar';
import ThemeDefault from '../theme-default';
import Data from '../data';
import container from '../../modules/container';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleDimensionChange = this.handleDimensionChange.bind(this);
  }

  handleDimensionChange() {
    const width = $(window).width();
    const height = $(window).height();
    const isMobile = width <= 700;
    this.setState({
      isMobile: isMobile,
      columnSize: isMobile
        ? Math.ceil(width / 500)
        : Math.ceil((width - Data.DRAWER_WIDTH) / 500),
      isDrawerOpen: false
    });
  }

  componentWillMount() {
    this.handleDimensionChange();
    this.handleSnackbarOpen("Welcome to Application Name!");
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleDimensionChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleDimensionChange);
  }

  handleDrawerToggle() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  }

  handleSnackbarOpen(message) {
    this.setState({isSnackbarOpen: true, snackbarMessage: message});
  }

  handleSnackbarClose() {
    this.setState({isSnackbarOpen: false});
  }

  render() {
    const {isMobile, columnSize, isDrawerOpen, isSnackbarOpen, snackbarMessage} = this.state;
    const {children, currentUser} = this.props;
    const childrenWithProps = React.cloneElement(children, {
      columnSize: columnSize,
      handleSnackbarOpen: this.handleSnackbarOpen.bind(this)
    });

    const styles = {
      container: {
        margin: '20px 20px 20px 20px',
        paddingLeft: isMobile
          ? 0
          : Data.DRAWER_WIDTH,
        paddingTop: Data.APPBAR_HEIGHT
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header isMobile={isMobile} currentUser={currentUser} styles={styles.header} handleDrawerToggle={this.handleDrawerToggle.bind(this)}/>
          <Menu isMobile={isMobile} isDrawerOpen={isDrawerOpen} menus={currentUser
            ? Data.authenticated_menus
            : Data.public_menus} handleDrawerToggle={this.handleDrawerToggle.bind(this)}/>

          <div style={styles.container}>
            {childrenWithProps}
          </div>

          {/* TODO: consider bottom navigation for mobile apps */}
          <Snackbar open={isSnackbarOpen} message={snackbarMessage} autoHideDuration={4000} onRequestClose={this.handleSnackbarClose.bind(this)}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object,
  children: PropTypes.element
};

export default container((props, onData) => {
  //TODO: wait for user subscription first
  const currentUser = Meteor.user();
  onData(null, {currentUser});
}, App);
