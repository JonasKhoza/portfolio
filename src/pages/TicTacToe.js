import React from "react";

import c from "./styles/project.module.css";

export default function TicTacToe() {
  return (
    <section className={c.project_details}>
      <h1>Tic-Tac-Toe</h1>

      <div className={c.read_time}>1 minute read </div>

      <p>
        Gaming can be sort of fun. So why not indulge yourself and a friend in
        this well developed Tic Tc Toe game. Have fun!
      </p>

      <div className={c.project_resources}>
        <div>
          <h3>Type</h3>
          <p>Personal project</p>
        </div>
        <div>
          <h3>Tech</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <h3>Live</h3>
          <a
            href="https://jonaskhoza.github.io/Tic-Tac-Toe-Game/"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>

      <div className={c.project_desc_container}>
        <p>
          <img
            src={`${process.env.PUBLIC_URL}/images/projects/Screenshot 2024-02-16 083200.png`}
            alt="Project"
            className={c.project_img}
          />
        </p>

        <h2>Project Purpose and Goal</h2>
        <p>
          The purpose of this personal project was to create a digital version
          of the classic game Tic Tac Toe that is accessible, enjoyable, and
          provides a nostalgic gaming experience.
        </p>
        <p>
          <span>The goal</span> was to develop an interactive web-based game
          that allows players to challenge each other, and test their thought
          skill.
        </p>
        <p>
          The project aimed to showcase my skills in web development and create
          a fun and engaging experience for users.
        </p>
        <h2>Web Stack and Explanation</h2>
        <p>
          The Tic Tac Toe game was developed using a combination of HTML, CSS,
          and JavaScript. HTML was used to structure the game board, buttons,
          and other elements of the user interface. CSS was utilized to add
          styling, including colors, fonts, and layout, to enhance the visual
          appeal and user experience.{" "}
          <span>
            JavaScript played a crucial role in implementing the game logic
          </span>{" "}
          , handling player moves, checking for win conditions.
        </p>
        <p>
          It also facilitated user interactions and provided real-time feedback
          during gameplay.
        </p>
        <p>
          I really hope to come back and add the computer's AI for single-player
          mode.{" "}
          <span>
            I deployed the site on Github pages for it's free hosting since it
            didn't carry much file size.
          </span>
        </p>

        <h2>Problems and Thought Process</h2>
        <p>
          <span>Game Logic:</span>
          Implementing the game logic, including validating moves, checking for
          win conditions, required careful planning and attention to detail. I
          had to think through different scenarios and edge cases to ensure the
          game behaved correctly and provided a fair and enjoyable experience
          for players. Considering that I had not played Tic Tact Toe before I
          had to read about how it's played and lean whilst developing it.
        </p>
        <p>
          <span>User Interface and Experience:</span> Designing an intuitive and
          visually appealing user interface was important to enhance the overall
          experience. I had to consider how to visually represent the game
          board, handle player input, and provide clear feedback to indicate the
          current game state. Creating an interactive and responsive layout that
          worked well across different devices and screen sizes required
          thoughtful design decisions and testing.
        </p>
        <p>
          <span>Testing and Bug Fixing:</span> Thorough testing was crucial to
          identify and fix any bugs or issues that arose during development. I
          conducted extensive testing to ensure the game functioned as intended,
          resolved any unexpected behaviors, and optimized the performance for a
          smooth and responsive gaming experience.
        </p>
        <h2>Lessons Learned & Future Work</h2>
        <p>
          Developing a game involves designing and implementing complex logic
          and algorithms. Through this project, I gained a deeper understanding
          of game mechanics, such as validating moves, checking for win
          conditions. I learned the importance of thorough planning and testing
          to ensure the game logic behaved as expected and provided a fair and
          enjoyable experience for players.{" "}
          <span>
            The whole idea was to improved my code logic, and this was a great
            test and it was well taken and well learned.
          </span>
        </p>
      </div>
    </section>
  );
}
