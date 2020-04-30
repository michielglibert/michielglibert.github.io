// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org
import React from "react";

import path from "path";
export default {
	Document: ({ Html, Head, Body, children }) => (
		<Html lang="be-nl">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Michiel Glibert</title>
			</Head>
			<Body>{children}</Body>
		</Html>
	),
	extractCssChunks: true,
	minLoadTime: 200,
	siteRoot: "https://michiel.me/",
	maxThreads: 1, // Remove this when you start doing any static generation
	plugins: [
		[
			"react-static-plugin-favicons",
			{ inputFile: path.resolve(__dirname + "/favicon", "favicon.png") },
		],
	],
	inlineCss: true,
};
