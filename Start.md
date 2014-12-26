1 Type System and Grammar
=======================

1.1 Values and Types
----------

- Anything in javascript that hold some piece of information is called values.

- There are six basic types of values in JavaScript:
Numbers, Strings, Booleans, Objects, Functions, and Undefined values.

- Use typeof to find the type of value.

> Example
> 
> typeof(1)               //"number"
>
> typeof("a")             //"string"
>
> typeof(true)            //"boolean"
>
> typeof({})              //"object"
>
> typeof(function(){})    //"function"
>
> typeof(undefined)       //"undefined"
>
> Fun facts:
>
> typeof(NaN)
>
> typeof(null)
>
> typeof(/''/)


### Numbers

- Any numeric value in javascript belongs to Number type.

> Example
> 
> var temp = 1;

?? Memory allocation ??

- Fractional numbers (float) alo belong to number type.
- Internally, Numbers are saved in 64 bit floating point format (Java's double)
- With this representation, a lot of numeric type errors are avoided.

> Example
> 
> var temp = 1.23;

- Big numbers in javascript are represented with the use to exponent.

> For example a very big number such as 2.00 * 10^21
> 
> var temp = 2.00e+21;

- There are also some special number types

  - +Infinity (what is 1/0?)
  - -Infinity (what is -1/0?)
  - NaN (Not a Number)
  
- +Infinity and -Infinity are meaningless results so they are not used in javascript for computhations

- How do I use NaN?

  > var a = isNaN(123);
  >
  > var b = isNaN(-1.23);
  >
  > var c = isNaN(5-2);
  >
  > var d = isNaN(0);
  >
  > var e = isNaN("Hello");
  >
  > var f = isNaN("2005/12/12");
  >
  > console.log(a, b, c, d, e, f);
  >
  > false, false, false, false, true, true
  
What can you do with numbers

- You can perform any arithematic operations with numbers.

> var areaOfCircle = 3.14 * 2 * 2;
>
> console.log(areaOfCircle);
>
> 12.56
  
### Strings

- Any text statement that is represented in javascript belongs to String type.

- You can define string either in sigle quotes or in double quotes. (Good code practice says you should represnt it in double quotes

- Whenever backslash ("\") is used in string, the character after it indicates special meaning.
  
  - Like "\n" represent a new line.
  - "\t" represent a tab.
  -  If two backslashes follow each
other, they will collapse together, and only one will be left in the resulting
string value.

- You cannot use substract, multiplt or divide a string. However you can use "+" which concatenates strings.

- We can calculate the number of characters in string by using ".length"

> var lengthOfString = "hello".length // This will yield result 5
>
> What should be the length of string "\thello" ??

### Booleans

- Whenever we need to evaluate two possiblities "yes" or "no"

- In javascript we have two values, true or false.

> var test = 2 > 3 // yields result false

Note: __We will discuss objects, functions later in the javascript journey__

### Undefined 

- Undefined or null denote the absence of a meaningful value. They are themselves values, but they carry no information.

Operators
---------

### Arithmetic

- Arithmetic opeators are +, -, %, /

> Examples
>
> 14 % 2 ?? // yields result 0 (it returns the remainder)
>
> 14 / 2 ?? // yields result 7 (it returns quotient)

### Unary Operator

- Operator that takes only one value to yield result is known as Unary operator.

> Example
>
> console.log(typeof "Hello"); // yields result "string" 
>
> console.log(typeof 123); // yipelds result "number"

### Comparisions

- The keywords that are used for comparision in js are >, <, !=, !==, ==, === 

> Example
>
> 2 > 3; // yields result __false__ (compare two values, a > b -> it calculate if a is greater than b or not)
>
> 2 < 3; // yields result __true__ (compare two values, a < b -> it calculate if a is less than b or not)

- The way strings are ordered is more or less alphabetic: uppercase letters 
are always “less” than lowercase ones, so "Z" < "a" is true, and nonalphabetic
characters (!, -, and so on) are also included in the ordering.
The actual comparison is based on the Unicode standard. In javascript comparision is done from left to right.

> Example
>
> "Adam" < "Zuke" // yields result __true__ 

- Other similar operators are >= (greater than or equal to), <= (less than
or equal to), == (equal to), and != (not equal to).

> Example
> 
> 2 != 3 // yields result __true__
>
> 3 >= 3 // yields result __true__

- When we talk about difference between "==" and "===" (or likewise for !==). Along with the value comparision it checks for type comparision as well

> Example
> 
> 2 == "2" // yields result __true__ as expected (here operator checks for just value)
>
> 2 === "2" // yields result __false__ (as the value comes to be same, however type differes 2 -> Number, "2" -> String

### Logical operators

- JavaScript supports three logical operators: and, or, and not.

- And is reprensented as __&&__, Or is represented as __||__ and not is reprensed as __!__

> Example
>
> true && false // yields __false__ (as AND operator needs both values/expresions to be true
>
> true || false // yields __true__ (as OR operator needs any of the values/expresion to be true
>
> !true // yields __false__ (as NOT operator reverts the state of expression)

- There is another type of operator which is known as ternary operator, as it operates over 3 values.

> Example
> 
> (true ? 1 : 2) // yields result as __1__ 

As in the above example the booleab variable is true, so it accepts the value that is written very next to __?__,
you can read it as 

> expression ? if_expression_is_true_I_Win : if_expression_is_false_I_win

### Operators in order of their precedence:
1. . \[] \()						(Refinement and invocation)
2. delete new typeof + - !		(Unary operators)
3.  */ %						(Multiplication, division, modulo)
4. +-							(Addition/concatenation, subtraction)
5. >= <= > <					(Inequality)
6. === !==						(Equality)
7. &&							(Logical and)
8. ||							(Logical or)
9. ?:							(Ternary)

### Native Constructor Functions:
- Number()
- String()
- Boolean()
- Object()
- Array()
- Function()
- Regexp()
- Date()
- Error()

### Built In JavaScript Object:
> Math
>
>  MathConstructor {E: 2.718281828459045, LN10: 2.302585092994046, LN2: 0.6931471805599453, LOG2E:        1.4426950408889634, LOG10E: 0.4342944819032518…}

### Type coercion:
-	== vs ===
-	!= vs !==
- undefined and NaN are not constants and can be changed.
- When comparing to any of the following values, always use the === or !== operators, which do not do type coercion:
    0 '' undefined null false true


Fun Facts
---------

- What will happen if you try to compare the below written statements

> NaN == NaN (this will return __false__, this is the only javascript value which is not equal to itself)
>
> undefined == null (this will return __true__)

- In javascript 1 always holds a state of __true__ and 0 hold the __false__ boolean state.

> Example
>
> 0 == false // yields result as __true__
>
> 1 == true // yields result as __true__

- Automatic type conversion: When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it wants, using a set of rules that
often aren’t what you want or expect. This is called type coercion.

> Example
> (8 * null) //yields result → 0
>
> ("5" - 1) // yields result → 4 (as string operator doesnt understand "-", javascript evaluates string as number)
>
> ("5" + 1) // yields result → 51 (javascript converts number into string, as soon as it sees any value is string)
>
> (" five " * 2) // yields result → NaN (as there is no method defined in javascript that can multiply a string with number)

1.2 Grammer
-----------

### Name:
![alt text](https://github.com/AdityaSethi/JavascriptWorld/blob/86786ebc0c65067cd5fd569fda629c70b1f5cde1/images/1%20-%20name.png)


### Number (integer, fraction, exponent):

![alt text] (https://github.com/AdityaSethi/JavascriptWorld/blob/86786ebc0c65067cd5fd569fda629c70b1f5cde1/images/2%20-%20number.png)

![alt text] (https://github.com/AdityaSethi/JavascriptWorld/blob/86786ebc0c65067cd5fd569fda629c70b1f5cde1/images/3%20-%20number.png)










