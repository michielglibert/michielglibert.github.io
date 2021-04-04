import React, { Component } from 'react'
import Intro from "./Intro";
import About from "./About";
import Career from "./Career";
import Projects from "./Projects";
import Contact from "./Contact";

export class Main extends Component {
  render() {
    return (
      <>
        <Intro />
        <About />
        <Career />
        <Projects />
        <Contact />
      </>
    )
  }
}

export default Main
