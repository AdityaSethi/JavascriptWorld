Functions
=========

- Function wraps a logical block of code. It is useful to structure larger programs, improve readability and reduce repetition.
- Function anatomy in JavaScript:

		//function declaration
        function functionName(parameters) {
          	//body ...
        
          	//return ...	
        }
        
        //function call
        functionName(parameters)

- Function returns undefined by default.

## Scope:
- scope is the set of variables, objects, and functions you have access to.
- JavaScript has function scope only.
- The scope changes inside functions.
- Only functions give rise to new scope.
- Variables defined in any block code wrapped in {}, for eg. loops or conditional blocks are not local to that block.
- Variables defined inside function body are local. Anything defined outside are global.
- parameters are local to function.
- Functions can be created inside other functions, producing nested scope/localities.

        function A() {
	          var a = 'a';
	          B();
	          function B() {
		            var b = a + 'b';
		            C();
		            function C() {
			              var c = b + 'c';
			              console.log(c);
		            }
		            //console.log(c);
	          }
	          console.log(b);
        };
        
        This is called lexical scoping.
    		
	
## Functions are first class citizens:
- Function can be used as value since it is an object in JavaScript.
- It can be assigned to variable, passed as parameter to another another function and even returned from a function.

		var add = function (a, b) {
		  	return a + b;
		}
		
		add(1, 2);

- This is called function expression.
- What is function hoisting ? function declaration vs function expression ?
- Even array of functions is possible.
- Function being an object has properties:
	- name
	- arguments
	- See add. in console

			add.call(null, 1, 2);
			add.apply(null, [1, 2]);


## Closure:
- A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain.
- The closure has three scope chains: 
	- it has access to its own scope (variables defined between its curly brackets)
	- it has access to the outer function's variables
	- and, obviously, it has access to the global variables

			var g = 'global';
			(function () {
				var a = 'a';
					return function () {
						var b = g + a + 'b';
						return b;
					}
			})()();
	
	
- Deeper closures:
	
		(function () {
			var a = 'a';
			return function () {
				var b = a + 'b';
				return function () {
					var c = b + 'c';
					return c;
				};
			};
		})()()();
