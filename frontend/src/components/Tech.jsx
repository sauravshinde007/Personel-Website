import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {textVariant} from '../utils/motion';
import { styles } from '../styles';

const TechnologyCard = ({ index, name, icon }) => (
  <Tilt className="xs:w-[100px] w-half">
    <div className="w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card">
      <div
        className="bg-tertiary rounded-[15px] py-3 px-5 min-h-[100px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        <h3 className="text-white text-[14px] font-bold text-center">{name}</h3>
      </div>
    </div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I have used.</p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
      {technologies.map((technology, index)=>(
        <TechnologyCard 
          key={technology.name}
          index={index}
          name={technology.name}
          icon={technology.icon}
        />
      ))}
    </div>

    </>
    
  )
}

export default SectionWrapper(Tech, "");