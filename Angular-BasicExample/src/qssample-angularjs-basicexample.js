define( [
		'jquery',
		'./properties',
		'./initialproperties',
		'text!./lib/css/style.css',
		'text!./template.ng.html',

		// no return
		'./directives/swr-simpletable/swr-simpletable'
	],
	function ( $, properties, initProps, cssContent, template ) {

		$( "<style>" ).html( cssContent ).appendTo( "head" );

		return {

			definition: properties,
			initialProperties: initProps,
			//paint: function ( $element, layout ) {
			//
			//	$element.html( 'This is extension Angular-0-Basic-Sample' );
			//
			//},
			template: template,
			controller: ['$scope', function ( $scope ) {

				//$scope.message = $scope.layout.helloWorld;

				console.log( $scope );

			}]

		};

	} );

