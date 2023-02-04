import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsBrush } from 'react-icons/bs';
import { FaGuitar } from 'react-icons/fa';
import { GrGamepad } from 'react-icons/gr';
import { GiCookingPot } from 'react-icons/gi';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then(data => setAbouts(data))
  }, [])
  

  return (
    <>
      <h2 className='head-text'>About me</h2>
      <div className="app__profiles">
        <img src={images.aboutImage} alt="hello" />
        <p>
          Started as a hobbyist game developer and became a multidisciplinary 
          developer, with exentisive knowledge and years experience, working in 
          web technologies, delivering quality work. Interested not only in web 
          programming but also in hardware, machine learning, game development 
          and network.
        </p>
      </div>
      <section className="about__hoobies">
        <h3>
          My hoobies
        </h3>
        <ul>
          <li><AiOutlineCamera /> Photography</li>
          <li><BsBrush /> Calligraphy</li>
          <li><FaGuitar /> Guitar</li>
          <li><GrGamepad />Gaming</li>
          <li><GiCookingPot /> Cooking</li>
        </ul>
      </section>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');