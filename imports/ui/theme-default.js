import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {},
  drawer: {
    width: 230,
    color: grey900
  }
});

export default themeDefault;
