'use strict';

/**
 * @ngdoc function
 * @name trainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingApp
 */
angular.module('trainingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.slides = [
     	{
     		type: 'concept',
     		content: '<h2>Concept 1</h2>',
     		bullets: [
     			'Point 1',
     			'Point 2',
     			'Point 3'
     		],
     		note: "Additional notes here" 
      },
      {
     		type: 'concept',
     		content: '<h2>Concept 2</h2>',
        image: "images/1 - name.png",
     		note: "Note on point 11"
      },
      {
        type: 'code',
        content: "(function() { \n\
          return 'hi'; \n\
        })()",
        note: "Note on point 11"
      },
      {
     		type: 'concept',
     		content: '<h2>Concept 3</h2>',
     		bullets: [
     			'Point a',
     			'Point b',
     			'Point c'
     		],
     		note: "More notes"
      },
      {
     		type: 'concept',
     		content: '<h2>Concept 4</h2>',
     		bullets: [
     			'Point x',
     			'Point y',
     			'Point z'
     		]
      }
    ];
  });
