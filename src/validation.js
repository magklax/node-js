const fs = require("fs");

const validateFile = (file, name) => {
	if (!fs.existsSync(file)) {
		process.stderr.write(`The ${name} file does not exist`);
		process.exit(1);
	} else if (!fs.lstatSync(file).isFile()) {
		process.stderr.write(`The ${name} file is not a file`);
		process.exit(1);
	} else {
		try {
			fs.accessSync(
				file,
				name === "input" ? fs.constants.R_OK : fs.constants.W_OK
			);
		} catch (err) {
			process.stderr.write(`The ${name} file does not accessible`);
			process.exit(1);
		}
	}
};

const validateOptions = (input, output, shift, action) => {
	if (!action || !shift) {
		process.stderr.write(
			"Failed! <shift> and <action> are required options"
		);
		process.exit(1);
	}

	if (isNaN(shift)) {
		process.stderr.write("Wrong value! <shift> must be a number!");
		process.exit(1);
	}

	if (input) {
		validateFile(input, "input");
	}

	if (output) {
		validateFile(output, "output");
	}
};

module.exports = { validateOptions };
