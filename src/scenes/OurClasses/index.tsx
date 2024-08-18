import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'
type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}
const Classes: Array<ClassType> = [
        {
            name:"Weight Training Classes",
            description:"Our weight training classes are designed to help you reach your fitness goals. From basic strength training to advanced conditioning, we have a class for everyone. Our classes are led by experienced and certified trainers who will work with you to create a personalized workout plan that suits your needs and goals.",
            image:image1,},
        {
            name:"Yoga Classes",
            description:"Our yoga classes are designed to help you relax and stretch your body. Whether you're looking to improve your flexibility or find inner peace, our experienced yoga teachers will guide you through a series of poses to help you achieve a state of calm and well-being.",
            image:image2,},
        {
            name:"Ab Core Classes",
            description:"Get ready to sweat! Our Ab Core classes are designed to get your core burning and your body moving. From planks to burpees, our certified trainers will guide you through a series of exercises to help you get the most out of your workout.",
        
            image:image3,},
        {
            name:"Adventure Classes",
            description:"Explore the great outdoors while getting fit! Our adventure classes are designed to push you to your limits and challenge your physical abilities. From rock climbing to zip lining, we have a class for every adrenaline-seeker. With our experienced and certified instructors, you'll be sure to have a thrilling time while achieving your fitness goals.",
            image:image4,},
        {
            name:"Fitness Classes",
            description:"We offer a wide range of fitness classes to help you reach your goals. From spin class to dance, you'll find something that suits your style and fitness level. With our experienced and certified instructors, you'll be sure to have a fun and challenging time while getting in shape.",

            image:image5,},
        {
            name:"Training Classes",
            description:"Our training classes are designed to help you reach your fitness goals. With new classes added all the time, you'll never get bored and will always be challenged to reach your fitness goals. Whether you're a beginner or an experienced athlete, our trainers will work with you to create a personalized workout plan that suits your needs and goals.",
            
            image:image6,}]           

const OurClasses = ({setSelectedPage}: Props) => {
  return(<section
  className='w-full bg-primary-100 py-40' id="ourclasses">
    <motion.div
    onViewportEnter={()=>{setSelectedPage(SelectedPage.OurClasses)}}>
        <motion.div
        className='mx-auto w-5/6'
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true,
                amount:0.5,
                }}
        transition={{delay:0.2,duration:0.5}}
        variants={{
                hidden:{opacity:0, x:-100},
                visible:{opacity:1, x:0},
                }}>
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>
                             At Evolve, we offer a variety of classes to suit all fitness levels and goals. From high-intensity cardio and strength training to yoga and Pilates, we have a class to suit everyone. Our classes are designed to be challenging, yet modifiable, so you can work at your own pace and achieve your fitness goals. Our expert instructors are passionate about helping you reach your full potential and will provide you with the support and guidance you need to succeed. Whether you're a beginner or a seasoned athlete, our classes are the perfect way to challenge yourself, improve your fitness, and have fun while doing it.
                        </p>
                    </div>

        </motion.div>
        <div
        className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'
        >
            <ul
            className='w-[2800px] whitespace-nowrap'
            >
                {Classes.map((item:ClassType,index)=>(
                    <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}/>
                ))}
            </ul>
        </div>
    </motion.div>
  </section>
  )
}

export default OurClasses