class Seeder {
  constructor( collection, options ) {
    if ( !collection || !options ) {
      throw new Error( 'Please supply a collection to seed and options for seeding. Usage: Seed( collectionName, options ).' );
    } else {
      this.collection = this.getCollection( collection );
      this.options    = options;

      if ( typeof this.collection !== 'undefined' ) {
        this.seed();
      } else {
        throw new Error( `Sorry, couldn't find the collection "${ collection }" to seed!` );
      }
    }
  }

  getCollection( collection ) {
    let collectionName = this.sanitizeCollectionName( collection );
    return collectionName === 'Users' ? Meteor.users : global[ collectionName ];
  }

  sanitizeCollectionName( collection ) {
    return collection[ 0 ].toUpperCase() + collection.slice( 1 );
  }

  seed() {
    let options = this.options,
        data    = options.data,
        model   = options.model;

    if ( data && !model ) { this.sow( data );  }
    if ( model && !data ) { this.sow( model ); }

    if ( options.data && options.model ) {
      throw new Error( `Please choose to seed from either a data collection or a model. Cannot do both!` );
    }
  }

  sow( data ) {
    let isDataArray        = data instanceof Array,
        loopLength         = isDataArray ? data.length : this.options.min,
        hasData            = this.checkForExistingData(),
        collectionName     = this.collection._name,
        isUsers            = collectionName === 'users',
        environmentAllowed = this.environmentAllowed();

    if ( !hasData && environmentAllowed ) {
      for ( let i = 0; i < loopLength; i++ ) {
        let value = isDataArray ? data[ i ] : data( i );

        if ( isUsers ) {
          this.createUser( value );
        } else {
          this.collection.insert( value );
        }
      }
    }
  }

  checkForExistingData() {
    let existingCount = this.collection.find().count();
    return this.options.min ? existingCount >= this.options.min : existingCount > 0;
  }

  environmentAllowed() {
    let environments = this.options.environments;

    if ( environments ) {
      return environments.indexOf( process.env.NODE_ENV ) > -1;
    } else {
      return true;
    }
  }

  createUser( user ) {
    let isExistingUser = Meteor.users.findOne( { 'emails.address': user.email } );
    if ( !isExistingUser ) {
      let userId = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: user.profile || {}
      });

      if ( user.roles && Roles !== 'undefined' ) {
        Roles.addUsersToRoles( userId, user.roles );
      }
    }
  }
}

export function Seed( collection, options ) {
  return new Seeder( collection, options );
}
