// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let reversed = n.toString().split('').reverse().join('');
    
	// Method 1
	//return n < 0 ? parseInt(reversed) * -1 : parseInt(reversed);
    
	//Method 2
	return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
