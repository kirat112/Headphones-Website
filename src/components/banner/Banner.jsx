import { motion } from "framer-motion";
import { fadeUp } from "../services/Services";
import { UpdateFollower } from "react-mouse-follower";
import HeadphoneFront from "../../assets/headphones/JBL_TOUR_One M2_Product Image_Front_Black.webp"

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 place-items-center">
          {/* Banner Image */}
          <div>
            <motion.img
              initial={{ opacity: 0.5, x: -100, rotate: -180 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              src={HeadphoneFront}
              alt=""
              className="w-[300px] md:w-[400px] mx-auto"
            />
          </div>

          {/* Banner Text */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphones with Latest Technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                sed odio architecto illo culpa nam, sunt provident eveniet
                minima vero?
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUp(1.3)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343] hover:bg-[#e33343] hover:text-white p-2"
                >
                  Learn More
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
