import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import propic from "../static/propic.jpg";
import { ProgressBar } from "react-bootstrap";

const Wrapper = styled.div`
	margin: 0 auto;
	padding: 16px;
	padding-bottom: 64px;
	max-width: 1000px;

	@media screen and (max-width: 1000px) {
		padding: 0;
		padding-top: 16px;
	}
`;

const TextBox = styled.div`
	display: flex;
	padding: 0 16px;
	justify-content: space-between;
	margin-bottom: 24px;
`;

const Back = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	& i {
		margin-right: 8px;
	}
`;

const Print = styled.div`
	display: flex;
	align-items: center;
	color: #1f3b4d;
	cursor: pointer;

	& i {
		margin-right: 8px;
	}

	&:hover {
		color: #2c4c61;
	}
`;

const CvWrapper = styled.div`
	-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
`;

const HeaderWrapper = styled.div`
	display: flex;
	max-width: 100%;
	background-color: #1f3b4d;
	@media screen and (max-width: 890px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const ProPic = styled.div`
	width: 20%;
	@media screen and (max-width: 890px) {
		padding-top: 16px;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	@media screen and (max-width: 890px) {
		border-radius: 5px;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	width: 50%;

	@media screen and (max-width: 890px) {
		width: 100%;
		align-items: center;
	}
`;

const Name = styled.h1`
	margin: 0;
	color: white;
`;

const Func = styled.h2`
	font-weight: 400;
	font-size: 18pt;
	margin: 8px 0 24px 0;
	color: white;
`;

const Contact = styled.div`
	display: flex;
	color: lightgrey;
	align-items: center;

	& > a {
		display: flex;
		align-items: center;
		color: lightgrey;
		text-decoration: none;
	}

	& > a > * {
		margin-right: 16px;
	}

	& > a:hover {
		color: white;
	}
`;

const Planet = styled.div`
	font-size: 18pt;
	color: white;
`;

const SmallContact = styled(Contact)`
	font-size: 12pt;
	margin: 2px;
`;

const BigIcon = styled.div`
	color: white;
	font-size: 20pt;
`;

const Links = styled.div`
	padding: 24px 16px;
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 890px) {
		width: 100%;
		align-items: center;
	}
`;

const BodyWrapper = styled.div`
	padding: 16px 48px 32px 48px;
	color: #1f3b4d;
`;

const Summary = styled.div``;

const Title = styled.h3`
	margin: 8px 0;
	border-bottom: solid black 1px;
	text-transform: uppercase;
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 890px) {
		flex-direction: column;
	}
`;

const Experience = styled.div`
	width: 70%;

	@media screen and (max-width: 890px) {
		width: 100%;
	}
`;

const Sidebar = styled.div`
	width: 25%;
	@media screen and (max-width: 890px) {
		width: 100%;
	}
`;

const SkillName = styled.div`
	font-size: 12pt;
	margin: 0px;
`;

const Skill = styled.div`
	margin: 8px 0px;
`;

const Subtitle = styled.h4`
	margin-top: 16px;
	margin-bottom: 0;
	font-size: 15pt;
	font-weight: 700;
`;

const ProgressBarStyled = styled(ProgressBar)`
	& > * {
		background-color: #1f3b4d !important;
	}
`;

const Opleiding = styled.div`
	margin: 16px 0;
	margin-bottom: 32px;
`;

const OpleidingNaam = styled.h4`
	margin: 0;
	font-size: 15pt;
	font-weight: 700;
`;

const Bedrijf = styled.p`
	margin: 0;
	font-size: 13pt;
	font-weight: 500;
`;

const Periode = styled.p`
	margin: 0;
	font-size: 10pt;
	font-weight: 400;
	color: lightgrey;
`;

const Beschrijving = styled.div`
	margin: 4px 0px;
	font-size: 12pt;
`;

const Tag = styled.div`
	font-size: 9pt;
	font-weight: 500;
	background-color: #1f3b4d;
	color: white;
	border-radius: 30px;
	display: inline-block;
	padding: 2px 6px;
	margin-right: 8px;
`;

const UsedTech = styled.div`
	margin: 0;
	margin-top: 8px;
	font-size: 12pt;
	font-weight: 700;
`;

export class Cv extends Component {
	printArea = () => {
		var printContents = document.getElementById("printableArea").innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;
	};

	render() {
		return (
			<Wrapper>
				<CvWrapper id="printableArea">
					<HeaderWrapper>
						<ProPic>
							<Image src={propic} />
						</ProPic>
						<Info>
							<Name>Michiel Glibert</Name>
							<Func>Full Stack Developer</Func>
							<Contact>
								<a href="mailto:michiel.glibert@gmail.com">
									<i className="far fa-envelope"></i>
									michiel.glibert@gmail.com
								</a>
							</Contact>
						</Info>
						<Links>
							<SmallContact>
								<a href="https://github.com/michielglibert" target="_blank">
									<BigIcon>
										<i className="fab fa-github-square"></i>
									</BigIcon>
									github.com/michielglibert
								</a>
							</SmallContact>
							<SmallContact>
								<a
									href="https://www.linkedin.com/in/michielglibert/"
									target="_blank"
								>
									<BigIcon>
										<i className="fab fa-linkedin"></i>
									</BigIcon>
									linkedin.com/in/michielglibert
								</a>
							</SmallContact>
							<SmallContact>
								<a href="https://michiel.me/" target="_blank">
									<Planet>
										<i className="fas fa-globe"></i>
									</Planet>
									michiel.me
								</a>
							</SmallContact>
						</Links>
					</HeaderWrapper>
					<BodyWrapper>
						<Summary>
							<Title>Over mijzelf</Title>
							<p>
								Als afgestudeerde student sta ik open voor nieuwe uitdagingen.
								Mijn passie voor IT heeft mij gemaakt tot de persoon die ik
								vandaag ben geworden. Ik ben iemand die zich graag focust op een
								doel en daar naar toe probeer te werken met mijn capaciteiten.
								Opgeven is immers niet één van mijn sterkste punten en daarnaast
								behaal je een doel niet altijd alleen. Ik probeer dan ook niet
								enkel te presteren voor mezelf, maar ik tracht ook een aangename
								persoon te zijn voor mijn omgeving waarbij flexibiliteit en een
								dagelijkse glimlach het verschil zeker maken.
							</p>
						</Summary>
						<ContentWrapper>
							<Sidebar>
								<Title>Skills</Title>
								<Subtitle>Frontend</Subtitle>
								<Skill>
									<SkillName>HTML/CSS/Javascript</SkillName>
									<ProgressBarStyled variant="info" now={95} />
								</Skill>
								<Skill>
									<SkillName>React</SkillName>
									<ProgressBarStyled variant="info" now={90} />
								</Skill>
								<Skill>
									<SkillName>Android/iOS</SkillName>
									<ProgressBarStyled variant="info" now={75} />
								</Skill>
								<Skill>
									<SkillName>Angular</SkillName>
									<ProgressBarStyled variant="info" now={60} />
								</Skill>

								<Subtitle>Backend</Subtitle>
								<Skill>
									<SkillName>Node.JS</SkillName>
									<ProgressBarStyled variant="info" now={95} />
								</Skill>
								<Skill>
									<SkillName>NoSQL en SQL</SkillName>
									<ProgressBarStyled variant="info" now={90} />
								</Skill>
								<Skill>
									<SkillName>.NET</SkillName>
									<ProgressBarStyled variant="info" now={85} />
								</Skill>
								<Skill>
									<SkillName>Typescript/Java/C++/C#</SkillName>
									<ProgressBarStyled variant="info" now={85} />
								</Skill>

								<Subtitle>Overige</Subtitle>
								<Skill>
									<SkillName>Docker</SkillName>
									<ProgressBarStyled variant="info" now={95} />
								</Skill>
								<Skill>
									<SkillName>Algoritmen en datastructuren</SkillName>
									<ProgressBarStyled variant="info" now={80} />
								</Skill>
								<Skill>
									<SkillName>Netwerkbeheer</SkillName>
									<ProgressBarStyled variant="info" now={70} />
								</Skill>
								<Skill>
									<SkillName>Cybersecurity</SkillName>
									<ProgressBarStyled variant="info" now={65} />
								</Skill>
								<Skill>
									<SkillName>Machine learning en AI</SkillName>
									<ProgressBarStyled variant="info" now={55} />
								</Skill>

								<br />
								<Title>Talen</Title>
								<SkillName>
									<b>Nederlands</b> (Moedertaal)
								</SkillName>
								<SkillName>
									<b>Engels</b> (Zeer goede kennis)
								</SkillName>
								<SkillName>
									<b>Frans</b> (Algemene kennis)
								</SkillName>
								<SkillName>
									<b>Duits</b> (Geringe kennis)
								</SkillName>
							</Sidebar>
							<Experience>
								<Title>Ervaring</Title>
								<Opleiding>
									<OpleidingNaam>Stage: Full Stack Developer</OpleidingNaam>
									<Bedrijf>Kayzr</Bedrijf>
									<Periode>februari 2018 - mei 2018</Periode>
									<Beschrijving>
										Tijdens mijn hogeschool opleiding was het niet alleen
										belangrijk om veel bij te leren on-campus, maar ook om veel
										bij te leren op de werkvloer. Zo deed ik mijn stage bij
										Kayzr, een E-sports platform. Daar mocht ik aan de slag als
										Full Stack Developer voor zowel de website als voor de
										mobiele applicatie.
										<UsedTech>Gebruikte technologieën</UsedTech>
										<Tag>React</Tag>
										<Tag>React Native</Tag>
										<Tag>Node.JS</Tag>
										<Tag>OrientDB</Tag>
										<Tag>HTML/CSS/Javascript</Tag>
									</Beschrijving>
								</Opleiding>
								<Title>Opleidingen</Title>
								<Opleiding>
									<OpleidingNaam>
										Master of Science in de industriële wetenschappen:
										informatica
									</OpleidingNaam>
									<Bedrijf>Universiteit Gent</Bedrijf>
									<Periode>2019-2020</Periode>
									<Beschrijving>
										Als vervolg op mijn schakelprogramma naar de industiële
										wetenschappen informatica begon ik aan mijn masterjaar in
										2019. Om dit met succes te kunnen afronden heb ik een
										masterproef geschreven over de analyse van op blockchain
										gebaseerde software ter opslag van herkomstinformatie.
									</Beschrijving>
								</Opleiding>
								<Opleiding>
									<OpleidingNaam>
										Schakelprogramma tot de industriële wetenschappen:
										informatica
									</OpleidingNaam>
									<Bedrijf>Universiteit Gent</Bedrijf>
									<Periode>2018-2019</Periode>
									<Beschrijving>
										In 2018 heb ik de keuze gemaakt om als vervolg op mijn
										hogeschool opleiding een schakelprogramma te starten aan de
										Universiteit Gent. Ik wou graag mijn kennis nog verder
										uitbreiden om zo, naast de hands-on ervaring die ik heb
										opgedaan op de hogeschool, mijn theoretische achtergrond op
										het gebied van informatica te verbeteren.
									</Beschrijving>
								</Opleiding>
								<Opleiding>
									<OpleidingNaam>
										Bachelor in de Toegepaste informatica
									</OpleidingNaam>
									<Bedrijf>Hogeschool Gent</Bedrijf>
									<Periode>2015-2018</Periode>
									<Beschrijving>
										In 2015 heb ik de keuze gemaakt om mijn carrière te starten
										als informaticus door de opleiding Toegepaste Informatica te
										volgen. Deze opleiding heeft van mijn interesse,
										informatica, mijn vakgebied gemaakt door het grote aanbood
										aan praktische opleidingsonderdelen. Om deze opleiding met
										succes af te ronden schreef ik een bachelorproef omtrent
										React 360, een framework om mobile virtual reality
										applicaties te bouwen.
									</Beschrijving>
								</Opleiding>
							</Experience>
						</ContentWrapper>
					</BodyWrapper>
				</CvWrapper>
			</Wrapper>
		);
	}
}

export default Cv;
