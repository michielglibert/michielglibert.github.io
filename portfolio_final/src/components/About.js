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
`;

const markdown = `
	Hi!

	Ik ben Michiel geboren in Gent en getogen in Evergem. 
	Al van kleins af aan ben ik geïnspireerd door computers. 
	Op vroege leeftijd schreef ik zelf mijn eigen eenvoudige programma's. 
	Dit heeft er toe geleid dat ik in mijn verdere leven voor de opleiding Toegepaste Informatica heb gekozen en deze met succes heb kunnen afronden.
	Tijdens deze opleiding heb ik enorm veel praktijkervaring opgedaan.
	De laatste 14 weken heb ik een stage gevolgd bij Kayzr waar ik aan de slag ging als Full Stack Developer.
	Na mijn opleiding, heb ik toch gekozen om nog niet te gaan werken.
	Ik had het gevoel dat ik nog meer capaciteiten had en ik had daarnaast nog de motivatie om verder te studeren.
	Dit heeft ertoe geleid dat ik ben begonnen aan een schakelprogramma naar Industrieel Ingenieur: Informatica.
	Momenteel zit ik in mijn masterjaar en als alles goed gaat ben ik vanaf juni officieel afgestudeerd 🎓

	Verder ben ik niet alleen een gepassioneerde IT'er, maar ook gewoon een aangename persoon.
`;

export class About extends Component {
	render() {
		return (
			<Wrapper id="about" data-aos="fade">
				<ImgWrapper>
					<SideImage src={laptop} />
				</ImgWrapper>
				<TextWrapper>
					<h1>Over mijzelf</h1>
					<h3>Hi! </h3>
					<AboutText>
						Ik ben Michiel, geboren in Gent en getogen in Evergem. Al van kleins
						af aan ben ik geïnspireerd door computers. Op vroege leeftijd
						schreef ik zelf mijn eigen eenvoudige programma's in Java. Dit heeft
						er toe geleid dat ik in mijn verdere leven voor de opleiding
						Toegepaste Informatica heb gekozen aan{" "}
						<a href="https://www.hogent.be/" target="_blank">
							Hogeschool Gent
						</a>
						. Tijdens deze opleiding heb ik enorm veel praktijkervaring
						opgedaan. De laatste 14 weken heb ik een stage gevolgd bij{" "}
						<a href="https://kayzr.com/" target="_blank">
							Kayzr
						</a>{" "}
						waar ik aan de slag ging als Full Stack Developer. Na 3 jaar heb ik
						deze opleiding met succes kunnen afronden.
					</AboutText>
					<AboutText>
						Na mijn opleiding, heb ik toch gekozen om nog niet te gaan werken.
						Ik had het gevoel dat ik nog meer capaciteiten had en ik had
						daarnaast nog de motivatie om verder te studeren. Dit heeft ertoe
						geleid dat ik ben begonnen aan een schakelprogramma naar Industrieel
						Ingenieur: Informatica aan{" "}
						<a href="https://www.ugent.be/" target="_blank">
							Universiteit Gent
						</a>{" "}
						. Momenteel zit ik in mijn masterjaar en als alles goed gaat ben ik
						vanaf juni officieel afgestudeerd 🎓
					</AboutText>
					<AboutText>
						Sociaal contact is iets zeer belangrijk voor mij en ook tijdens het
						werken. Zelfstandig werken kan ik zeker, maar ik heb niks liever dan
						een goede groepsfeer! Uit teamwork haal ik enorm veel motivatie dat
						zeer duidelijk wordt gereflecteerd op mijn productiviteit.
					</AboutText>
					<AboutText>
						Verder ben ik niet alleen een gepassioneerde IT'er, maar ook gewoon
						een aangename persoon. Alhoewel ik er kan van genieten om wat
						vitamine D op de toen in mijn tuin. Kan ik er nog meer van genieten
						om een stapje in de wereld te zetten. De kans is daarom ook groot
						dat je mij in Evergem of Gent eens tegen het lijft loopt 😎
					</AboutText>
				</TextWrapper>
			</Wrapper>
		);
	}
}

export default About;
