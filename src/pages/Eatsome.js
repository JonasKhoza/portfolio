import React from "react";
import c from "./styles/project.module.css";

export default function Eatsome() {
  return (
    <section className={c.project_details}>
      <h1>EatSome: Discover and Share Your Favorite Restaurants!</h1>

      <div className={c.read_time}>1.5 minute read </div>

      <p>
        EatSome is a dynamic website where food enthusiasts come together to
        explore and recommend their top restaurant picks. Get ready to embark on
        a culinary adventure as you browse through a diverse collection of
        restaurants and share your personal favorites with the community. **The
        goal was to make it easy for users to discover and share restaurants and
        eats around Harties.**
      </p>

      <div className={c.project_resources}>
        <div>
          <h3>Type</h3>
          <p>Personal project</p>
        </div>
        <div>
          <h3>Tech</h3>
          <ul>
            <li>TypeScript</li>
            <li>Node Js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3>Live</h3>
          <a
            href="https://github.com/JonasKhoza/EatSome-website"
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
            src={`${process.env.PUBLIC_URL}/images/projects/Screenshot 2022-10-15 144635.png`}
            alt="Project"
            className={c.project_img}
          />
        </p>

        <h2>Project Purpose and Goal</h2>
        <p>
          EatSome is a dynamic website for food enthusiasts to come together to
          explore and recommend their top restaurant picks.
          <span>
            The goal was to create a dynamic website that perform CRUD
            operations with ease and handle user generated content
          </span>
          through a built it form.
        </p>
        <p>
          It is powered with a secure authentication built with strong tech, you
          can create an account and start connecting with fellow foodies in no
          time. Your preferences and recommendations are stored in a powerful
          database , ensuring a seamless and reliable experience.
        </p>
        <h2>Web Stack and Explanation</h2>
        <p>
          I chose to use <span>Vanilla Javascript</span> to power the frontend
          site because at that time it was the only tech stack I was comfortable
          with, plus built well, Vanilla js can really do good for your site.
        </p>
        <p>
          I chose to build the server using{" "}
          <span>
            Express.js as the backend framework for its simplicity, flexibility,
            and robust features.
          </span>
          Express provides a minimalist approach to building web applications
          and APIs, allowing me to create server-side logic and handle routing
          with ease. Along with <span>EJS (Embedded JavaScript) templates</span>{" "}
          offer a simple and efficient way to generate dynamic HTML content. It
          allows me to seamlessly integrate server-side logic with HTML, making
          it easier to render dynamic data and create reusable components.
        </p>
        <p>
          User authentication is powered by{" "}
          <span>express-session and connect-mongodb-session.</span>
        </p>
        <p>
          I opted for{" "}
          <span>
            MongoDB as the database solution because of its flexibility,
            scalability, and ease of use.
          </span>{" "}
          MongoDB's document-based structure aligns well with JavaScript and
          allows for seamless integration with the Express framework. With
          MongoDB, I can store and retrieve data in a JSON-like format, making
          it convenient for handling complex data structures.
        </p>
        <p>
          With such in mind I had strong tools to build the website to fit it's
          intended purpose
        </p>

        <h2>Problems and Thought Process</h2>
        <p>
          Not many are intrigued by the idea of turning their eyes to Vanilla js
          and Template Engines to build a powerful website but I was intrigued
          to findout what they can really do, hence I jumped in with them.
        </p>

        <p>
          Since the website revolves around restaurant recommendations and user
          preferences,{" "}
          <span>
            designing an effective data structure was crucial. I had to consider
            how to store and organize restaurant data, user information, and
            their interactions.
          </span>{" "}
          Ensuring efficient data retrieval, scalability, and easy maintenance
          were important aspects to address.
        </p>
        <h2>Lessons Learned</h2>
        <p>
          Working on a site that involves user generated content involves many
          factors. Careful planning and prioritization are essential. Breaking
          down the project into smaller tasks, setting clear goals, and
          establishing a roadmap helped me stay organized and focused. In the
          end it was a great experience for me.
        </p>
      </div>
    </section>
  );
}
