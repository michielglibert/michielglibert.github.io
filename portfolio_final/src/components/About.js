import React, { Component } from "react";
import styled from "styled-components";
import laptop from "../static/lappy.jpg";
import Img from "react-image";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	max-width: 1200px;
	padding: 96px 16px;
	@media screen and (max-width: 1260px) {
		padding: 16px;
	}
`;

const ImgWrapper = styled.div`
	width: 25%;
	padding: 16px;
	@media screen and (max-width: 1260px) {
		display: none;
	}
`;

const TextWrapper = styled.div`
	width: 75%;
	padding: 16px;
	@media screen and (max-width: 1260px) {
		width: 100%;
		padding: 0;
	}
`;

const SideImage = styled(Img)`
	height: 100%;
	width: 100%;
	border-radius: 6px;
	object-fit: cover;
`;

const AboutText = styled.p`
	font-size: 15pt;
	@media screen and (max-width: 900px) {
		font-size: 13pt;
	}
`;

const OverMijzelf = styled.h1`
	@media screen and (max-width: 900px) {
		font-size: 22pt;
	}
`;

const Hi = styled.h3`
	@media screen and (max-width: 900px) {
		font-size: 18pt;
	}
`;

export class About extends Component {
	render() {
		return (
			<Wrapper id="about" data-aos="fade">
				<ImgWrapper>
					<SideImage src={laptop} />
				</ImgWrapper>
				<TextWrapper>
					<OverMijzelf>Over mijzelf</OverMijzelf>
					<Hi>Hi! </Hi>
					<AboutText>
						Ik ben Michiel, geboren in Gent en getogen in Evergem. Al van kleins
						af aan ben ik geïnspireerd door computers. Op jonge leeftijd schreef
						ik zelf mijn eigen eenvoudige programma's in Java. Dit heeft er toe
						geleid dat ik in mijn verdere leven voor de opleiding Toegepaste
						Informatica heb gekozen aan{" "}
						<a href="https://www.hogent.be/" target="_blank">
							Hogeschool Gent
						</a>
						. Tijdens deze opleiding heb ik enorm veel praktijkervaring
						opgedaan. Na 3 jaar heb ik deze opleiding met succes kunnen
						afronden. De laatste 14 weken van mijn opleiding heb ik een stage
						gevolgd bij{" "}
						<a href="https://kayzr.com/" target="_blank">
							Kayzr
						</a>{" "}
						waar ik aan de slag ging als Full Stack Developer.
					</AboutText>
					<AboutText>
						Na mijn opleiding heb ik toch gekozen om nog niet te gaan werken. Ik
						had het gevoel dat ik nog meer capaciteiten had en ik had daarnaast
						nog de motivatie om verder te studeren. Dit heeft ertoe geleid dat
						ik ben begonnen aan een schakelprogramma naar Industrieel Ingenieur:
						Informatica aan{" "}
						<a href="https://www.ugent.be/" target="_blank">
							Universiteit Gent
						</a>
						. Momenteel zit ik in mijn masterjaar en als alles goed gaat ben ik
						vanaf juli officieel afgestudeerd 🎓
					</AboutText>
					<AboutText>
						Sociaal contact is voor mij zeer belangrijk, ook tijdens mijn job.
						Zelfstandig werken kan ik zeker, maar ik heb niks liever dan een
						goede groepsfeer! Uit teamwork haal ik enorm veel motivatie en dat
						geeft mijn productiviteit een grote boost.
					</AboutText>
					<AboutText>
						Verder ben ik niet alleen een gepassioneerde IT'er, maar ook gewoon
						een aangename persoon. Hoewel ik er kan van genieten om wat vitamine
						D op te doen in mijn tuin, geniet ik er nog meer van om een stapje
						in de wereld te zetten. De kans is daarom ook groot dat je mij in
						Evergem of Gent eens tegen het lijf loopt 😎
					</AboutText>
				</TextWrapper>
			</Wrapper>
		);
	}
}

export default About;
