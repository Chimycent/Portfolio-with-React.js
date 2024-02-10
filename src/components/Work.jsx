import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* {text} */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>
                In my latest project as a full-stack developer, I built an e commerce web app using React.js, Node.js and 
                MongoDB. I focused on creating inituitive interfaces, implementing intricate logic, and ensuring scalability. 
                The result surpassed client expetations, boosting user engagment and revenue
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* {image} */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transistion-all duration-300'></div>
              {/* {ima} */}
              <img src={img1} className='group-hover:scale-125 transistion-all duration-500' />
              {/* {pettice} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transistion-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* {title} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transistion-all duration-700 z-50'>
                <a href="https://wiki.com" className='text-3xl text-white'>Project Title</a>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* {image} */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transistion-all duration-300 '></div>
              {/* {ima} */}
              <img src={img2} className='group-hover:scale-125 transistion-all duration-500' />
              {/* {pettice} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transistion-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* {title} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transistion-all duration-700 z-50'>
                <a href="#" className='text-3xl text-white'>Project Title</a>
              </div>
            </div>
             {/* {image} */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* {overlay} */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transistion-all duration-300 '></div>
              {/* {ima} */}
              <img src={img3} className='group-hover:scale-125 transistion-all duration-500' />
              {/* {pettice} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transistion-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* {title} */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transistion-all duration-700 z-50'>
              <a href="#" className='text-3xl text-white'>Project Title</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default Work