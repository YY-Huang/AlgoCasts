// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

	// Method 1 -- messy
	/* let seen = {};

	str = str.split('');
	for (let i =0; i < str.length; i++) {
		if (!seen.hasOwnProperty(str[i])) {
			seen[str[i]] = 1;
		} else {
			seen[str[i]] += 1;
		}
	}
    
	let maxValue = Math.max(parseInt(Object.values(seen)));
    
	for (let value in seen) {
		if (seen[value] == maxValue) {
			return value;
		}
    } */
    
	// Method 2
	const seen = {};
	let max = 0;
	let maxChar = '';
    
	for (let char of str) {
		seen[char] = seen[char] + 1 || 1;
	}

	for (let item in seen) {
		if (seen[item] > max) {
			max = seen[item];
			maxChar = item;
		}
	}

	return maxChar;
}

module.exports = maxChar;
