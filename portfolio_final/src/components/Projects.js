import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import solomon from "../static/solomon.jpg";
import surveymaster from "../static/surveymaster.jpg";
import cocare from "../static/cocare.jpg";
import Img from "react-image";
import ReactMarkdown from "react-markdown";
import emoji from "emoji-dictionary";
const emojiSupport = (text) =>
	text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	padding: 96px 16px;
	@media screen and (max-width: 1260px) {
		padding: 16px;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 8px 16px;
`;

const Title = styled.h1`
	flex-grow: 1;
	text-align: center;
`;

const IconWrapper = styled.i`
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	opacity: ${(props) => (props.disabled ? 0.4 : 1)};
	font-size: 48pt;
	padding: 0 32px;
	@media screen and (max-width: 860px) {
		padding: 0 16px;
		font-size: 24pt;
	}
`;
const ProjectWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px;
	min-height: 450px;
	@media screen and (max-width: 1200px) {
		flex-direction: column-reverse;
	}
`;

const ProjectContent = styled.div`
	width: 60%;
	padding: 16px;
	@media screen and (max-width: 1200px) {
		width: 100%;
	}
`;

const ProjectTitle = styled.h2`
	margin-top: 0;
`;

const ProjectDescription = styled.div`
	color: #333333;
`;

const ProjectImageWrapper = styled.div`
	text-align: center;
	flex-grow: 1;
	width: 50%;
	@media screen and (max-width: 1200px) {
		width: 100%;
	}
`;

const ProjectImage = styled(Img)`
	border-radius: 6px;
	max-height: 300px;
	max-width: 100%;
	margin: 16px;
	@media screen and (max-width: 1200px) {
		margin: 0 16px;
	}
`;

export class Projects extends Component {
	state = {
		projects: [
			{
				title: "Solomon Elections",
				description: `Met dit project werd een online platform ontwikkeld waarmee inwoners van de Solomoneilanden eenvoudig de plaats konden terugvinden waar zij konden stemmen.
				 Als een land dat nog volop in ontwikkeling is, was dit een grote hulp geweest voor de lokale verkiezingen van 2019.
				 Daarnaast bood het platform ook de resultaten aan van de voorgaande verkiezingen. 
				 Deze applicatie werd ontwikkeld tijdens mijn schakeljaar als opdracht voor het opleidingsonderdeel Project.
				 Hierbij hebben 4 andere groepsleden en ik deze applicatie vanaf 0 op 8 weken tijd ontwikkeld.
				 Rekeninghoudend met het feit dat dit moest gebeuren na de vele lesuren was dit een hele klus.
				 Gelukkig is doorzetten en teamwork	1 van mijn specialiteiten 😉`,
				img: solomon,
				url: "https://solomonelections.net/",
			},
			{
				title: "Survey Master",
				description: `Survey master is een klein project dat werd ontwikkeld voor het vak Webapps in het laatste jaar van mijn bachelor.
					 Het doel hiervan was om louter mijn capaciteiten met Javascript frameworks te kunnen aantonen, wat aardig gelukt was.
					 Met de applicatie kan een nieuwe account worden aangemaakt en vervolgens geantwoord worden op korte vragen.
					 Hierbij kan dan de verdeling gezien worden van wat andere gebruikers als antwoord gaven.
					 Er kunnen zelf ook vragen worden toegevoegd inclusief comments en likes 👍
				 `,
				img: surveymaster,
				url: "https://surveyymaster.herokuapp.com/",
			},
			{
				title: "CoCare",
				description: `CoCare was een platform dat werd ontwikkeld tijdens mijn bachelor voor een klant als opdracht voor het opleidingsonderdeel Project.
					 Het hoofddoel van de applicatie was om voor gescheiden ouders een handig kostenoverzicht te geven en zo discussies te vermijden.
					 Hierbij waren enkele extra functionaliteiten aanwezig zoals informatie over het kind en een kenniscentrum.
					 Deze applicatie had zowel een mobile app als een web app 💻
					`,
				img: cocare,
			},
		],
		position: 0,
		disableButtons: false,
	};

	goLeft = () => {
		if (!this.state.disableButtons) {
			this.setState({ disableButtons: true });
			if (this.state.position > 0) {
				this.setState((prevState) => {
					return { position: prevState.position - 1 };
				});
			}
			setTimeout(() => {
				this.setState({ disableButtons: false });
			}, 500);
		}
	};

	goRight = () => {
		if (!this.state.disableButtons) {
			this.setState({ disableButtons: true });
			if (this.state.position < this.state.projects.length - 1) {
				this.setState((prevState) => {
					return { position: prevState.position + 1 };
				});
			}
			setTimeout(() => {
				this.setState({ disableButtons: false });
			}, 500);
		}
	};

	render() {
		const { projects, position } = this.state;

		return (
			<Wrapper id="projects" data-aos="fade-in">
				<TitleWrapper>
					<IconWrapper
						disabled={position == 0 ? true : false}
						onClick={this.goLeft}
					>
						<i className="fas fa-chevron-left"></i>
					</IconWrapper>
					<Title>Projecten</Title>
					<IconWrapper
						disabled={position == projects.length - 1 ? true : false}
						onClick={this.goRight}
					>
						<i className="fas fa-chevron-right"></i>
					</IconWrapper>
				</TitleWrapper>
				<SwitchTransition>
					<CSSTransition key={position} timeout={300} classNames="example">
						<ProjectWrapper>
							<ProjectContent>
								<ProjectTitle>{projects[position].title}</ProjectTitle>
								<ProjectDescription>
									{projects[position].description}
								</ProjectDescription>
							</ProjectContent>
							<ProjectImageWrapper>
								<a
									{...(projects[position].url && {
										href: projects[position].url,
										target: "_blank",
									})}
								>
									<ProjectImage src={projects[position].img} />
								</a>
							</ProjectImageWrapper>
						</ProjectWrapper>
					</CSSTransition>
				</SwitchTransition>
			</Wrapper>
		);
	}
}

export default Projects;
