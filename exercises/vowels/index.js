// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

	// Method 1
	/* let count = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (vowels.includes(char)) {
			count++;
		}
	}
    return count; */
    
	// Method 2
	const matches = str.match(/[aeiou]/gi); // returns null if no matches found
	return matches ? matches.lengths : 0;
}

module.exports = vowels;
