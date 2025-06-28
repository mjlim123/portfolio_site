"use client"

import Typewriter from "@/components/Typewriter";
import "../styles/Hero.css";
import "../styles/Skills.css";
import "../styles/Projects.css";
import "../styles/Experience.css";
import "../styles/Contact.css";

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import HoverableImage from "@/components/HoverableImage";
import Timeline from "@/components/Timeline";

export default function Home() {

  const TEXT = ["full stack developer.", "problem solver.", "lifelong learner.", "weightlifting enjoyer.", "video game nerd.", "tarantula enthusiast.",]

  const timelineData = [
    {
      title: "Fullstack Developer",
      company: "HTD Talent",
      date: "July 2024 - Current",
      description: "Hire-Train-Deploy company where I learned Java and Spring Boot to create industry standard web applications. Also utilized React to create interactive frontends.",
    },
    {
      title: "Crew Member",
      company: "McDonald's",
      date: "June 2019 - February 2020",
      description: "Worked as part-time crew member at McDonald's after high school."
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <section className="hero-section" id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi. I'm Marcus</h1>
              <Typewriter text={TEXT} speed={50} pauseDuration={1000} />
              <br></br>
              <p>I'm a recent graduate in computer science with experience in numerous programming languages,
                particularly in web development.
                A proactive problem solver who thrives in collaborative environments.
                Eager to contribute to innovative projects and open to new opportunities.
                Let's connect and create together!</p>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/marcus-lim-2a21221a5/">
                <img className="social-icons" src="/linkedin.svg"></img>
              </a>
              <a href="https://github.com/mjlim123">
                <img className="social-icons" src="/github.svg"></img>
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <h1>Tools I've worked with</h1>
          <Carousel />
        </section>

        <section id="experience" className="timeline-section">
          <h1 className="experience-header">Experience</h1>
          <Timeline data={timelineData} />
        </section>

        <section id="projects">
          <div className="projects">
            <h1>My Projects</h1>
            <HoverableImage
              image="/watchparty.png"
              title="Watchparty"
              link="https://github.com/mjlim123/watchparty"
              description="I created a web application that allows users to watch YouTube videos with other people in a private room."
              technologies={["/java.svg", "/spring.svg", "/mysql.svg", "/react.svg", "aws.svg"]} />
            <HoverableImage
              image="/aigenda.png"
              title="Aigenda"
              link="https://github.com/mjlim123/aigenda"
              description="I collaborated with two other developers to create a calendar web application that utilizes the OpenAI api to assist the user perform calendar operations such as scheduling events, meetings, holidays, etc."
              technologies={["/java.svg", "/spring.svg", "/mysql.svg", "/react.svg"]} />
          </div>
        </section>
        <section className="contact-section" id="contact">
          <h1>Contact me</h1>
          <div className="contact-pair">
            <a href="https://www.linkedin.com/in/marcus-lim-2a21221a5/"><img src="/linkedin.svg"></img></a>
            <h3>LinkedIn</h3>
          </div>
          <div className="contact-pair">
            <a href="https://github.com/mjlim123"><img src="/github.svg"></img></a>
            <h3>Github</h3>
          </div>
          <div className="contact-pair">
            <a href="mailto:mj_lim0802@yahoo.com"><img src="/mail.svg"></img></a>
            <h3>mj_lim0802@yahoo.com</h3>
          </div>
        </section>

      </main>
    </div>
  );
}
