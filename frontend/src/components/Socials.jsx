import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import { leetcode } from "../assets";

const Socials = () => {
        return(
            <>
                <a href="https://www.linkedin.com/in/saurav-shinde007/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
                <FaLinkedin />
                </a>
                <a href="https://github.com/sauravshinde007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/u/Saurav_san007/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                    <img src={leetcode} width={30} alt="" />
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
            </>
        )
}

export default Socials;