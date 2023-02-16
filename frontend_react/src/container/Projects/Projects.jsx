import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setprojects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if(item === 'All') {
       setFilterWork(projects);
      } else {
        setFilterWork(projects.filter(work => work.tags.includes(item)));
      }
    }, 500);
  }

  useEffect(() => {
    const query = '*[_type == "works"]'
  
    client.fetch(query).then((data) => {
      setprojects(data);
      setFilterWork(data);
    })
  }, []);
  

  return (
    <>
      <h2 className="head-text">My <span>Projects</span></h2>
      <div className="app__projects-filter">
        {['Full Stack', 'Vue', 'Mobile App', 'React', 'All'].map((item, index) => (
          <div key={index} className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active': ''}`} onClick={() => handleWorkFilter(item)}>
            {item}
          </div>
        ))}
      </div>
      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className='app__projects-portfolio'>
        { filterWork.map((work, index) =>  (
          <div className="app__projects-item app__flex" key={index}>
            <div className='app__projects-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div 
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }} 
                className='app__projects-hover app__flex'
              >
              {work.projectLink !== 'blank' && (<a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }} 
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              )}
                <a href={work.codeLink} rel="noreferrer" target="_blank">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }} 
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__projects-content app__flex'>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className='app__projects-tag app__flex'>
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Projects, "app__projects"), 'projects', 'app__primarybg');