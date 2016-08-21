'use strict';
var gulp = require('gulp');

/*
sense-go is quite heavy if you install it, best practice would be to install it globally, then you
can remove the local package installation: `npm uninstall sense-go --save-dev`
 */
var senseGo = require('sense-go');

var userConfig = {
	"packageName": "property-fields"
};

/*
If you want to use the more "advanced" feature of sense-go, use a separate configuration file, which is loaded here;
comment the lines above and uncomment the lines below
var userConfig = senseGo.loadYml( path.join( __dirname, 'sense-go.yml' ) );
*/

senseGo.init( gulp, userConfig,  function (  ) {

});
