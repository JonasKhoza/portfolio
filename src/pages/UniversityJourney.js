import React from "react";

import c from "./styles/university_journey.module.css";

export default function UniversityJourney() {
  return (
    <section className={c.uni_journey_cont}>
      <h1>Full-Stack Web Developer and Aspiring "Data Scientist"</h1>
      <div className={c.joined_on}>
        Joined the University of South Africa in 2023
      </div>

      <div>
        <p>
          This page provides a comprehensive summary of the modules/tech
          knowledge I have acquired so far during my studies at the{" "}
          <span>University of South Africa.</span> As a software/full-stack
          developer with ambitions to become a data scientist, I have acquired a
          diverse set of skills and knowledge in various areas of computer
          science. This summary showcases my introductory knowledge in the
          <span>
            Python and C++ programming languages, computer systems, business
            information systems, visual programming, human-computer interaction,
            computer networks, and statistics.
          </span>{" "}
          The course involves also Business and Accounting modules of which I
          did not include here to put the focus on tech. It serves as a
          testament to my dedication and commitment to continuous learning in
          the field. I am currently seeking internship opportunities as a
          software developer/full-stack developer to further enhance my skills
          and gain practical experience.
        </p>
      </div>
      <div className={c.imgs_cont}>
        <div>
          <h3>Built a dictionary with C++ for practice.</h3>
          <img
            src={`${process.env.PUBLIC_URL}/images/code/c++.png`}
            alt="C++ code"
          />
        </div>
        <div>
          <h3>Built an encryption using Python as practice.</h3>
          <img
            src={`${process.env.PUBLIC_URL}/images/code/python.png`}
            alt="C++ code"
          />
        </div>
      </div>
      <div>
        <h2>Introduction to Programming I - COS1511 with C++:</h2>
        <ul>
          <li>
            Fundamentals of control structures and problem-solving techniques.
          </li>
          <li> Incremental testing of programs.</li>
        </ul>
      </div>
      <div>
        <h2>Introduction to Programming II - COS1512 with C++:</h2>
        <ul>
          <li>Detailed design and implementation of algorithms as programs.</li>
          <li>
            Introduction to simple data structures with object-orientation.
          </li>
        </ul>
      </div>
      <div>
        <h2>Computer Systems: Fundamental Concepts - COS1521:</h2>
        <ul>
          <li>
            Understanding computer hardware and basic computer architecture.
          </li>
          <li>Introduction to systems and applications software.</li>
          <li>
            Brief introduction to databases and systems analysis and design.
          </li>
        </ul>
      </div>
      <div>
        <h2>Introduction to Business Information Systems - INF1505:</h2>
        <ul>
          <li>Application of IT concepts in business and society.</li>
          <li>
            Understanding different classes of business information systems.
          </li>
          <li>
            Introduction to systems development and information systems in
            business.
          </li>
        </ul>
      </div>
      <div>
        <h2>Visual Programming I - INF1511:</h2>
        <ul>
          <li>Introduction to visual programming concepts and techniques.</li>
          <li>Problem-solving and programming logic using Python.</li>
          <li>
            Design techniques of object-oriented, event-driven programming.
          </li>
        </ul>
      </div>
      <div>
        <h2>Human-Computer Interaction I - INF1520:</h2>
        <ul>
          <li>
            Overview of principles and concepts of human-computer interaction
            (HCI).
          </li>
          <li>
            Understanding user-centered computer applications and interfaces.
          </li>
          <li>Knowledge of user attributes that influence computer use.</li>
          <li>Familiarity with usability evaluation methods.</li>
        </ul>
      </div>
      <div>
        <h2>Computer Networks I - COS2626:</h2>
        <ul>
          <li>
            Understanding protocols, topologies, and hardware in modern
            networks.
          </li>
          <li>
            In-depth coverage of TCP/IP,OSI Model, Ethernet, wireless
            transmission, and security.
          </li>
          <li>
            Skills in building, maintaining, upgrading, and troubleshooting
            networks.
          </li>
        </ul>
      </div>
      <div>
        <h2>Introduction to Statistics - STA1610:</h2>
        <ul>
          <li>
            Basic statistical concepts, graphical and tabular techniques for
            data description.
          </li>
          <li>Measures of central location, dispersion, and association.</li>
          <li>
            Probability and probability distributions for statistical inference.
          </li>
          <li>
            Confidence intervals, hypothesis testing, and Chi-square testing.
          </li>
          <li>Simple linear regression and correlation.</li>
        </ul>
      </div>
    </section>
  );
}
