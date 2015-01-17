Functions
=========

- Function wraps a logical block of code. It is useful to structure larger programs, improve readability and reduce repetition.
- Function anatomy in JavaScript:

        function functionName(parameters) {
          //body ...
        
          //return ...	
        }
        
        functionName(parameters) //function call

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
    		
	
