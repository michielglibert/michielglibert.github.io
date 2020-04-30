import React, { Component } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export class Loading extends Component {
	render() {
		return (
			<Wrapper>
				<ScaleLoader
					size={150}
					color={"#247AFD"}
					loading={this.props.loading}
				/>
			</Wrapper>
		);
	}
}

export default Loading;
