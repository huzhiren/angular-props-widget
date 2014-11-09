Properties Widget Angular directive
=============================

A directive that wraps [jdorn's json-editor](https://github.com/jdorn/json-editor).

Properties Widget  takes a JSON Schema and uses it to generate an HTML form.

For further information about supported schema properties and usage, check out the original [json-editor](https://github.com/jdorn/json-editor).

Requirements
----------------

The module doesn't include the original json-editor code, but it is included in it's bower dependencies.

Installation
------------

Install via bower

    bower install angular-props-widget --save
    
Then include the directive and json-editor in your html (you can also use the minified versions)
    
```html
<script src="bower_components/json-editor/dist/jsoneditor.js"></script>
<script src="bower_components/angular-props-widget/angular-props-widget.js"></script>
```

Usage
-----

The directive supports both synchronous and asynchronous values, all values can be either a scope object, or a promise returned from $q, $http, $timeout, $resource etc.
Please check out `demo/index.html` and `demo/app.js` for an example usage of both scenarios.

### Validation
The directive exposes an `isValid` property on the scope, which can be used to enable/disable show/hide buttons using `ng-disabled/ng-enabled` or `ng-hide/ng-show`.
```html
<button type="button" ng-disabled="!isValid">Button 1</button>
```

Building
---------

Clone the project, install bower and npm dependencies by running

    bower install && npm install

If you dont have grunt-cli installed globally run `npm install -g grunt-cli`

Then run `grunt` and look in the `dist` folder.
