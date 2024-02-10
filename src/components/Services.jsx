import { BsArrowUpRight} from "react-icons/bs";
import {motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Front-end Development',
    description: 
    "As a front-end developer, I craft the look and feel of websites. I use HTML, CSS, Javascript libraries, to make sure they are user friendly, responsive, and visually attractive. My job is to create a seamess and engaging experience for visitors",
    link: "learn more",
  },
  {
    name: 'Back-end Development',
    description: 
    "As a back-end developer, I build and maintain the behind-the-scenes functionnality of websites or appplications. I work with server-side technologies, databases, and APIs to endure data is processed, stored and delivered efficiently.",
    link: "learn more",
  },
  {
    name: 'Fullstack Developer',
    description: 
    "As a fullstack developer, i bridge the gap between how websites look and how they work. From creating user friendly interfaces to ensuring seamless server interactions. I bring comprehensive skill set to the table",
    link: "learn more",
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* {text} */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 to-accent mb-6'>What i do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>From understanding your requirement, designing a blueprint, an delivering the final product, I do everything that falls inbetween these lines.</h3>
          <button className='btn btn-sm'>See My Work</button>
        </motion.div> 
        {/* {service} */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          {/* {services list} */}
          <div>
            {services.map((service, index)=>{
              const {name, description, link} = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                  </a>
                  <a href="#" className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
              )
            })}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Services;