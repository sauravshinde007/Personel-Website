import { Link } from "react-router-dom";
import { Contact, StarsCanvas } from "../components";
import { styles } from '../styles';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center min-h-screen text-center px-4 pt-24">
            <img
                src="src/assets/sauravlogo.png"
                alt="My Profile"
                className="rounded-full w-60 h-60 object-cover mb-4"
            />
            <h1 className={`${styles.sectionHeadText} font-bold`}>Saurav Shinde</h1>
            <p className={`${styles.heroSubText}`}>
                I develop{" "}
                <span style={{ color: "#915eff", fontWeight: "bold" }}>
                    <Typewriter
                        words={["Games", "Web Apps", "Software", "3D Models", "Videos"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={60}
                        delaySpeed={2000}
                    />
                </span>
            </p>
            <p className={`${styles.sectionSubText} font-bold mt-5 mb-2`}>My Home on Internet</p>
            <div className="flex gap-6 justify-center text-4xl">
              <a href="https://www.linkedin.com/in/saurav-shinde007/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sauravshinde007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.youtube.com/@sauravsan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/saurav_san007/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
                <Link
                    to="/blogs"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:scale-105 transition-transform duration-200`}
                >
                    Blogs
                </Link>
                <Link
                    to="/about-me"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:scale-105 transition-transform duration-200`}
                >
                    About Me
                </Link>
                <Link
                    to="/my-work"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:scale-105 transition-transform duration-200`}
                >
                    My Work
                </Link>
                <a
                    href="https://your-resume-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:scale-105 transition-transform duration-200`}
                >
                    Resume
                </a>
            </div>
        </div>
        <div>
            <div className="relative w-full mt-16">
                <Contact />
            </div>
        </div>
        <StarsCanvas />
    </div>
  );
};

export default Home;
