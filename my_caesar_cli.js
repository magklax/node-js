const { program, Option } = require("commander");
const { transformer } = require("./src/transformer");
const { validateOptions } = require("./src/validation");

program
	.option("-i, --input <file>", "input file")
	.option("-o, --output <file>", "output file")
	.option("-s, --shift <shift>", "shift")
	.addOption(
		new Option("-a, --action <action>", "action encode / decode").choices([
			"encode",
			"decode",
		])
	)
	.parse(process.argv);

const { action, shift, input, output } = program.opts();

validateOptions(input, output, shift, action);
transformer(input, output, shift, action);
