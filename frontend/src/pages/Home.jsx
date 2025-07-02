import { Link } from "react-router-dom";
import { Contact, Footer, StarsCanvas } from "../components";
import { styles } from '../styles';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center min-h-screen bg-primary text-center px-4 pt-24">
            {/* Photo and content */}
            <img
                src="src/assets/sauravlogo.png"
                alt="My Profile"
                className="rounded-full w-60 h-60 object-cover mb-4"
            />
             {/* Name */}
            <h1 className="text-4xl font-bold">Saurav Shinde</h1>

            {/* Typewriter effect */}
             <p className={`${styles.heroSubText}`}>
                I develop{" "}
                <span style={{ color: "#915eff", fontWeight: "bold" }}>
                    <Typewriter
                    words={["Games", "Web Apps","Software", "3D Models", "Videos"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={60}
                    delaySpeed={2000}
                    />
                </span>
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
                <Link
                    to="/blogs"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/80 transition`}
                >
                    Blogs
                </Link>
                <Link
                    to="/about-me"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/80 transition`}
                >
                    About Me
                </Link>
                <Link
                    to="/my-work"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/80 transition`}
                >
                    My Work
                </Link>
                <a
                    href="https://your-resume-link.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.sectionSubText} px-6 py-2 bg-tertiary text-white rounded-lg hover:bg-tertiary/80 transition`}
                >
                    Resume
                </a>
            </div>
            
        </div>
        <div>
            {/* Contact and Footer below */}
            <div className="relative w-full mt-16">
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    </div>
    
  );
};

export default Home;
