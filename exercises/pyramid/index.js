// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' midpoint: 0
//   pyramid(2)
//       ' # ' midpoint: 1
//       '###'
//   pyramid(3)
//       '  #  ' midpoint: 2, i = 0, j = 3
//       ' ### ' i = 1, j = 3, 4, 5
//       '#####' i = 2, j = 1, 2, 3, 4, 5

function pyramid(n) {
	const midpoint = Math.floor((2*n-1) / 2);
	for (let i = 0; i < n; i++) {
		let row = '';
		for (let j = 0; j < 2 * n - 1; j++) {
			if (midpoint - i <= j && midpoint + i >= j) {
				row += '#';
			} else {
				row += ' ';
			}
		}
		console.log(row);
	}
}

module.exports = pyramid;
