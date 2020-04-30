import React, { Component } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Link } from "react-scroll";
import propic from "../static/propic.jpg";
import mountains from "../static/mountains.jpg";
import Img from "react-image";

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-image: url(${mountains});
	background-size: cover;
	@media screen and (max-height: 700px) {
		min-height: 700px;
	}
`;

const CenterContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 767px) {
		flex-direction: column;
		align-items: center;
	}
`;

const IntroCard = styled.div`
	display: flex;
	max-width: 550px;
	width: 90%;
	flex-grow: 1;
	max-height: 200px;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 0 10px;
	margin: 16px;
	margin-top: -112px;

	@media screen and (max-width: 500px) {
		margin-top: 0;
		padding: 8px;
		width: 90%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-height: 400px;
	}
`;

const ImgWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	max-width: 250px;
	flex-grow: 1;
	padding: 16px;
	@media screen and (max-width: 500px) {
		height: 50%;
	}
`;

const ProPic = styled(Img)`
	max-width: 100%;
	max-height: 100%;
	border-radius: 500px;
`;

const TextWrapper = styled.div`
	text-align: center;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 12px;
	@media screen and (max-width: 767px) {
		padding: 12px;
	}
	@media screen and (max-width: 500px) {
		flex-grow: 0;
	}
`;

const Title = styled.h1`
	font-size: 30pt;
	font-weight: 700;
	margin: 6px 0;
`;

const Description = styled.h3`
	font-size: 18pt;
	font-weight: 500;
	margin: 0;
`;

const Subtitle = styled.h3`
	font-size: 16pt;
	font-family: "Open Sans", sans-serif;
	color: #707070;
	margin: 0;
	letter-spacing: 2px;
`;

const ChevronWrapper = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	box-sizing: content-box;
	margin-top: 32px;
	font-size: 50pt;
	color: white;
`;

export class Intro extends Component {
	render() {
		return (
			<Wrapper>
				<Nav />
				<CenterContent>
					<IntroCard>
						<ImgWrapper>
							<ProPic src={propic} />
						</ImgWrapper>
						<TextWrapper>
							<Title>Hi!</Title>
							<Description>I'm Michiel Glibert</Description>
							<Subtitle>DEVELOPER</Subtitle>
						</TextWrapper>
					</IntroCard>
					<ChevronWrapper
						to="about"
						spy={true}
						smooth={true}
						duration={1200}
						ignoreCancelEvents={true}
					>
						<i className="fas fa-chevron-down"></i>
					</ChevronWrapper>
				</CenterContent>
			</Wrapper>
		);
	}
}

export default Intro;
