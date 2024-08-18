import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}

const benefits: Array<BenefitType> = [
    

    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "At our gym we strive to keep our facilities modern and always updated. We are committed to providing our members with the best possible facilities to help them reach their fitness goals. From the latest cardio equipment to high-quality trainers, we have everything you need to get in shape and stay motivated."
        
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Our diverse range of classes are designed to keep your workouts fresh and exciting. From yoga and Pilates to cardio and strength training, we have something for everyone. With new classes added all the time, you'll never get bored and will always be challenged to reach your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Our trainers are highly experienced and certified, with a passion for helping others achieve their fitness goals. Whether you're a beginner or an experienced athlete, our trainers will work with you to create a personalized workout plan that suits your needs and goals."
    }

]

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        onViewportEnter={()=>{setSelectedPage(SelectedPage.Benefits)}}
        >
            {/*header*/}
            <motion.div className="md:my-5 md:w-3/5"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true,
                amount:0.5,
                }}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}>
                <HText>
                    MORE THAN JUST A GYM
                </HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>
            {/*benefits*/}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            variants={container}
            className="md:flex items-center justify-between gap-8 mt-5">
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit
                    key={benefit.title} 
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>

            {/*Graphics and description*/}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*graphic*/}
                <img className="mx-auto"
                alt="benefits-page-graphic"
                src = {BenefitsPageGraphic}/>
                <div>
                    {/*title*/}
                        <div className="relative">
                            <div
                            className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves"
                            >
                                <motion.div
                                initial={"hidden"}
                                whileInView={"visible"}
                                viewport={{once:true,
                                    amount:0.5,
                                    }}
                                    transition={{duration:0.5}}
                                    variants={{
                                        hidden:{opacity:0, x:-50},
                                        visible:{opacity:1, x:0},
                                    }}>
                                    <HText>MILLIONS OF HAPPY MEMBERS GETTING <span
                                    className="text-primary-500"
                                    >FIT</span></HText>
                                </motion.div>
                            </div>
                        </div>
                    {/*description*/}
                    <motion.div
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true,
                        amount:0.5,
                        }}
                        transition={{duration:0.5,delay:0.2}}
                        variants={{
                            hidden:{opacity:0, x:-50},
                            visible:{opacity:1, x:0},
                        }}>
                        <p
                        className="my-5">
                        At EVOGYM, our mission is to provide the best possible experience for our members. We believe that fitness should be accessible and enjoyable for everyone, regardless of age, skill level, or background. Our state-of-the-art facilities and expert trainers are dedicated to helping our members achieve their fitness goals. Whether you're a beginner looking to get started or an experienced athlete looking to push yourself to new heights, we have the resources and support you need to succeed. Our programs include everything from group fitness classes to personal training sessions, so you can find the right fit for you. We also offer a variety of equipment and tools to help you get the most out of your workouts.
                            
                        </p>
                        <p className="mb-5">
                            We are committed to providing our members with the best possible facilities to help them reach their fitness goals.
                            Whether you're looking to build muscle, improve cardiovascular health, or enhance flexibility and strength, we have the expertise and resources to help you achieve your goals. Our knowledgeable staff is always available to answer your questions and provide guidance, and our facilities are clean and well-maintained to ensure a safe and comfortable environment for all of our members. We are committed to providing the best possible experience for our members, and we are proud to call ourselves one of the world's top gyms.
                        </p>
                    </motion.div>
                    {/*action button*/}
                    <div className="relative mt-16">
                        <div
                        className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>

                    </div>
                </div>

            </div>
        </motion.div>
    </section>
  )
}

export default Benefits