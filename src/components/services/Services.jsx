import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import TourANC from "../../assets/headphoneInfo/jblTourOneANC.jpeg";
import TourMIC from "../../assets/headphoneInfo/jblTourOneMIC.webp";
import TourPlayback from "../../assets/headphoneInfo/jblTourOnePlayback.webp";
import TuneANC from "../../assets/headphoneInfo/jblTuneANC.webp";
import TuneBt from "../../assets/headphoneInfo/jblTuneBt.webp";
import TunePlayback from "../../assets/headphoneInfo/jblTunePlayback.webp";
import SonySound from "../../assets/headphoneInfo/sonySound.webp";
import SonyPair from "../../assets/headphoneInfo/sonyPair.webp";
import SonyPlayback from "../../assets/headphoneInfo/sonyPlayback.webp";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

const servicesData = [
  {
    id: 1,
    title: "Security",
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla possimus repellendus sed fugit doloribus sunt aspernatur perspiciatis facere eveniet.",
    icon: Icon1,
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla possimus repellendus sed fugit doloribus sunt aspernatur perspiciatis facere eveniet.",
    icon: Icon2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    link: "#",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nulla possimus repellendus sed fugit doloribus sunt aspernatur perspiciatis facere eveniet.",
    icon: Icon3,
    delay: 1.1,
  },
];

const jblTourOneInfo = [
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
];

const jblTuneInfo = [
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
];

const sonyInfo = [
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
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h1
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Specifications
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((data) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div>
                      <img src={data.icon} alt="" />
                    </div>
                  ),
                }}
                key={data.id}
              >
                <motion.div
                  variants={fadeUp(data.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="flex flex-col justify-center items-center p-5 max-w-[300px] mx-auto shadow-lg rou bg-white"
                >
                  <img src={data.icon} alt="" className="w-[100px] mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p className="text-center text-sm text-black/75">
                      {data.desc}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
