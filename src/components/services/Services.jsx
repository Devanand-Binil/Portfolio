import { useRef } from "react";
import "./services.scss";
import pdf from "../pdf/resume.pdf";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const handleRedirecttoGithUB = () => {
    window.location.href = 'https://github.com/Devanand-Binil';
  };
  const handleRedirecttoLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/devanand-binil-3932aa29b/';
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Why fit in when you were born to stand out
          <br /> & create your own path?
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b> & Expertise
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Explore My</motion.b>{" "}
            Journey
          </h1>
          <button><a href={pdf} download="Resume.pdf">Resume</a></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            Building sleek, responsive, and user-friendly websites that
            captivate and perform. Turning ideas into reality with modern
            frameworks and cutting-edge tech!
          </p>
          <button onClick={handleRedirecttoGithUB}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Advanced DSA</h2>
          <p>
            Cracking complex problems with precision! Harnessing the power of
            algorithms to deliver optimized solutions for real-world challenges.
          </p>
          <button onClick={handleRedirecttoGithUB}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>GDSC Marketing</h2>
          <p>
            Driving the vision of GDSC with innovative campaigns and outreach.
            Building a thriving tech community by connecting students, fostering
            engagement, and amplifying event impact
          </p>
          <button onClick={handleRedirecttoLinkedIn}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ethical Hacking</h2>
          <p>
            Certified in Ethical Hacking from IIT, equipped with the skills to
            secure systems and safeguard data. Passionate about uncovering
            vulnerabilities and strengthening cybersecurity.
          </p>
          <button onClick={handleRedirecttoLinkedIn}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
