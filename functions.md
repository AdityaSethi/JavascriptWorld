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
		
- Using built in forEach instead of for loop:

		function nestedForLoops(books) {
			var booksObj = {};
			for (var book = 0; book < books.length; book++) {
				var chapters = books[book].chapters;
				booksObj[books] = {};
				for (var i = 0; i < chapters.length; i++) {
					var chapter = chapters[i];
					booksObj[books][chapter] = chapter.tableOfContent;
				}
			}
			return booksObj;
		}
		
		//Using forEach loop:
		function nestedForLoops(books) {
			var booksObj = {};
			books.forEach(function(book) {
				booksObj[books] = {};
				book.chapters.forEach(function(chapter) {
					booksObj[books][chapter] = chapter.tableOfContent;
				});
			});
			return booksObj;
		}

## Higher-order functions:

- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
 
		function greaterThan(n) {
			return function(m) { return m > n; };
		}
		var greaterThan10 = greaterThan(10); console.log(greaterThan10(11)); // → true
		
		----------------------------------------------------------------------------------------

		function noisy(f) {
			return function(arg) {
				console.log("calling with", arg);
				var val = f(arg);
				console.log("called with", arg, "- got", val); return val;
			};
		}
		noisy(Boolean)(0);
		// → calling with 0
		// → called with 0 - got false
		

### Passing along arguments:
- What if there are more than one argument ?

		function noisy(f) {
			return function () {
				return f.apply(null, arguments);
			};
		}

### Filtering an array:

	function filter(array , test) {
		var passed = [];
		for (var i = 0; i < array.length; i++) {
			if (test(array[i]))
				passed.push(array[i]);
		}
		return passed; 
	}

	console.log(filter(books, function(book)
		return book.pages > 500;
	}));
	
	//Using built in array filter method
	console.log(books.filter(function(book)
		return book.pages > 500;
	}));

### Transforming with map:

	function map(array , transform) {
		var mapped = [];
		for (var i = 0; i < array.length; i++)
			mapped.push(transform(array[i]));
		return mapped;
	}

	console.log(map(books, function(book) {
		return book.name;
	}));
	
	//Using built in array map method
	console.log(books.map(function(book) {
		return book.name;
	}));

### Summarizing with reduce (folding):
	
	function reduce(array , combine , start) {
		var current = start;
		for (var i = 0; i < array.length; i++)
			current = combine(current , array[i]);
		return current;
	}

	console.log(reduce([1, 2, 3, 4], function(a, b) { return a + b; }, 0)); // → 10
	
	//Using built in array reduce method
	console.log(ancestry.reduce(function(min, cur) {
		if (cur.born < min.born)
			return cur;
		else return min;
	}));

## Composability:

- Combine these independent gears to have them tick together

		function average(array) {
			function plus(a, b) { return a + b; }
			return array.reduce(plus) / array.length;
		}
	
		function age(p) { return p.died - p.born; }
		function male(p) { return p.sex == "m"; }
		function female(p) { return p.sex == "f"; }
	
		console.log(average(ancestry.filter(male).map(age)));
		console.log(average(ancestry.filter(female).map(age)));
	
### Finding % DNA shared with an ancestor:

- We share more than 1/2^G of my genes with an ancestor, where G is number of generations between the ancestor and us. This formula comes from the idea that each generation splits the gene pool in two.

		var byName = {};
		ancestry.forEach(function(person) {
			byName[person.name] = person;
		});
	
		console.log(byName["Philibert Haverbeke"]); // → {name: "Philibert Haverbeke", ...}
	
		function reduceAncestors(person , f, defaultValue) {
			function valueFor(person) {
				if (person == null)
					return defaultValue;
				else
					return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
			}
			return valueFor(person);
		}
	
		function sharedDNA(person , fromMother , fromFather) {
			if (person.name == "Pauwels van Haverbeke")
				return 1;
			else
				return (fromMother + fromFather) / 2;
		}
	
		var ph = byName["Philibert Haverbeke"];
		console.log(reduceAncestors(ph, sharedDNA , 0) / 4); // → 0.00049 

### Finding % of known ancestors, for a given person, who lived past 70:

	function countAncestors(person , test) {
		function combine(person, fromMother, fromFather) {
			var thisOneCounts = test(person);
			return fromMother + fromFather + (thisOneCounts ? 1 : 0);
		}
		return reduceAncestors(person , combine , 0);
	}

	function longLivingPercentage(person) {
		var all = countAncestors(person , function(person) {
			return true;
		});
		var longLiving = countAncestors(person , function(person) {
			return (person.died - person.born) >= 70;
		});
		return longLiving / all;
	}
	
	console.log(longLivingPercentage(byName["Emile Haverbeke"])); // → 0.145

## Binding:

- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

		add = function(a, b, c) {
			return a + b + c;
		}
	
		var add1 = add.bind(null, 1);
		add1(2, 3);
	
		var add11 = add.bind(null, 1, 1);
		add11(2);
	
		var concat = function() {
			return this.a + this.b + this.c;
		}
	
		var obj = {a: 'a', b: 'b', c: 'c'};
	
		var concatObj = concat.bind(obj);
		concatObj();
	
		//Can't override bound object
		var otherObj = {a: '1', b: '2', c: '3'};
		concatObj.call(otherObj);
		concatObj.apply(otherObj);
 
 
## Exercises:
 
- Array flattening:
 		
		var arrays = [[1, 2, 3], [4, 5], [6]];
		// Your code here.
		// → [1, 2, 3, 4, 5, 6]

- Mother-child average age difference:

		function average(array) {
		  function plus(a, b) { return a + b; }
		  return array.reduce(plus) / array.length;
		}
		
		var byName = {};
		ancestry.forEach(function(person) {
		  byName[person.name] = person;
		});
		
		// Your code here.
		
		// → 31.2
		
- Historical life expectancy:
 
		function average(array) {
		  function plus(a, b) { return a + b; }
		  return array.reduce(plus) / array.length;
		}
		
		// Your code here.
		
		// → 16: 43.5
		//   17: 51.2
		//   18: 52.8
		//   19: 54.8
		//   20: 84.7
		//   21: 94

- every and then method:

		// Your code here.

		console.log(every([NaN, NaN, NaN], isNaN));
		// → true
		console.log(every([NaN, NaN, 4], isNaN));
		// → false
		console.log(some([NaN, 3, 4], isNaN));
		// → true
		console.log(some([2, 3, 4], isNaN));
		// → false
