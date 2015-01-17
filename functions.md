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

## Immediately invoked function expression (IIFE):

	(function () { return 'I called myself'; })()

- It can run only once. It's can't be called again.
- Provides name scoping.
- Prevents global namescope pollution.
- First step towards magic of function scope.

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
			
- Even with function declaration, function names acts as variables holding the piece of code defined in it.
	 
		function test() { console.log('testing'); }
		test();
		test = 1;
		test();	// number is not a function
		console.log(test);	// 1
	


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

- Think of Closure as returning a handle to a piece of computation, frozen for later use.

...


Higher-Order Functions
======================

- A large program is a costly program.
- Large size brings in complexity and confuses programmers and invites bugs that are hard to find.

		var total = 0, count = 1; while (count <= 10) {
		total += count;
		count += 1; }
		console.log(total);
		
		OR
		
		console.log(sum(range(1, 10)));
	
	
- sum and range are expressing simpler concepts than the program as a whole, they are easier to get right.
- This is called abstraction.

## Abstraction:

- Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.
- As an analogy, compare these two recipes for pea soup:

		Put 1 cup of dried peas per person into a container. Add water until the peas are well covered.
		
		Leave the peas in water for at least 12 hours.
		
		Take the peas out of the water and put them in a cooking pan.
		
		Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours.
		
		Take half an onion per person. Cut it into pieces with a knife. Add it to the peas.
		
		Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas.
		
		Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas.
		
		Cook for 10 more minutes.
	
- And the second recipe:

		Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.
		
		Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person).
		
		Chop and add vegetables and cook for 10 more minutes.

- Abstracting array traversal:

		var array = [1, 2, 3];
		for (var i = 0; i < array.length; i++) {
			var current = array[i];
			console.log(current);
		}


		function logEach(array) {
			for (var i = 0; i < array.length; i++)
				console.log(array[i]);
		}

- What if you do something other action than logging? Pass action function as parameter:

		function forEach(array , action) {
			for (var i = 0; i < array.length; i++)
			action(array[i]);
		}

		forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
		
