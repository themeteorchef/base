import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import Menu from '../components/Menu';
//TODO: what exactly is this withWidth
import withWidth, {SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: props.width <= SMALL,
      isDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isMobile: nextProps.width <= SMALL,
      isDrawerOpen: false
    });
  }

  handleDrawerToggle() {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  }

  render() {
    let {isMobile, isDrawerOpen} = this.state;

    const styles = {
      container: {
        margin: '20px 20px 20px 20px',
        paddingLeft: isMobile
          ? 0
          : 230,
        paddingTop: 64
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header isMobile={isMobile} styles={styles.header} handleDrawerToggle={this.handleDrawerToggle.bind(this)}/>
          <Menu isMobile={isMobile} isDrawerOpen={isDrawerOpen} menus={Meteor.user()
            ? Data.authenticated_menus
            : Data.public_menus} handleDrawerToggle={this.handleDrawerToggle.bind(this)}/>

          <div style={styles.container}>
            {this.props.children}
          </div>

          {/* TODO: consider bottom navigation for mobile apps */}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);
