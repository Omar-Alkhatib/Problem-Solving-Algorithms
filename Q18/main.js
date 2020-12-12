console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
	// YOUR CODE HERE
	let factioral = 1;
	for (i = 0; i < n; i++) {
		factioral = factorial * (n - i);
	}
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/
