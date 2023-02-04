import React from 'react';
import './Header.scss';
import { animationControls, motion } from 'framer-motion';
import { TerminalIcon } from '../../components/Terminal';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { AiOutlineSend } from 'react-icons/ai';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className='terminal-icon'><TerminalIcon /></span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">
                <img src={images.logo} alt="logo" />
              </h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="tag-cmp_text  p-text">Web Developer</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="tag-cmp_text  p-text">App Developer</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="tag-cmp_text  p-text">Game Developer</p>
          </div>
          <a href="#contact" className="tag-cmp_cta p-text">
            Contact me<AiOutlineSend />
          </a>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img className="hero-img" src={images.hero} alt="developer-hero" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay-circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>
      <motion.div
        variant={ scaleVariants }
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        { [images.linux, images.vue, images.laravel, images.cpp].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        )) }
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');