# The Meteor Chef - Base (@0.9.3)
A starting point for Meteor apps.

Base is the lazy person's starter kit for Meteor. It includes some commonly used packages (biased to The Meteor Chef) and code for common functionality. This is the starter kit for all Meteor Chef recipes.

### Packages Included
- Accounts (Base) - `meteor add accounts-base`
- Accounts (Password) - `meteor add accounts-password`
- Audit Argument Checks - `meteor add audit-argument-checks`
- Bootstrap 3 - `meteor add pinglamb:bootstrap3`
- Check - `meteor add check`
- CoffeeScript - `meteor add coffeescript`
- Handlebars Server - `meteor add cmather:handlebars-server`
- Iron Router - `meteor add iron:router`
- jQuery - `meteor add jquery`
- jQuery Validation - `meteor add themeteorchef:jquery-validation`
- Sass - `meteor add particle4dev:sass`
- Underscore - `meteor add underscore`

### File Structure
Base comes with a pre-defined file structure common to all projects along with some skeleton files for getting started quickly. Here's what it looks like:

```
/root
---/.meteor
---/client
------/controllers
---------/authenticated
------------header.coffee
---------/public
------------login.coffee
------------signup.coffee
------------recover-password.coffee
------------reset-password.coffee
------/helpers
---------helpers-ui.coffee
------/includes
---------_header.html
------/layouts
---------layout-default.html
------/routes
---------filters.coffee
---------routes-global.coffee
---------routes-authenticated.coffee
---------routes-public.coffee
------/stylesheets
---------/sass
------------/globals
---------------_extends.scss
------------/modules
------------/vendor
------------/views
---------------/authenticated
---------------/public
------------------_login.scss
---------application.scss
-------/views
---------/authenticated
------------index.html
---------/public
------------login.html
------------not-found.html
------------recover-password.html
------------reset-password.html
------------signup.html
---/collections
------example.coffee
---/lib
---/packages
------ (See List Above)
---/public
---/server
------/admin
---------accounts.coffee
---------startup.coffee
------/data
---------/insert
---------/update
---------/remove
------/email
---------/send
---------/templates
------------reset-password.coffee
------/publications
```

### Language & Formatting
There are two considerations when using Base: JavaScript is written in [CoffeeScript](http://coffeescript.org) and CSS is written using [Sass](http://sass-lang.com). I prefer this setup because it allows me to move a little quicker than I do when writing in the native languages. This may not be for everybody, but I recommend giving both a shot because they make it much easier to write code.

### Functionality

###### Bootstrap (@3.2.0)
Base makes use of the [Bootstrap](http://getbootstrap.com) Front-End Framework. It may not be your bag of chips and is *definitely not required*. If you want to swap it out, you'll need to unhook the markup in each of the included template files in `/client/views` and uninstall the Bootstrap3 package by running `meteor remove pinglamb:bootstrap3` in your terminal.

In respect to UI, Base uses Bootstrap's `.navbar` element, as well as its `.container` and a few `.row`/`.col-<size>-<columns>` wrappers. You'll also find the `.btn` class and its modifiers (`.success, .warning, etc.`) in use throughout the app. All of these applications are merely presentational and can be changed (or removed) as you see fit.

###### Basic Routing
A collection of pre-defined routes and templates for common functionality (see Authenticate below). Also includes a set of common route filters for managing user access. Routes bundled include:

```
- / (Authenticated)
- /login (Public)
- /signup (Public)
- /recover-password (Public)
- /reset-password (Public)
```

###### Authentication
A complete authentication pattern complete with:

- Signup (at /signup)
- Login (at /login)
- Logout (no path, implemented as a dropdown item/click event in /client/controllers/header.coffee)
- Password Recovery (at /recover-password and /reset-password)

###### Validation
Validation via [jQuery Validation](http://jqueryvalidation.org). This applies to all of the public templates: login, signup, recover password, and reset password.

###### Automatic Admin User Creation
When developing, having a handful of user accounts to test your application with can come in handy. Base comes with an automated account generation script located in `server/admin/startup.coffee` that creates accounts based on an array of specified users. **Note: by default this creates one Admin user on server startup, so make sure to customize or remove this user so the public can't access your app**.
