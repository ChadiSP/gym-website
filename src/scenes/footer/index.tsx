import Logo from '@/assets/Logo.png'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const child = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}
const index = ({setSelectedPage}: Props) => {
  return (
    <motion.footer
    className='bg-primary-100 py-16'
    onViewportEnter={()=>{setSelectedPage(SelectedPage.ContactUs)}}
    initial="hidden"
    whileInView={"visible"}
    variants={container}
    >
        <motion.div className='mx-auto w-5/6 md:flex md:justify-between basis-3/5'
        >
            {/*first div*/}
            <motion.div className='basis-1/2 mt-10 md:mt-0'
            variants={child}>
                <div><img src={Logo} alt="gym-logo" /></div>
                <div>
                <p className='mt-3 text-sm'>
                    Stay Updated and Get the Latest Gym News, Updates, and Events.
                    Subscribe to our Newsletter and Stay Connected with us. We promise not to spam you, only the good stuff.
                    Subscribe to our Newsletter and Stay Connected with us. 
                </p>
                </div>
            </motion.div>
            {/*second div*/}
            <motion.div className='mt-16 md:mt-0'
            variants={child}>
                <h1 className='font-bold mb-2'>Links</h1>
                <ul >
                    <li className='mt-2'>Contact Us</li>
                    <li className='mt-2'>About Us</li>
                    <li className='mt-2'>Careers</li>
                    <li className='mt-2'>FAQs</li>
                </ul>
            </motion.div>

            {/*third div*/}
            <motion.div className='mt-16 md:mt-0'
            variants={child}>
                <h1 className='font-bold mb-2'>Contact Us</h1>
                <p className='text-sm mb-2'>123 Main Street, Los Angeles, CA 12345</p>
                <p className='text-sm mb-2'>123-456-7890</p>
            </motion.div>
        </motion.div>
    </motion.footer>
  )
}

export default index