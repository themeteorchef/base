import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import Menu from '../components/Menu';
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

  render() {
    const {isMobile, columnSize, isDrawerOpen} = this.state;
    const {children, currentUser} = this.props;
    const childrenWithProps = React.cloneElement(children, {columnSize: columnSize});

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
  const currentUser = Meteor.user();
  onData(null, {currentUser});
}, App);
