const projects = [
  {
    id: "vintage",
    role: "PERSONAL PROJECT",
    name: "Vintage: Your Destination for Tech Treasures and Innovations!",
    description: `
At first I had built WEB which is an online store for developers, but performance wise it wasn't great, and I had no  TypeScript in it, so I built this version of a website to improve speed, and performance.  The use of TypeScript ensures robust type-checking, enabling a more reliable and maintainable codebase. I tapped into React performance optimizations, including use of lazy loading. Well thought Mongoose Schemas for performance matters. I added new features, including a well improved built-in admin panel.

The most challenging part with the project was about figuring out how to use different technologies to make it fast, scalable and secure. I had to combine JWT, express-session and connect-mongodb-session to handle both authentication and cart creation and saving. And cors presented it's challenges too. View the project to learn more...
  `,

    image: "/images/projects/Screenshot 2024-02-18 113951.png",
    languages: {
      Html: "",
      CSS: "",
      JavaScript: "",
      React: "React",
      Typescript: "TypeScript",
      Node: "Node js",
      Express: "Express",
      Mongoose: "Mongoose",
      MongoDB: "MongoDB",
      Firebase: "",
    },
    LiveDemo: "",
    Githubrepo: "https://github.com/JonasKhoza/WEB-online-shop",
  },
  {
    id: "eatsome",
    name: "EatSome: Discover and Share Your Favorite Restaurants!",
    role: "PERSONAL PROJECT",
    description: `
Sometimes getting a list of different restaurants around Harties can be a pain, with all scattered in the nature of it.

EatSome is a dynamic website where food enthusiasts come together to explore and recommend their top restaurant picks.

With secure authentication powered by express-session, you can create an account and start connecting with fellow foodies in no time. Your preferences and recommendations are stored in a MongoDB database using connect-mongodb-session, ensuring a seamless and reliable experience.
  `,

    image: "/images/projects/Screenshot 2022-10-15 144635.png",
    languages: {
      Html: "",
      CSS: "",
      JavaScript: "Javascript",
      Node: "Node js",
      Express: "Express",
      MongoDB: "MongoDB",
      React: "",
      Typescript: "",
      Mongoose: "",
      Firebase: "",
    },
    LiveDemo: "",
    Githubrepo: "https://github.com/JonasKhoza/EatSome-website",
  },
  {
    id: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    role: "PERSONAL PROJECT",
    description: `
Experience the classic game of Tic Tac Toe like never before with my interactive and engaging digital version! Challenge your friends in this timeless game of strategy and wit. With a sleek and intuitive user interface. My Tic Tac Toe game provides a seamless and enjoyable gaming experience.

Immerse yourself in the battle for three-in-a-row as you strategically place your X's or O's on the grid. Plan your moves carefully, anticipate your opponent's tactics, and aim for victory!

Enjoy the convenience of playing anytime, anywhere, right from your web browser. Take a break from your daily routine and indulge in a quick game of Tic Tac Toe to sharpen your mind and have fun. So, gather your friends, embrace the nostalgia, and get ready for an exciting game of Tic Tac Toe!"
    `,

    image: "/images/projects/Screenshot 2022-10-15 144126.png",
    languages: {
      Html: "HTML",
      CSS: "CSS",
      JavaScript: "Javascript",
      Node: "",
      Express: "",
      MongoDB: "",
      React: "",
      Typescript: "",
      Mongoose: "",
      Firebase: "",
    },
    LiveDemo: "https://jonaskhoza.github.io/Tic-Tac-Toe-Game/",
    Githubrepo: "https://github.com/JonasKhoza/Tic-Tac-Toe-Game",
  },

  {
    id: "meetup",
    name: "Meetup",
    role: "PERSONAL PROJECT",
    description: `
Meetup is all people place, have an idea for a meetup place? Visit Meetup and browse through meetup events around the world.
The purpose of this project was to test my skills about React, react-router-dom skills and how I can utilize Firebase API to save and retrieve data submitted through a form.
      `,

    image: "/images/projects/Screenshot 2022-10-15 144952.png",
    languages: {
      Html: "HTML",
      CSS: "CSS",
      JavaScript: "",
      React: "React",
      Firebase: "Firebase",
      Node: "",
      Express: "",
      MongoDB: "",
      Typescript: "",
      Mongoose: "",
    },
    LiveDemo: "",
    Githubrepo: "https://github.com/JonasKhoza/Meetup-React-App",
  },
];

export default projects;
