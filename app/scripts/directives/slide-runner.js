'use strict';

/**
 * @ngdoc directive
 * @name trainingAppApp.directive:slideRunner
 * @description
 * # slideRunner
	 {
		type: 'slide' | 'question' | 'answer' | 'executable-code',
		content: 'html' | 'javascript'
	}
 */
angular.module('trainingApp')
  .directive('slideRunner', function () {
    return {
      templateUrl: 'views/slide-runner.html',
      restrict: 'E',
      scope: {
      	slides: "="
      },
      link: function postLink(scope, element, attrs) {
      	scope.currentSlide = 0;
      	scope.slide = scope.slides[scope.currentSlide];
      	scope.nextSlide = nextSlide;
      	scope.prevSlide = prevSlide;

      	function nextSlide() {
      		if(scope.currentSlide < scope.slides.length - 1){
      			scope.currentSlide = scope.currentSlide + 1;	
      		}
      	}

      	function prevSlide() {
      		if(scope.currentSlide > 0){
      			scope.currentSlide = scope.currentSlide - 1;	
      		}
      	}

      }
    };
  });
