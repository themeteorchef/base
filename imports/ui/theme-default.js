import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';
import Data from './data';

const themeDefault = getMuiTheme({
  palette: {},
  appBar: {
    height: Data.APPBAR_HEIGHT
  },
  drawer: {
    width: Data.DRAWER_WIDTH,
    color: grey900
  }
});

export default themeDefault;
