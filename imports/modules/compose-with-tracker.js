import { Tracker } from 'meteor/tracker';
import { compose } from 'react-komposer';
import React from 'react';
import Loading from '../ui/components/Loading';
import Error from '../ui/components/Error';

const getTrackerLoader = reactiveMapper => (
  (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() =>
      Tracker.autorun(() => {
        trackerCleanup = reactiveMapper(props, onData, env);
      }),
    );

    return () => {
      if (typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  }
);

const composeWithTracker = (data, pure = true) => {
  const composeOptions = {
    pure,
    loadingHandler: () => <Loading />,
    errorHandler: error => <Error error={error} />,
  };

  return compose(getTrackerLoader(data), composeOptions);
};

export default composeWithTracker;
