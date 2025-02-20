import { useState } from "react";
import TourOne from "../../assets/headphones/JBL_TOUR_One M2_Product_Image_Hero_Champagne.webp";
import Tune770 from "../../assets/headphones/JBL_TUNE_770NC.webp";
import Sony from "../../assets/headphones/wh-ch520_beige01_D.png";
import TourANC from "../../assets/headphoneInfo/jblTourOneANC.jpeg";
import TourMIC from "../../assets/headphoneInfo/jblTourOneMIC.webp";
import TourPlayback from "../../assets/headphoneInfo/jblTourOnePlayback.webp";
import TuneANC from "../../assets/headphoneInfo/jblTuneANC.webp";
import TuneBt from "../../assets/headphoneInfo/jblTuneBt.webp";
import TunePlayback from "../../assets/headphoneInfo/jblTunePlayback.webp";
import SonySound from "../../assets/headphoneInfo/sonySound.webp";
import SonyPair from "../../assets/headphoneInfo/sonyPair.webp";
import SonyPlayback from "../../assets/headphoneInfo/sonyPlayback.webp";
import TourBanner from "../../assets/headphones/JBL_TOUR_One_M2_Banner.webp"
import TuneBanner from "../../assets/headphones/JBL_Tune_770NC_Banner.webp"
import SonyBanner from "../../assets/headphones/Sony_WH-CH520_Banner.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import {Banner, Services} from "../../index.js";

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
    bannerImage:TourBanner,
    title: "JBL Tour One M2",
    price: "₹17,999.00",
    description:
      "JBL Tour One M2’s True Adaptive Noise Cancelling technology tunes out distractions so you can enjoy your favorite playlists—or even the sound of silence—all powered by legendary Hi-Res certified JBL Pro Sound.",
    modal: "Champagne",
    bgColor: "#91908a",
    specifications: [
      {
        id: 1,
        name: "JBL Tour One M2",
        image: TourANC,
        infoTitle: "True Adaptive Noise Cancelling",
        infoDesc: `Enjoy the soundtrack of your life no matter where you are.
         True Adaptive Noise Cancelling technology automatically uses 4 noise sensing mics to adjust to your surroundings in real-time, minimizing distractions when you need to focus and optimizing the Tour’s performance for a superior audio experience—all while you adjust ANC mode control with the JBL Headphones app.`,
      },
      {
        id: 2,
        name: "JBL Tour One M2",
        image: TourMIC,
        infoTitle: "4-Mic Superior Calls with Voice Control",
        infoDesc: `The 4-mic crystal call algorithm of the JBL Tour One M2 allows you to have better conversations even in loud or windy environments or to get help from your preferred voice assistant. And with VoiceAware, you can choose how much of your own voice to hear by controlling the amount of mic input routed back into your earbuds.`,
      },
      {
        id: 3,
        name: "JBL Tour One M2",
        image: TourPlayback,
        infoTitle: "Up to 50 Hours of Playback",
        infoDesc: `Listen without limits. Enjoy up to 50 hours of playback, or up to 30 hours with True Adaptive Noise Cancelling enabled. And when you need a boost, just speed charge for 10 minutes and get an extra 5 hours of battery life.`,
      },
    ],
  },
  {
    id: 2,
    image: Tune770,
    title: "JBL Tune 770NC",
    bannerImage:TuneBanner,
    price: "₹7,999.00",
    description:
      "JBL Tune 770NC’s True Adaptive Noise Cancelling technology blocks out distractions, letting you immerse yourself in your favorite playlists—or simply enjoy pure silence—all powered by legendary JBL Pure Bass Sound.",
    modal: "Blue",
    bgColor: "#4b5870",
    specifications: [
      {
        id: 1,
        name: "JBL Tune 770NC",
        image: TuneANC,
        infoTitle: "Adaptive Noise Cancelling with Smart Ambient",
        infoDesc: `Adaptive Noise Cancelling means zero distractions when it's time to focus on your studies—or get your groove on. And if you want to hear the world around you without removing your headphones, Ambient Aware and TalkThru sharpen the sounds of your surroundings or voices. Easily activate these Ambient Sound Control modes through the JBL Headphones app.`,
      },
      {
        id: 2,
        name: "JBL Tune 770NC",
        image: TuneBt,
        infoTitle: "Bluetooth 5.3 with LE Audio *",
        infoDesc: `Wirelessly stream high-quality JBL Pure Bass Sound from your smartphone with the help of the latest Bluetooth technology. Optimize the Bluetooth performance with the Smart Audio & Video feature in the JBL Headphones app by selecting the Audio (for the best sound quality) or the Video (for an optimal gaming and video output) modes. * Available via OTA update at a later stage.`,
      },
      {
        id: 3,
        name: "JBL Tune 770NC",
        image: TunePlayback,
        infoTitle: "Up to 70H* battery life with speed charge",
        infoDesc: `For long-lasting fun, listen wirelessly for up to 44 hours and recharge the battery in as little as 2 hours with the convenient Type-C USB cable. A quick 5-minute recharge gives you 3 additional hours of music. *Battery life: BT on / ANC off`,
      },
    ],
  },
  {
    id: 3,
    image: Sony,
    bannerImage:SonyBanner,
    title: "Sony WH-CH520",
    price: "₹5,990.00",
    description:
      "Enjoy high sound quality all day long. The WH-CH520 headphones with up to 50 hours of battery life, stable connectivity, and enhanced call performance, meet the demands of your day.",
    modal: "Beige",
    bgColor: "#98897a",
    specifications:[
      {
        id: 1,
        name: "Sony WH-CH520",
        image: SonySound,
        infoTitle: "360 Spatial Sound Personalizer",
        infoDesc: `With BRAVIA XR™2 and Wireless Transmitter WLA-NS73. Enjoy a thrilling Dolby Atmos® experience and 360 Spatial Sound that adapts to your ears with BRAVIA XR™ and these headphones using wireless transmitter WLA-NS7.4`,
      },
      {
        id: 2,
        name: "Sony WH-CH520",
        image: SonyPair,
        infoTitle: "Multipoint connection",
        infoDesc: `For total convenience, these Bluetooth® headphones can be paired with two Bluetooth® devices at the same time. So when a call comes in, your headphones know which device is ringing and connects to the right one automatically.1`,
      },
      {
        id: 3,
        name: "Sony WH-CH520",
        image: SonyPlayback,
        infoTitle: "Stay powered-up for days",
        infoDesc: `With up to 50 hours of battery life, you can listen to your favourite music without worrying about running out of charge. And, if your headphones battery is running low, a 3-minute quick-charge can give you 1.5 hours of listening time.`,
      },
    ]
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

      {/* specifications section */}
      <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 1.5,
          }}
        >
          <Services activeHeadphone={activeData}/>
          <Banner activeHeadphone={activeData}/>
        </UpdateFollower>
    </div>
  );
};

export default Hero;
