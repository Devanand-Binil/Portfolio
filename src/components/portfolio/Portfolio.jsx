import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Alumini Portal",
    img: "/aluminiportal.jpg",
    desc: "The Alumni Portal is a web-based platform developed using PHP and MySQL, designed to connect alumni with their alma mater. It allows alumni to create profiles, access event updates, participate in discussions, and network with peers. The portal leverages PHP for server-side scripting and MySQL for managing user data, profiles, and event registrations. Additional features include secure authentication, messaging systems,event boards and admin controls, all ensuring a seamless and engaging experience for the alumni community",
  },
  {
    id: 2,
    title: "Real Time Chat App",
    img: "https://www.codester.com/static/uploads/items/000/040/40732/preview/001.jpg",
    desc: "The Real-Time Chat App is a dynamic communication platform built using PHP, enabling users to engage in live conversations. It utilizes PHP for server-side processing and real-time messaging, with MySQL managing user data and chat history. The app features instant message delivery, user authentication, and a responsive interface, ensuring a smooth and interactive chat experience. The real-time functionality is achieved using technologies like AJAX or WebSockets, allowing users to send and receive messages without refreshing the page.",
  },
  {
    id: 3,
    title: "Encrypted URL Shortner",
    img: "https://miro.medium.com/v2/resize:fit:777/1*YZyXpxt5axuT7XZogyugJQ.jpeg",
    desc: "The Encrypted URL Shortener is a secure platform built using Flask and Python, designed to shorten URLs with an added layer of security. It utilizes 256-bit encryption with Bcrypt to ensure that user data and links are safely stored. The app features a user dashboard for managing shortened URLs, along with an analytics page that provides detailed insights into the usage and performance of each link. Additionally, it includes a secure authentication system, allowing users to register and log in to access their personalized data and links, ensuring privacy and data protection",
  },
  {
    id: 4,
    title: "Data Analysis System",
    img: "https://www.pngplay.com/wp-content/uploads/6/Analysis-PNG.png",
    desc: "The Data Analysis System, developed using Python and MySQL for database connectivity, efficiently processes large CSV datasets by parsing and storing them in a relational database. The system supports automated database entries, backup management, and real-time data processing. Key features include a custom code execution environment, data visualization with libraries like Matplotlib and Seaborn, and export functionality to multiple formats (CSV, Excel).",
  },
];

const Single = ({ item }) => {
  const handleRedirecttoGithUB = () => {
    window.location.href = "https://github.com/Devanand-Binil";
  };
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleRedirecttoGithUB}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
