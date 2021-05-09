const fs = require("fs");
const { pipeline, Transform } = require("stream");
const { caesarCipher } = require("./caesar.js");

const transformer = (input, output, shift, action) => {
	const transform = new Transform();

	transform._transform = function (chunk, encoding, callback) {
		const encoded = caesarCipher(chunk.toString(), shift, action);
		output ? this.push(encoded + "\r\n") : this.push(encoded);
		callback();
	};

	pipeline(
		input ? fs.createReadStream(input).setEncoding("utf8") : process.stdin,
		transform,
		output
			? fs.createWriteStream(output, {
					flags: "a",
					encoding: "utf8",
			  })
			: process.stdout,
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
