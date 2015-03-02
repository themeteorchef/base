# The Meteor Chef - Base (@1.0.3.2)
A starting point for Meteor apps.

Base is the lazy person's starter kit for Meteor. It includes some commonly used packages (biased to The Meteor Chef) and code for common functionality. This is the starter kit for all Meteor Chef recipes.

For more detail on updates, [read the Changelog](https://github.com/themeteorchef/base/wiki/Changelog). If you're interested in contributing to Base, checkout the [Contribution wiki](https://github.com/themeteorchef/base/wiki/Contributing-to-Base) to get started.

### Packages Included
- Accounts (Base) - `meteor add accounts-base`
- Accounts (Password) - `meteor add accounts-password`
- Audit Argument Checks - `meteor add audit-argument-checks`
- Bert - `meteor add themeteorchef:bert`
- Bootstrap 3 - `meteor add twbs:bootstrap`
- Browser Policy - `meteor add browser-policy`
- Check - `meteor add check`
- Handlebars Server - `meteor add cmather:handlebars-server`
- Iron Router - `meteor add iron:router`
- jQuery - `meteor add jquery`
- jQuery Validation - `meteor add themeteorchef:jquery-validation`
- NPM - `meteor add meteorhacks:npm`
- Sass - `meteor add particle4dev:sass@0.3.0`
- Underscore - `meteor add underscore`

**Note:** Base also supports loading NPM packages using the `meteorhacks:npm` package. To load NPM packages, add name and version information to `/packages.json` and inside of your file (server only), load the package with `var package = Meteor.npmRequire('package-name');`. For more information, see the [meteorhacks:npm documentation](https://github.com/meteorhacks/npm/).

### File Structure
Base comes with a pre-defined file structure common to all projects along with some skeleton files for getting started quickly. Here's what it looks like:

```
/root
---/.meteor
---/client
------/controllers
---------/authenticated
------------header.js
---------/public
------------login.js
------------recover-password.js
------------reset-password.js
------------signup.js
------/helpers
---------helpers-ui.js
------/includes
---------_header.html
------/layouts
---------layout-default.html
------/routes
---------hooks.js
---------routes-authenticated.js
---------routes-global.js
---------routes-public.js
------/stylesheets
---------/sass
------------/globals
---------------_extends.scss
------------/views
---------------/public
------------------_login.scss
---------application.scss
-------/views
---------/authenticated
------------index.html
---------/public
------------loading.html
------------login.html
------------not-found.html
------------recover-password.html
------------reset-password.html
------------signup.html
---/collections
------example.js
------users.js
---/packages
------ (See List Above)
---/public
---/server
------/admin
---------/startup-functions
------------browser-policies.js
------------test-accounts.js
---------startup.js
------/email
---------/templates
------------reset-password.js
------/publications
---------example.js
```

### JavaScript & CSS
Prior to v2.0.0, Base was written in CoffeeScript. At the request of the community, Base was ported _back_ to native JavaScript.

CSS in Base is written using [Sass](http://sass-lang.com).

### Functionality

###### Configuration
For things like API keys and connection strings, Base supports loading a `settings.json` file (located at `/settings.json`) on startup. By default, `settings.json` includes a `public` and `private` object where you can store client only and server only values respectively.

When starting Meteor, **make sure to use the --settings flag**, passing the location of your settings.json file to Meteor, e.g. `meteor --settings settings.json`. This is required in order for `settings.json` to work properly.

To learn more about making use of `settings.json`, check out [our example in the Meteor Patterns wiki](https://github.com/themeteorchef/base/wiki/Meteor-Patterns#9-configuration).

###### Bootstrap (@3.2.1)
Base makes use of the [Bootstrap](http://getbootstrap.com) front-end Framework. It may not be your bag of chips and is *definitely not required*. If you want to swap it out, you'll need to unhook the markup in each of the included template files in `/client/views` and uninstall the `twbs:bootstrap` package by running `meteor remove twbs:bootstrap` in your terminal.

In respect to UI, Base uses Bootstrap's `.navbar` element, as well as its `.container` and a few `.row`/`.col-<size>-<columns>` wrappers. You'll also find the `.btn` class and its modifiers (`.success, .warning, etc.`) in use throughout the app. All of these implementations are merely presentational and can be changed (or removed) as you see fit.

###### Basic Routing
Base comes with a collection of pre-defined routes and templates for common functionality. Base also includes a set of common route filters for managing user access. Routes bundled include:

```
- / (Authenticated)
- /login (Public)
- /recover-password (Public)
- /reset-password (Public)
- /signup (Public)
```

A UI helper called `currentRoute` has been added to Base which allows you to add an `active` class to menu items in your navigation to reflect the user's current location.

A collection of hooks has also been added to Base to control route access based on different conditions (e.g. whether a user is logged in or not).

###### Authentication
Base includes a complete authentication pattern complete with:

- Login (at /login)
- Logout (no path, implemented as a dropdown item/click event in /client/controllers/header.js)
- Password Recovery (at /recover-password and /reset-password)
- Signup (at /signup)

###### Example Collection/Publication/Subscription
Base includes a collection called `Example`, along with a publication and subscription pattern to show moving data from the server to the client. Publications are defined in `/server/publications/example.js` and a subscription is demonstrated on the `index` route in `/client/routes/routes-authenticated.js`.

###### Validation
Base includes support for client-side validation via [jQuery Validation](http://jqueryvalidation.org). Validation is provided for all public templates: login, signup, recover password, and reset password.

###### Alerts
Base includes support for fixed bar (top and bottom) and growl-style alerts on the client via [`themeteorchef:bert`](https://atmospherejs.com/themeteorchef/bert).

###### Automatic Admin User Creation
When developing, having a handful of user accounts to test your application with can come in handy. Base comes with an automated account generation script located in `server/admin/startup.js` that creates accounts based on an array of specified users. **Note: by default this creates one Admin user on server startup, so make sure to customize or remove this user so the public can't access your app**.
