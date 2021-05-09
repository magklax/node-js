const ENCODE = "encode";
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

const caesarCipher = (str, num, action) => {
	const len = alphabet.length;
	const shift = (action === ENCODE ? num : -1 * num) % len;

	return [...str]
		.map((char) => {
			const index = alphabet.indexOf(char.toLowerCase());

			if (index < 0) {
				return char;
			}

			let newIndex = index + shift;

			if (newIndex >= len) {
				newIndex -= len;
			} else if (newIndex < 0) {
				newIndex += len;
			} else {
				newIndex;
			}

			return char === alphabet[index]
				? alphabet[newIndex]
				: alphabet[newIndex].toUpperCase();
		})
		.join("");
};

module.exports = { caesarCipher };
