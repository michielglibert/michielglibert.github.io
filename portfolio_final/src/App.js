// Framework imports
import React, { Component } from "react";
import { Root, Routes } from "react-static";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AOS from "aos";
import Main from "./components/Main";
import Cv from "./components/Cv";

// Style imports
import "./app.css";
import "../node_modules/aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
			<Root>
				<SiteWrapper>
					<Switch>
						<Route path="/" exact={true} component={Main} />
						<Route path="/cv" exact={true} component={Cv} />
						<Route render={() => <Routes />} />
					</Switch>
				</SiteWrapper>
			</Root>
		);
	}
}

export default App;
