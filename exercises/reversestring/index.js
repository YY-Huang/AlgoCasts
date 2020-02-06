// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

	// Method 1
	//return str.split('').reverse().join('');
    
	// Method 2
	return str.split('').reduce((reversed, char) => char + reversed);
}

module.exports = reverse;
