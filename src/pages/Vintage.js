import React from "react";

import c from "./styles/project.module.css";

export default function Vintage() {
  return (
    <section className={c.project_details}>
      <h1>Vintage: Your Destination for Tech Treasures and Innovations!</h1>

      <div className={c.read_time}>2 minute read </div>

      <p>
        Welcome to Vintage, an extraordinary online store where everyday tech
        products and mesmerizing innovations converge. With a strong focus on
        performance and seamless user experience, Vintage brings you a carefully
        curated collection of cutting-edge technology, wrapped in an elegant
        design.
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
            <li>TypeScript</li>
            <li>Node Js</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3>Live</h3>
          <a
            href="https://github.com/JonasKhoza/Vintage.git"
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
            src={`${process.env.PUBLIC_URL}/images/projects/Screenshot 2024-02-17 104322.png`}
            alt="Project"
            className={c.project_img}
          />
        </p>

        <h2>Project Purpose and Goal</h2>
        <p>
          Designed the architecture from frontend to backend to create a website
          that combines the best of modern web development to deliver a
          lightning-fast website. The main focus here was speed and security. To
          add a bit of sophistication, I added features like product reviewing,
          product search, database indexing, order tracking, and all other
          e-commerce features, including authentication and authorization making
          use of cookies, and a built-in admin panel
          <span>
            to offer the best user experience of modern e-commerce website.
          </span>
        </p>
        <h2>Web Stack and Explanation</h2>
        <p>
          Built the project using a blend of React because of its powerful
          server-side rendering and dynamic routing and it's ability to power
          modern web development to deliver a lightning-fast website. The use of{" "}
          <span>TypeScript</span> ensures robust type-checking, enabling a more
          reliable and maintainable codebase. The backend is powered by{" "}
          <span>Express with TypeScript</span> to power the REST API.
          Authentication was built using{" "}
          <span>JWT and express-session and connect-mongodb-express</span> was
          used to handle cart functionalities and the use of{" "}
          <span>cookies</span>.
        </p>
        <p>
          For the databse I used <span>MongoDB.</span> I generated the{" "}
          <span>MongoDB schema using Mongoose.</span>
        </p>
        <p>
          To ensure code stability and site performance, I implemented
          TypeScript type-checking, React performance optimization with lazy
          loading, react hooks, a well thought database schema.
        </p>
        <h2>Problems and Thought Process</h2>
        <p>
          While building Vintage, I paid special attention to the design of
          Mongoose schemas, ensuring a solid foundation for the backend.
          <span>However, challenges </span>arose when it came to handling user
          addresses.{" "}
          <span>
            I happen to have separated the User schema from the Address schema
            and leaving no link at all on User schema but providing one on the
            Address schema.
          </span>{" "}
          In retrospect, incorporating a default address within the User schema
          could have simplified the process, eliminating the need for separate
          address mappings. Nonetheless, I made efficient use of separate
          queries to retrieve addresses when necessary.
        </p>
        <h2>Lessons Learned & Future Work</h2>
        <p>
          In addition, tackling the frontend-server connection proved to be a
          learning experience. From initially using CORS with specific options
          to enable cross-origin requests, upon CORS not working, I refined the
          solution to allow the frontend application origin, support
          credentials, specify allowed HTTP methods, and define allowed
          headers—fostering seamless communication between the React frontend
          and the server.
          <span>
            The truth of software development is there's never a one way to kill
            a rat and this is the most beautiful part of it.
          </span>
          <span className={c.challenge_faced}>
            <span>
              <span className={c.problem}>The problem.</span>
              <img
                src={`${process.env.PUBLIC_URL}/images/code/Screenshot 2024-01-22 100624.png`}
                alt="cors code problem"
              />
            </span>
            <span>
              <span className={c.solution}>The solution.</span>
              <img
                src={`${process.env.PUBLIC_URL}/images/code/Screenshot 2024-02-17 100148.png`}
                alt="cors code solution"
              />
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
