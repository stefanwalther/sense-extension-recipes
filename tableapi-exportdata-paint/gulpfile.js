'use strict';
var gulp = require('gulp');
var senseGo = require('sense-go');

var userConfig = {
	"packageName": "TableAPI ExportData Paint"
};

senseGo.init( gulp, userConfig,  function (  ) {
	console.log('sense-go initialized');
});
