import {Bert} from 'meteor/themeteorchef:bert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

Bert.defaults.style = 'growl-top-right';

injectTapEventPlugin();
