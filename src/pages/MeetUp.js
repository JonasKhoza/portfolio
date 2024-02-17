import React from "react";

import c from "./styles/project.module.css";

export default function MeetUp() {
  return (
    <section className={c.project_details}>
      <h1>Meetup Finder: Discover and Connect with Meetup Events Worldwide</h1>

      <div className={c.read_time}>1 minute read </div>

      <p>
        Welcome to Meetup Finder, the ultimate platform for exploring and
        joining meetup events happening around the world. Whether you have a
        brilliant idea for a meetup or are looking for exciting gatherings to
        attend, Meetup Finder is your go-to destination. Browse through a vast
        collection of events, connect with like-minded individuals, and make
        valuable connections. Join the global meetup community today!
      </p>

      <div className={c.project_resources}>
        <div>
          <h3>Type</h3>
          <p>Personal project</p>
        </div>
        <div>
          <h3>Tech</h3>
          <ul>
            <li>React</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div>
          <h3>Live</h3>
          <a
            href="https://github.com/JonasKhoza/Meetup-React-App.git"
            target="_blank"
            rel="noreferrer"
          >
            Github repo
          </a>
        </div>
      </div>

      <div className={c.project_desc_container}>
        <p>
          <img
            src={`${process.env.PUBLIC_URL}/images/projects/Screenshot 2022-10-15 144952.png`}
            alt="Project"
            className={c.project_img}
          />
        </p>

        <h2>Project Purpose and Goal</h2>
        <p>
          The purpose of this personal project, Meetup Finder, was to test and
          showcase my skills in{" "}
          <span>React, react-router-dom, and Firebase API</span>
          integration. The primary goal was to build a dynamic web application
          that allows users to discover, like and participate in meetup events
          worldwide. By utilizing the power of React, I aimed to create an
          interactive and seamless user experience. Additionally, integrating
          Firebase API enabled the storage and retrieval of data submitted
          through a form, providing a comprehensive solution for managing meetup
          event information.
        </p>

        <h2>Web Stack and Explanation</h2>
        <p>
          Meetup Finder was developed using{" "}
          <span>HTML, CSS, React, and Firebase.</span> HTML provided the
          structure of the web pages, while CSS was used to enhance the visual
          appeal and ensure a user-friendly interface. React, a powerful
          JavaScript library, allowed for the creation of reusable components,
          efficient state management, and seamless routing using the
          react-router-dom package. <span>Firebase,</span> a cloud-based
          platform, provided the backend functionality for storing and
          retrieving data through its API, ensuring a robust and scalable
          solution for managing meetup event information.
        </p>

        <h2>Problems and Thought Process</h2>
        <p>
          <span>Integrating Firebase API:</span> Incorporating Firebase API for
          data storage and retrieval required understanding its documentation
          and integrating it effectively into the React application. I had to
          design and implement the necessary logic to handle form submissions,
          securely store data, and retrieve information for displaying meetup
          events dynamically.
        </p>

        <h2>Lessons Learned</h2>
        <p>
          <span>Enhanced React Skills:</span> Building a React application
          provided an opportunity to enhance my skills in component-based
          architecture, state management, and efficient rendering. I deepened my
          understanding of React and its ecosystem, enabling me to build more
          robust and scalable web applications in the future.
        </p>
        <p>
          <span>API Integration and Backend Development:</span> Integrating
          Firebase API expanded my knowledge of backend development and working
          with cloud-based services. I learned how to leverage APIs effectively
          to handle data storage and retrieval, which opens up possibilities for
          integrating other APIs and building more complex applications.
        </p>
      </div>
    </section>
  );
}
