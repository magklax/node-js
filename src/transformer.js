const fs = require("fs");
const { pipeline, Transform } = require("stream");
const { caesarCipher } = require("./caesar.js");

const transformer = (input, output, shift, action) => {
	const transform = new Transform();

	transform._transform = function (chunk, encoding, callback) {
		this.push(caesarCipher(chunk.toString(), shift, action));
		callback();
	};

	pipeline(
		input ? fs.createReadStream(input).setEncoding("utf8") : process.stdin,
		transform,
		output ? fs.createWriteStream(output, { flags: "a" }) : process.stdout,
		(err) => {
			if (err) {
				process.stderr.write("Transformation is failed", err);
			} else {
				process.stdout.write(
					"Transformation is successfully completed"
				);
			}
		}
	);
};

module.exports = { transformer };
