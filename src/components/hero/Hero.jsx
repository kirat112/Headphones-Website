import { useState } from "react";
import TourOne from "../../assets/headphones/JBL_TOUR_One M2_Product Image_Hero_Champagne.webp";
import Tune770 from "../../assets/headphones/JBL_TUNE_770NC.webp"
import Sony from "../../assets/headphones/wh-ch520_beige01_D.png"
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 1,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: TourOne,
    title: "JBL Tour One M2",
    price: "₹17,999.00",
    description:
      "JBL Tour One M2’s True Adaptive Noise Cancelling technology tunes out distractions so you can enjoy your favorite playlists—or even the sound of silence—all powered by legendary Hi-Res certified JBL Pro Sound.",
    modal: "Champagne",
    bgColor: "#91908a",
  },
  {
    id: 2,
    image: Tune770,
    title: "JBL Tune 770NC",
    price: "₹7,999.00",
    description:
      "JBL Tune 770NC’s True Adaptive Noise Cancelling technology blocks out distractions, letting you immerse yourself in your favorite playlists—or simply enjoy pure silence—all powered by legendary JBL Pure Bass Sound.",
    modal: "Blue",
    bgColor: "#4b5870",
  },
  {
    id: 3,
    image: Sony,
    title: "Sony WH-CH520",
    price: "₹5,990.00",
    description:
      "Enjoy high sound quality all day long. The WH-CH520 headphones with up to 50 hours of battery life, stable connectivity, and enhanced call performance, meet the demands of your day.",
    modal: "Beige",
    bgColor: "#98897a",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <div>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Headphone Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.p
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-sm leading-loose text-white/80"
                  >
                    {activeData.description}
                  </motion.p>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 4,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: activeData.bgColor }}
                    className={`px-4 py-2 inline-block font-normal rounded-sm`}
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* headphone list seperator */}
              <div className="flex items-center gap-4 !mt-24 md:justify-start">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="text-sm uppercase">Top Headphones For You</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              {/* headphone list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 9999,
                        text: "Buy Now",
                        textFontSize: "3px",
                        followSpeed: 0.5,
                        scale: 5,
                      }}
                      key={item.id}
                    >
                      <div
                        onClick={() => handleActiveData(item)}
                        className="grid grid-cols-2 place-items-center cursor-pointer"
                        key={item.id}
                      >
                        <div>
                          <img className="w-[200px]" src={item.image} alt="" />
                        </div>
                        <div>
                          <p className="text-base font-bold">{item.price}</p>
                          <p className="text-xs font-normal text-nowrap">
                            {item.modal}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <AnimatePresence mode="wait">
            <motion.div className="flex flex-col items-center justify-end">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 100,
                  transition: { duration: 0.2 },
                }}
                className="w-[300px] md:w-[400px] xl:w-[550px]"
                src={activeData.image}
                alt=""
              />
            </motion.div>
          </AnimatePresence>

          {/* whatsapp icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[999999] mix-blend-difference">
            <FaWhatsapp />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
