// Open questions
//
// 1. How do files move between localhost and the server? Do we compile on the
// local machine _and then_ push those to the server to push to Amazon?
//
// 2. How do we maintain a file structure?
//
// 3. How do we do a live site preview with the currently pushed theme files?

var fs = Npm.require('fs');

AWS.config.update({
  accessKeyId: 'AKIAJA7F7BVF3HEAR5UQ',
  secretAccessKey: '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'
});

s3 = new AWS.S3();

Tester = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      users: Meteor.users.find().fetch()
    };
  },
  render() {
    return <div>
      <h3>Totally different file hurrr.</h3>
      <Nested items={ this.data.users } />
    </div>;
  }
});

Nested = React.createClass({
  render() {
    return <ul>
      {this.props.items.map( ( user, index ) => {
        return <li key={ `user-${ index }` }><a href="#">{user.emails[0].address}</a></li>;
      })}
    </ul>;
  }
});

let upload = ( options ) => {
  let markup       = _renderComponentToHTML( options.component ),
      randomKey    = Random.hexString( 10 ),
      fileLocation = _createTempFile( markup, `tmpcomponent_${ randomKey }.html` ),
      fileStream   = _readFileAsStream( fileLocation );

  _uploadToS3( fileStream, options.fileName, fileLocation );
};

let _renderComponentToHTML = ( component ) => {
  return React.renderToStaticMarkup( React.createElement( component ) );
};

let _createTempFile = ( data, fileName ) => {
  let location = `/tmp/${ fileName }`;
  fs.writeFileSync( location, data );
  return location;
};

let _readFileAsStream = ( file ) => {
  return fs.createReadStream( file );
};

let _uploadToS3 = ( stream, fileName, location ) => {
  s3.upload({
    Bucket: 'tmc-next',
    Key: fileName,
    Body: stream,
    ContentType: 'text/html'
  }, {}, function(error, data) {
    if ( error ) {
      console.log( error );
    } else {
      _deleteTempFile( location );
    }
  });
};

let _deleteTempFile = ( location ) => {
  return fs.unlinkSync( location );
};

// blahada

upload( { component: Tester, fileName: 'nested/index.html' } );
