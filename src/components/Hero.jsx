import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { RobotCanvas } from "./canvas";
import { slideIn } from "../utils/motion"; // Import slideIn function

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I`m <span className="text-[#915eff]">Michael</span>
          </h1>
          <p className={`${styles.heroSubtext} mt-2 text-white-100`}>
            I develop Websites, <br className="sm:block hidden" /> and web
            applications
          </p>
        </div>
      </div>

      {/* Canvas Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Show ComputersCanvas on Large Screens */}
        <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
          <ComputersCanvas />
        </div>

        {/* Apply Motion Effect to RobotCanvas on Mobile */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="block lg:hidden absolute top-1/2 left-0 w-full md:h-[600px] h-[450px] items-center justify-center -translate-y-1/2"
        >
          <RobotCanvas />
        </motion.div>
      </div>

      {/* Scroll Indicator (For All Devices) */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
