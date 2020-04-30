// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org
import path from "path";
export default {
	siteRoot: "https://michiel.me/",
	maxThreads: 1, // Remove this when you start doing any static generation
	plugins: [
		[
			"react-static-plugin-favicons",
			{ inputFile: path.resolve(__dirname + "/favicon", "favicon.png") },
		],
	],
};
