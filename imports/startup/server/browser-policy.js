import {BrowserPolicy} from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com');
BrowserPolicy.content.allowFontOrigin("data:");
