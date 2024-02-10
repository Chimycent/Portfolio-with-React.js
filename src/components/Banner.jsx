import image from '../assets/github.jpg';
import { FaGithub , FaTwitter , FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp} from "react-icons/fa";
import {TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* {text} */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              INNOCENT <span>NWOSU</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation 
              sequence={[
                'Front-end Developer',
                2000,
                'Back-end Developer', 
                2000,
                'Fullstack Developer',
                2000, 
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div> 
              <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'>Recent full-stack development graduate with satisfactory knowledge
              in HTML, CSS, JavaScript, React JS, SQL etc. Eager to apply skills to real-world projects and contribute to 
              innovative solutions. Passionate about continuous learning and collaboration.
                </motion.p>
                <motion.div 
                variants={fadeIn('up', 0.6)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount:0.7}} 
                className='flex max-w-max gap-x-6 items-center mb-12
                mx-auto lg:mx-0'>
                  <button className='btn btn-lg'>Contact Me</button>
                  <a href="#" className='text-gradient btn-link'>
                    My Portfolio
                    </a>
                </motion.div>
                <motion.div 
                variants={fadeIn('up', 0.7)} 
                initial='hidden' 
                whileInView={'show'} 
                viewport={{once: false, amount:0.7}} 
                className='flex text-[20px] gap-x-6 max-w-max mx-auto
                lg:mx-0'>
                  <a href="http://chimycent.github.io"><FaGithub/></a>
                  
                  <a href="https://twitter.com/Chimycent"><FaTwitter/></a>

                  <a href="http://instagram.com/chimy_cent"><FaInstagram/></a>
                  
                  <a href="https://linkedin.com/innocent_nwosu"><FaLinkedin/></a>
                  
                  <a href="mailto:innocentchime30@gmail.com"><FaEnvelope/></a>
                  
                  <a href="http://wa.me/+2349023009877"><FaWhatsapp/></a>
                  
                </motion.div>
                </div>
                {/* {text} */}
          <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 

          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={image} width={500} height={500} className='border rounded-full mix-blend-overlay'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner