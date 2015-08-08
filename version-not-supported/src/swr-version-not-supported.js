/*global define*/
define([
        'jquery',
        './properties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css'
],
function ($, props, initProps, extensionUtils, cssContent) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);

    return {

        definition: props,
        initialProperties: {},
        snapshot: { canTakeSnapshot: true },
        template: '',
        controller: ['$scope', function ($scope) {
		}]
    };

});
