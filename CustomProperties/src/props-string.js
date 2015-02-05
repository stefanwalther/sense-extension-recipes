/*global define*/
define( [], function () {
	'use strict';

	return {
		defaultString: {
			type: "string",
			ref: "props.string.defaultString",
			label: "S1) String property (with default)",
			defaultValue: "This is the default string"
		},
		expressionEmpty: {
			type: "string",
			ref: "props.string.expressionEmpty",
			expression: "",
			label: "S2) String property (expression: \"\")",
			defaultValue: "round(rand()*1000)"
		},
		expressionAlways: {
			type: "string",
			ref: "props.string.expressionAlways",
			expression: "always",
			label: "S3) String property (expression: always)",
			defaultValue: "round(rand()*1000)"
		},
		expressionOptional: {
			type: "string",
			ref: "props.string.expressionOptional",
			expression: "optional",
			label: "S4) String property (expression: optional)",
			defaultValue: '=round(rand()*1000)'
		},
		maxLength10: {
			type: "string",
			ref: "props.string.maxLength10",
			label: "S5) String property (maxlength: 10)",
			maxlength: 10,
			defaultValue: 'test'
		},
		maxLength10Optional: {
			type: "string",
			ref: "props.string.maxLength10Optional",
			expression: "optional",
			label: "S6) String property (Expr: opt., maxlength: 10)",
			maxlength: 10,
			defaultValue: 'test'
		}
	};

} );