# The Meteor Chef - Base
A starting point for Meteor apps.

### **This project is currently under heavy development and not recommended for use.**

Base is the lazy person's starter kit for Meteor. It includes some commonly used packages (biased to The Meteor Chef) and code for common functionality. This is the starter kit for all Meteor Chef recipes.

### Packages Included
- Accounts (Base) - `meteor add accounts-base`
- Accounts (Password) - `meteor add accounts-password`
- Audit Argument Checks - `meteor add audit-argument-checks`
- Bootstrap 3 - `mrt add bootstrap-3`
- Check - `meteor add check`
- CoffeeScript - `meteor add coffeescript`
- Handlebars Server - `mrt add handlebars-server`
- Iron Router - `mrt add iron-router`
- jQuery - `meteor add jquery`
- Sass - `mrt add sass`
- Underscore - `meteor add underscore`

### File Structure
Base comes with a pre-defined file structure common to all projects along with some skeleton files for getting started quickly. Here's what it looks like:

```
/root
---/client
------/controllers
---------/public
------------login.coffee
------------signup.coffee
------------recover-password.coffee
------------reset-password.coffee
------/helpers
---------helpers-ui.coffee
------/layouts
---------layout-default.html
------/routes
---------filters.coffee
---------routes-global.coffee
---------routes-authenticated.coffee
---------routes-public.coffee
------/stylesheets
---------/globals
---------/modules
---------/vendor
---------/views
------------/public
---------------login.html
---------------recover-password.html
---------------reset-password.html
---------------signup.html
---------app.scss
------/views
---------/example
------------example.html
---/collections
------example.coffee
---/lib
---/packages
---/public
---/server
------/admin
---------startup.coffee
------/publications
---------example.coffee
------/email
---------/send
------------example.coffee
---------/templates
------------example.handlebars
------/data
---------/insert
---------/update
---------/remove
```

### Language & Formatting
There are two considerations when using Base: JavaScript is written in [CoffeeScript](http://coffeescript.org) and CSS is written using [Sass](http://sass-lang.com). I prefer this setup because it allows me to move a little quicker than I do when writing in the native languages. This may not be for everybody, but I recommend giving both a shot because they make it much easier to write code.

### Functionality

###### Basic Routing (Not Included Yet, Just Documenting)
A collection of pre-defined routes and templates for common functionality (see Authenticate below). Also includes a set of common route filters for managing user access.

###### Authentication (Not Included Yet, Just Documenting)
A complete authentication pattern complete with: signup, login, and password recovery. Also includes an automated user creation script in `/server/startup.coffee`.
