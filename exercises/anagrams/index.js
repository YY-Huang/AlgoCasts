// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createCharMap(str) {
	const charMap = {};
    
	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) { // not 0-9, a-z, A-Z
		charMap[char] = charMap[char] + 1 || 1;
	}
    
	return charMap;
}

function anagrams(stringA, stringB) {

	// Method 1
	/* const aCharMap = createCharMap(stringA);
	const bCharMap = createCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}
    
	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}
    return true; */
    
	//Method 2
    
}

module.exports = anagrams;
