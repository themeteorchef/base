import { compose } from 'react-komposer';
import getTrackerLoader from './get-tracker-loader';

export default function container(composer, Component, options = {}) {
  return compose(getTrackerLoader(composer), options)(Component);
}
