const projects = [
  {
    id: 1,
    name: "Tic-Tac-Toe Game",
    description: `Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.
I built this project as part of the 100days of code challenge course from academind.com to test my skills about vanilla javascript.
    `,
    full_description:
      "Tic-tac-toe is played on a three-by-three grid by two players, who alternately place the marks X and O in one of the nine spaces in the grid.",
    image: "/images/projects/Screenshot 2022-10-15 144126.png",
    languages: {
      Html: "HTML",
      CSS: "CSS",
      JavaScript: "Javascript",
      React: "",
      Node: "",
      MongoDB: "",
    },
    LiveDemo: "",
    Githubrepo: "https://github.com/JonasKhoza/Tic-Tac-Toe-Game",
  },
  {
    id: 2,
    name: "EatSome",
    description: `EatSome is a website that allows you to browser or recommend your favorite restaurants with others, with authentication made using express-session, stored in a MongoDB database using connect-mongodb-session.
I built this project as part of 100days of code course to further improve my Express and MongoDB skills.
    `,
    full_description: ` Got a favorite restaurant? Need a favorite restaurant? EatSome is here for you.
You can browse through recommended restaureants without the need to sign up. Sign-up for free to recommend your 
favorite restaurants to others.
       `,

    image: "/images/projects/Screenshot 2022-10-15 144635.png",
    languages: {
      Html: "HTML",
      CSS: "CSS",
      JavaScript: "Javascript",
      React: "",
      Node: "Express(EJS)",
      MongoDB: "MongoDB",
    },
    LiveDemo: "",
    Githubrepo: "https://github.com/JonasKhoza/EatSome-website",
  },
  {
    id: 3,
    name: "Meetup",
    description: `Meetup is all people place, have an idea for a meetup place? Visit Meetup and browse through meetup events around the world.
The purpose of this project was to test my skills about React, react-router-dom skills and how I can utilize Firebase API to save and retrieve data submitted through a form.
      `,
    full_description: `This website was built to test my react, react router skills with Firebase. Visit the link below to see the code in my Github`,

    image: "/images/projects/Screenshot 2022-10-15 144952.png",
    languages: {
      Html: "HTML",
      CSS: "CSS",
      JavaScript: "",
      React: "React",
      Node: "",
      MongoDB: "",
      Firebase: "Firebase",
    },
    LiveDemo: "",
    Githubrepo: "https://github.com/JonasKhoza/Meetup-React-App",
  },
  {
    id: 4,
    name: "WEB",
    description: `Web Development Equipment is an online shop that sells equipment every developer needs.
With a built-in admin panel that allows you to manage products that you are offering to your customers.

The most challenging part with the project was about figuring out how to use different technologies to make it fast, scalable and secure. I had to combine JWT, express-session and connect-mongodb-session to handle both authentication and cart creation and saving.
    `,
    full_description: `Web Development Equipment is an online shop that sells equipment every developer needs with a built in admin panel which allows you to add, delete and update products.
I designed the project in relation to the design principles offered by Academind.com making very good use of both HTML and CSS.

WEB-STACK & EXPLANATION
Built the project front-end using React js because it allows developers to easily create fast user interfaces for websites and applications alike. The main concept of React.js is virtual DOM.

Built the project server-side using Express because of it's powerful server-side rendering and dynamic routing.
Made use of JWT for authentication and express-session to handle cart functionalities and connect-mongodb-session to save the carts to the MongoDB databases.

For the database I used MongoDB beacuse it makes it easy for developers to store structured or unstructured data
  
PROBLEMS AND THOUGHT PROCESS
Sending and passing user credentials from the browser to the server-side appeared to be a challange which I had to deal with since chrome added some restrictions on setting cookies to the browser.
I had to also restrict the abiity to access cookies from the browser-side as to provide extra security.
`,

    image: "/images/projects/Screenshot 2022-10-15 144447.png",
    languages: {
      Html: "HTML",
      CSS: "CSS",
      JavaScript: "Javascript",
      React: "",
      Node: "Express(EJS)",
      MongoDB: "MongoDB",
    },
    LiveDemo: "",
    Githubrepo: "",
  },
];

export default projects;
