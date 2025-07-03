import { Link } from "react-router-dom";
import { Contact, StarsCanvas } from "../components";
import { styles } from '../styles';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center min-h-screen text-center px-4 pt-24">
            {/* Animated profile photo */}
            <motion.div
                variants={fadeIn("right", "spring", 0.5, 0.75)}
                className="flex justify-center items-center mt-10 lg:mt-0 mb-4"
                >
                <motion.div
                    className="relative w-[240px] h-[240px] rounded-full p-[4px]"
                    animate={{
                    boxShadow: [
                        "0 0 20px rgba(128, 93, 238, 0.5)",
                        "0 0 30px rgba(255, 105, 180, 0.5)",
                        "0 0 20px rgba(128, 93, 238, 0.5)",
                    ],
                    background: [
                        "linear-gradient(to right, #804dee, #ff6eb9)",
                        "linear-gradient(to right, #ff6eb9, #804dee)",
                        "linear-gradient(to right, #804dee, #ff6eb9)",
                    ],
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    }}
                >
                    <img
                        src="/src/assets/sauravlogo.png"
                        alt="Saurav"
                        className="w-full h-full object-cover rounded-full"
                    />
                </motion.div>
            </motion.div>

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
              <a href="https://open.spotify.com/user/46bstocc3d65fgbolkayhuqfr?si=c6847961e55a461a" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <FaSpotify />
              </a>
              <a href="https://www.youtube.com/@sauravsan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/saurav_san007/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center w-full">
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
