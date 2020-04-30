import React, { Component } from "react";
import styled from "styled-components";

const BackgroundColor = styled.div`
	background-color: #f4f4f4;
`;

const Wrapper = styled.div`
	text-align: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 96px 16px 32px 16px;
	@media screen and (max-width: 1260px) {
		padding: 16px;
	}
`;

const CardWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

const Card = styled.a`
	flex-grow: 1;
	max-width: 300px;
	width: 100%;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
	border-radius: 6px;
	box-shadow: 0 0 10;
	padding: 32px;
	margin: 32px;
	background-color: ${(props) => (props.color ? props.color : "white")};
	@media screen and (max-width: 1200px) {
		margin: 16px;
	}
	@media screen and (max-width: 900px) {
		max-width: 250px;
		height: 220px;
		margin: 12px;
		padding: 16px;
	}
	@media screen and (max-width: 600px) {
		margin: 16px 48px;
	}

	transition: opacity 0.25s;

	&:hover {
		opacity: 0.8;
	}
`;

const CardTitle = styled.h1`
	margin-bottom: 0;
	font-weight: 500;
	color: ${(props) => (props.color ? props.color : "black")};
	@media screen and (max-width: 900px) {
		font-size: 22pt;
	}
`;

const Icon = styled.i`
	font-size: 100pt;
	color: ${(props) => (props.color ? props.color : "black")};

	@media screen and (max-width: 900px) {
		font-size: 80pt;
	}
`;

const Footer = styled.footer`
	margin-top: 64px;
	font-size: 11pt;
`;

export class Contact extends Component {
	render() {
		return (
			<BackgroundColor>
				<Wrapper id="contact" data-aos="fade-in">
					<h1>Contact</h1>
					<CardWrapper>
						<Card href="mailto:michiel.glibert@gmail.com">
							<Icon className="fas fa-at"></Icon>
							<CardTitle>E-Mail</CardTitle>
						</Card>
						<Card
							href="https://www.linkedin.com/in/michielglibert/"
							target="_blank"
							color="rgb(0, 119, 181)"
						>
							<Icon className="fab fa-linkedin-in" color="white"></Icon>
							<CardTitle color="white">LinkedIn</CardTitle>
						</Card>
						<Card
							href="https://github.com/michielglibert"
							target="_blank"
							color="black"
						>
							<Icon className="fab fa-github" color="white"></Icon>
							<CardTitle color="white">Github</CardTitle>
						</Card>
					</CardWrapper>
					<Footer>Made with ❤ by Michiel</Footer>
				</Wrapper>
			</BackgroundColor>
		);
	}
}

export default Contact;
