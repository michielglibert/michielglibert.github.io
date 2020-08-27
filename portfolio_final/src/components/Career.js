import React, { Component } from "react";
import styled from "styled-components";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";

const Wrapper = styled.div`
	background-color: #f4f4f4;
`;

const Timeline = styled(VerticalTimeline)`
	margin: 0 auto;
	padding: 96px 0;
	max-width: 960px;
	@media screen and (max-width: 1260px) {
		padding: 32px 0;
	}
`;

const Icon = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h3`
	@media screen and (max-width: 900px) {
		font-size: 12pt;
	}
`;

const Subtitle = styled.h4`
	@media screen and (max-width: 900px) {
		font-size: 10pt;
	}
`;

export class Career extends Component {
	render() {
		return (
			<Wrapper id="career">
				<Timeline layout="1-column">
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: "#247AFD", color: "#fff" }}
						contentArrowStyle={{ borderRight: "7px solid  #247AFD" }}
						date="2020 - ..."
						iconStyle={{ background: "#247AFD", color: "#fff" }}
						icon={
							<Icon>
								<i className="fas fa-briefcase" />
							</Icon>
						}
					>
						<Title className="vertical-timeline-element-title">
							WeGroup
						</Title>
						<Subtitle className="vertical-timeline-element-subtitle">
							Front-End Engineer
						</Subtitle>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2019 - 2020"
						iconStyle={{ background: "#FFAB0F", color: "#fff" }}
						icon={
							<Icon>
								<i className="fas fa-graduation-cap"></i>
							</Icon>
						}
					>
						<Title className="vertical-timeline-element-title">
							Master Industrieel Ingenieur: Informatica
						</Title>
						<Subtitle className="vertical-timeline-element-subtitle">
							Universiteit Gent
						</Subtitle>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2018 - 2019"
						iconStyle={{ background: "#FFAB0F", color: "#fff" }}
						icon={
							<Icon>
								<i className="fas fa-graduation-cap" />
							</Icon>
						}
					>
						<Title className="vertical-timeline-element-title">
							Schakelprogramma Industrieel Ingenieur: Informatica
						</Title>
						<Subtitle className="vertical-timeline-element-subtitle">
							Universiteit Gent
						</Subtitle>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="februari 2018 - mei 2018"
						iconStyle={{ background: "#247AFD", color: "#fff" }}
						icon={
							<Icon>
								<i className="fas fa-briefcase"></i>
							</Icon>
						}
					>
						<Title className="vertical-timeline-element-title">
							Full Stack Developer
						</Title>
						<Subtitle className="vertical-timeline-element-subtitle">
							Kayzr
						</Subtitle>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						date="2015 - 2018"
						iconStyle={{ background: "#FFAB0F", color: "#fff" }}
						icon={
							<Icon>
								<i className="fas fa-graduation-cap"></i>
							</Icon>
						}
					>
						<Title className="vertical-timeline-element-title">
							Professionele Bachelor in de Toegepaste Informatica
						</Title>
						<Subtitle className="vertical-timeline-element-subtitle">
							Hogeschool Gent
						</Subtitle>
						<p>Web en Mobile Apps</p>
					</VerticalTimelineElement>
				</Timeline>
			</Wrapper>
		);
	}
}

export default Career;
