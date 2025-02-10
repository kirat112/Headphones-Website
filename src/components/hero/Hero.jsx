import { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphone Wireless",
    price: "$199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestias impedit adipisci dolorem reiciendis quidem",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphone Wireless 2",
    price: "$199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestias impedit adipisci dolorem reiciendis quidem",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 1,
    image: Headphone3,
    title: "Headphone Wireless 3",
    price: "$199",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestias impedit adipisci dolorem reiciendis quidem",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
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
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Headphone Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl lg:text-6xl font-bold font-varela">
                {activeData.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {activeData.description}
              </p>
              <button
                style={{ backgroundColor: activeData.bgColor }}
                className={`px-4 py-2 inline-block font-normal rounded-sm`}
              >
                Buy and Listen
              </button>

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
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex flex-col items-center justify-end">
            <img
              className="w-[300px] md:w-[400px] xl:w-[550px]"
              src={activeData.image}
              alt=""
            />
          </div>

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
