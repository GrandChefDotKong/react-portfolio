import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [skills, setSkills] = useState([]);
  const [newSkills, setNewSkills] = useState([]);
  const [expSkills, setExpSkills] = useState([]);

  useEffect(() => {
    const newSkillsquery = '*[_type == "new_skills"]';
    const expSkillsQuery = '*[_type == "exp_skills"]';
    const skillsQuery = '*[_type == "skills"]';
  
    client.fetch(newSkillsquery).then((data) => {
      setNewSkills(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(expSkillsQuery).then((data) => {
      setExpSkills(data);
    });

  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <div className="app__skills-title">My Tech stack</div>
          { skills?.map((skill) => (
            <motion.div 
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            > 
              <div className="app__flex" style={{ backgroundColor: skills.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{ skill.name }</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-list">
          <div className="app__skills-title">Tech i have experienced</div>
          { expSkills?.map((skill) => (
            <motion.div 
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            > 
              <div className="app__flex" style={{ backgroundColor: skills.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{ skill.name }</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-list">
          <div className="app__skills-title">Tech I plan to learn</div>
          { newSkills?.map((skill) => (
            <motion.div 
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            > 
              <div className="app__flex" style={{ backgroundColor: skills.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{ skill.name }</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )

}

export default AppWrap(MotionWrap(Skills, 'app__skills'), "skills", 'app__whitebg');