import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText"
type Props = {
    setSelectedPage:(value:SelectedPage)=> void
}


const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles=`mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    const {
        register,
        trigger,
        formState:{errors}
    } = useForm();
    const onSubmit = async(e:any)=>{
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }
    }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
        <motion.div
        onViewportEnter={()=>{setSelectedPage(SelectedPage.ContactUs)}}>
            {/* HEADER */}
            <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true,
            amount:0.5,
            }}
            transition={{delay:0.2,duration:0.5}}
            variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0},
            }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW </span>
                    TO GET IN SHAPE
                </HText>
                <p>
                    We are a fitness studio based in Los Angeles, California. We offer a wide variety of classes for all fitness levels and goals. Whether you're a beginner or an advanced athlete, we have a class for you. Our classes are designed to help you reach your fitness goals and improve your overall health. We offer classes in cardio, strength training, and flexibility, so you can choose the class that best suits your needs. Our experienced instructors will guide you through each class and provide feedback and support along the way. At our studio, we believe in the power of fitness and we want to help you achieve your goals. Whether you're looking to tone your body, improve your endurance, or simply stay healthy, we have the classes and support you need to succeed.
                </p>
            </motion.div>
            {/* FORM AND IMAGE */}
            <div
            className="mt-10 justify-between gap-8 md:flex">
            <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true,
            amount:0.5,
            }}
            transition={{duration:0.5}}
            variants={{
            hidden:{opacity:0, y:50},
            visible:{opacity:1, y:0},
            }}
            >
                <form target="_blank" 
                onSubmit={onSubmit}
                action="https://formsubmit.co/dff4a7fef53512a8c390bc99c8dece6b"
                method="POST">
                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="NAME"
                    {...register("name",{required:true, maxLength:100})}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-500 ">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                    <input
                    className={inputStyles}
                    type="text"
                    placeholder="EMAIL"
                    {...register("email",{required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                    />
                    {errors.email && (
                        <p className="mt-1 text-primary-500 ">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                    <textarea
                    className={inputStyles}
                    rows={4}
                    cols={50}
                    placeholder="MESSAGE"
                    {...register("message",{ maxLength:2000})}
                    />
                    {errors.message && (
                        <p className="mt-1 text-primary-500 ">
                            {errors.message.type === "maxLength" && "Max length is 2000 char."}
                        </p>
                    )}
                    <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                        SUBMIT
                    </button>
                </form>
            </motion.div>

            <motion.div className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true,
            amount:0.5,
            }}
            transition={{delay:0.2,duration:0.5}}
            variants={{
            hidden:{opacity:0, y:50},
            visible:{opacity:1, y:0},
            }}>
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic}
                    className="w-full" alt="contact-us-page-graphic" />
                </div>
            </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs