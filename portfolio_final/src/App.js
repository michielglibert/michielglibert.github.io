// Framework imports
import React, { Component } from "react";
import styled from "styled-components";
import Intro from "./components/Intro";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";

// Style imports
import "./app.css";
import "../node_modules/aos/dist/aos.css";
import "circular-std";

const SiteWrapper = styled.div`
	font-size: 15pt;
`;

class App extends Component {
	componentDidMount() {
		AOS.init({
			duration: 700,
			once: true,
		});
	}

	render() {
		return (
			<SiteWrapper>
				<Intro />
				<About />
				<Career />
				<Projects />
				<Contact />
			</SiteWrapper>
		);
	}
}

export default App;
