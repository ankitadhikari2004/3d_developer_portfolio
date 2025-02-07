import {BallCanvas} from './canvas'
import { SectionWrapper} from '../hoc'
import {technologies} from '../constants'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion';



const Tech = () => {
  return (

    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I know so far...</p>
        <h2 className={styles.sectionHeadText}>My Tech Stack</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {
          technologies.map((techology) => (
            <div className='w-28 h-28 key={technology.name'>
              <BallCanvas icon={techology.icon} />
            </div>


          ))
        }
      </div>
    </>
    
  )
}

export default SectionWrapper(Tech,"");